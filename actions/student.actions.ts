"use server";

import { revalidatePath } from "next/cache";
import { notFound, redirect } from "next/navigation";
import { connectToDatabase } from "@/lib/db";
import { serializeDocument } from "@/lib/serialize";
import { objectIdSchema, studentSchema } from "@/lib/validations";
import Enrollment from "@/models/Enrollment";
import Student from "@/models/Student";

export async function getStudents() {
  await connectToDatabase();
  const students = await Student.find().sort({ createdAt: -1 }).lean();
  return serializeDocument(students);
}

export async function getStudentById(id: string) {
  const parsedId = objectIdSchema.safeParse(id);
  if (!parsedId.success) notFound();
  await connectToDatabase();
  const student = await Student.findById(id).lean();
  if (!student) notFound();
  return serializeDocument(student);
}

export async function createStudent(formData: FormData) {
  const parsed = studentSchema.parse({ name: formData.get("name"), email: formData.get("email") });
  await connectToDatabase();
  await Student.create(parsed);
  revalidatePath("/students");
  redirect("/students");
}

export async function updateStudent(id: string, formData: FormData) {
  objectIdSchema.parse(id);
  const parsed = studentSchema.parse({ name: formData.get("name"), email: formData.get("email") });
  await connectToDatabase();
  await Student.findByIdAndUpdate(id, parsed, { runValidators: true });
  revalidatePath("/students");
  revalidatePath(`/students/${id}`);
  redirect(`/students/${id}`);
}

export async function deleteStudent(id: string) {
  objectIdSchema.parse(id);
  await connectToDatabase();
  await Enrollment.deleteMany({ student: id });
  await Student.findByIdAndDelete(id);
  revalidatePath("/students");
  revalidatePath("/enrollments");
  redirect("/students");
}
