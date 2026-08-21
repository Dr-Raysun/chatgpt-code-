import { model, models, Schema, Types, type InferSchemaType } from "mongoose";


/**
 * Enrollment is the join collection for the many-to-many relationship.
 *
 * Instead of storing a growing `courses` array on Student and a matching
 * `students` array on Course, every row in this collection says:
 *
 *   "this one student belongs to this one course."
 *
 * That small sentence is the whole relationship. It lets one student have many
 * enrollment rows, and one course also have many enrollment rows. The result is
 * a many-to-many relationship without duplicating relationship state in two
 * parent documents.
 */
const EnrollmentSchema = new Schema(
  {
    /**
     * The left side of the relationship.
     *
     * `Types.ObjectId` stores the MongoDB id of a Student document. The `ref`
     * value tells Mongoose which model to use when we call `.populate("student")`
     * in the server actions.
     */
    student: { type: Types.ObjectId, ref: "Student", required: true },

    /**
     * The right side of the relationship.
     *
     * This field points at a Course document. A different Enrollment document can
     * reuse the same course id with another student id, which is what allows many
     * students to join the same course.
     */
    course: { type: Types.ObjectId, ref: "Course", required: true },

    /**
     * Relationship-specific data belongs on the join collection.
     *
     * Status describes the student's membership in this course. This is the key
     * reason a join collection is more useful than two arrays: the relationship
     * itself can carry its own fields.
     */

const EnrollmentSchema = new Schema(
  {
    student: { type: Types.ObjectId, ref: "Student", required: true },
    course: { type: Types.ObjectId, ref: "Course", required: true },

    status: {
      type: String,
      enum: ["active", "completed", "dropped"],
      default: "active",
      required: true,
    },


    /**
     * Another relationship-specific field.
     *
     * `enrolledAt` records when this student joined this course. It does not
     * belong only to Student or only to Course; it belongs to the connection
     * between them, so it lives on Enrollment.
     */

    enrolledAt: { type: Date, default: Date.now, required: true },
  },
  { timestamps: true },
);


/**
 * Protect the many-to-many pair from duplicates.
 *
 * This index means MongoDB will allow:
 *   Student A -> Course X
 *   Student A -> Course Y
 *   Student B -> Course X
 *
 * But it will reject a second copy of:
 *   Student A -> Course X
 *
 * So the pair `{ student, course }` is unique, while each individual field can
 * still appear many times across the collection.
 */

EnrollmentSchema.index({ student: 1, course: 1 }, { unique: true });

export type EnrollmentDocument = InferSchemaType<typeof EnrollmentSchema> & { _id: string };

/**
 * Reuse an existing compiled model during Next.js development reloads.
 *
 * Next can evaluate this file more than once in development. `models.Enrollment`
 * prevents Mongoose from throwing an overwrite error when the schema is already
 * registered.
 */

const Enrollment = models.Enrollment || model("Enrollment", EnrollmentSchema);

export default Enrollment;
