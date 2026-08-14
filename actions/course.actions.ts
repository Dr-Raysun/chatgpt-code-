"use server";

import { revalidatePath } from "next/cache";
import { notFound, redirect } from "next/navigation";
import { connectToDatabase } from "@/lib/db";
import { serializeDocument } from "@/lib/serialize";
import { courseSchema, objectIdSchema } from "@/lib/validations";
import Course from "@/models/Course";
import Enrollment from "@/models/Enrollment";

export async function getCourses() {
  await connectToDatabase();
  const courses = await Course.find().sort({ createdAt: -1 }).lean();
  return serializeDocument(courses);
}

export async function getCourseById(id: string) {
  const parsedId = objectIdSchema.safeParse(id);
  if (!parsedId.success) notFound();
  await connectToDatabase();
  const course = await Course.findById(id).lean();
  if (!course) notFound();
  return serializeDocument(course);
}

export async function createCourse(formData: FormData) {
  const parsed = courseSchema.parse({ title: formData.get("title"), code: formData.get("code"), description: formData.get("description") });
  await connectToDatabase();
  await Course.create(parsed);
  revalidatePath("/courses");
  redirect("/courses");
}

export async function updateCourse(id: string, formData: FormData) {
  objectIdSchema.parse(id);
  const parsed = courseSchema.parse({ title: formData.get("title"), code: formData.get("code"), description: formData.get("description") });
  await connectToDatabase();
  await Course.findByIdAndUpdate(id, parsed, { runValidators: true });
  revalidatePath("/courses");
  revalidatePath(`/courses/${id}`);
  redirect(`/courses/${id}`);
}

export async function deleteCourse(id: string) {
  objectIdSchema.parse(id);
  await connectToDatabase();
  await Enrollment.deleteMany({ course: id });
  await Course.findByIdAndDelete(id);
  revalidatePath("/courses");
  revalidatePath("/enrollments");
  redirect("/courses");
}
