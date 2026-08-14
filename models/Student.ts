import { model, models, Schema, type InferSchemaType } from "mongoose";

const StudentSchema = new Schema(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, unique: true, trim: true, lowercase: true },
  },
  { timestamps: true },
);

export type StudentDocument = InferSchemaType<typeof StudentSchema> & { _id: string };

const Student = models.Student || model("Student", StudentSchema);

export default Student;
