import { model, models, Schema, Types, type InferSchemaType } from "mongoose";

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
    enrolledAt: { type: Date, default: Date.now, required: true },
  },
  { timestamps: true },
);

EnrollmentSchema.index({ student: 1, course: 1 }, { unique: true });

export type EnrollmentDocument = InferSchemaType<typeof EnrollmentSchema> & { _id: string };

const Enrollment = models.Enrollment || model("Enrollment", EnrollmentSchema);

export default Enrollment;
