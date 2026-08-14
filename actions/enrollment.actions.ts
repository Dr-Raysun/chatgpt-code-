"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { connectToDatabase } from "@/lib/db";
import { serializeDocument } from "@/lib/serialize";
import { enrollmentSchema, enrollmentStatusSchema, objectIdSchema } from "@/lib/validations";
import Enrollment from "@/models/Enrollment";

/**
 * Read every relationship row in the join collection.
 *
 * The Enrollment documents only store ObjectIds, so we use `populate` twice to
 * turn the `student` id into the Student document and the `course` id into the
 * Course document. This gives the enrollments page enough data to print both
 * sides of the relationship in one list.
 */
export async function getEnrollments() {
  await connectToDatabase();

  const enrollments = await Enrollment.find()
    .populate("student")
    .populate("course")
    .sort({ createdAt: -1 })
    .lean();

  return serializeDocument(enrollments);
}

/**
 * Read the "one student has many courses" side of the relationship.
 *
 * We do not query Course directly here. Instead, we ask the join collection for
 * every row whose `student` field matches this student id, then populate the
 * `course` field. The returned rows are the student's course memberships.
 */
export async function getEnrollmentsByStudent(studentId: string) {
  objectIdSchema.parse(studentId);
  await connectToDatabase();

  const enrollments = await Enrollment.find({ student: studentId })
    .populate("course")
    .sort({ enrolledAt: -1 })
    .lean();

  return serializeDocument(enrollments);
}

/**
 * Read the "one course has many students" side of the relationship.
 *
 * This is the mirror of `getEnrollmentsByStudent`: the join collection is still
 * the source of truth, but now we filter by `course` and populate `student`.
 */
export async function getEnrollmentsByCourse(courseId: string) {
  objectIdSchema.parse(courseId);
  await connectToDatabase();

  const enrollments = await Enrollment.find({ course: courseId })
    .populate("student")
    .sort({ enrolledAt: -1 })
    .lean();

  return serializeDocument(enrollments);
}

/**
 * Create the relationship between one Student and one Course.
 *
 * The submitted form sends two ids: `student` and `course`. Creating an
 * Enrollment document with those ids is the many-to-many write operation. We
 * also allow a status because status is data about the relationship itself.
 */
export async function createEnrollment(formData: FormData) {
  const parsed = enrollmentSchema.parse({
    student: formData.get("student"),
    course: formData.get("course"),
    status: formData.get("status") || "active",
  });

  await connectToDatabase();

  /**
   * Check before writing so users get a clear application-level error.
   *
   * The schema's compound unique index is still the final database guard, but
   * this explicit query makes the intent readable: the same student/course pair
   * should only exist once.
   */
  const existing = await Enrollment.findOne({ student: parsed.student, course: parsed.course });
  if (existing) throw new Error("This student is already enrolled in this course.");

  await Enrollment.create(parsed);

  /**
   * Revalidate every page that can show this relationship.
   *
   * The enrollments index shows the new join row, the student detail page shows
   * the student's courses, and the course detail page shows the course's
   * students.
   */
  revalidatePath("/enrollments");
  revalidatePath(`/students/${parsed.student}`);
  revalidatePath(`/courses/${parsed.course}`);

  redirect("/enrollments");
}

/**
 * Update data that belongs to the relationship, not to either parent document.
 *
 * Changing `status` should modify only the Enrollment row. The Student and
 * Course documents stay exactly the same because their identity data did not
 * change.
 */
export async function updateEnrollmentStatus(id: string, formData: FormData) {
  objectIdSchema.parse(id);
  const status = enrollmentStatusSchema.parse(formData.get("status"));

  await connectToDatabase();

  const enrollment = await Enrollment.findByIdAndUpdate(id, { status }, { new: true });

  if (enrollment) {
    revalidatePath(`/students/${enrollment.student}`);
    revalidatePath(`/courses/${enrollment.course}`);
  }

  revalidatePath("/enrollments");
  redirect("/enrollments");
}

/**
 * Delete only the relationship row.
 *
 * Removing an Enrollment disconnects one student from one course. It does not
 * delete the Student document, and it does not delete the Course document. This
 * is the safest way to model "unenroll" in a many-to-many system.
 */
export async function deleteEnrollment(id: string) {
  objectIdSchema.parse(id);
  await connectToDatabase();

  const enrollment = await Enrollment.findByIdAndDelete(id);

  if (enrollment) {
    revalidatePath(`/students/${enrollment.student}`);
    revalidatePath(`/courses/${enrollment.course}`);
  }

  revalidatePath("/enrollments");
}
