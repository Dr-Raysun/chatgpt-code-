"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { connectToDatabase } from "@/lib/db";
import { serializeDocument } from "@/lib/serialize";
import { enrollmentSchema, enrollmentStatusSchema, objectIdSchema } from "@/lib/validations";
import Enrollment from "@/models/Enrollment";

export async function getEnrollments() {
  await connectToDatabase();
  const enrollments = await Enrollment.find()
    .populate("student")
    .populate("course")
    .sort({ createdAt: -1 })
    .lean();
  return serializeDocument(enrollments);
}

export async function getEnrollmentsByStudent(studentId: string) {
  objectIdSchema.parse(studentId);
  await connectToDatabase();
  const enrollments = await Enrollment.find({ student: studentId })
    .populate("course")
    .sort({ enrolledAt: -1 })
    .lean();
  return serializeDocument(enrollments);
}

export async function getEnrollmentsByCourse(courseId: string) {
  objectIdSchema.parse(courseId);
  await connectToDatabase();
  const enrollments = await Enrollment.find({ course: courseId })
    .populate("student")
    .sort({ enrolledAt: -1 })
    .lean();
  return serializeDocument(enrollments);
}

export async function createEnrollment(formData: FormData) {
  const parsed = enrollmentSchema.parse({
    student: formData.get("student"),
    course: formData.get("course"),
    status: formData.get("status") || "active",
  });
  await connectToDatabase();
  const existing = await Enrollment.findOne({ student: parsed.student, course: parsed.course });
  if (existing) throw new Error("This student is already enrolled in this course.");
  await Enrollment.create(parsed);
  revalidatePath("/enrollments");
  revalidatePath(`/students/${parsed.student}`);
  revalidatePath(`/courses/${parsed.course}`);
  redirect("/enrollments");
}

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
