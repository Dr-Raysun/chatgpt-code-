import { model, models, Schema, type InferSchemaType } from "mongoose";

const CourseSchema = new Schema(
  {
    title: { type: String, required: true, trim: true },
    code: { type: String, required: true, unique: true, trim: true, uppercase: true },
    description: { type: String, default: "", trim: true },
  },
  { timestamps: true },
);

export type CourseDocument = InferSchemaType<typeof CourseSchema> & { _id: string };

const Course = models.Course || model("Course", CourseSchema);

export default Course;
