import { getCourseById } from "@/actions/course.actions";
import { CourseForm } from "@/components/courses/CourseForm";

export default async function EditCoursePage({ params }: { params: Promise<{ id: string }> }) { const { id } = await params; const course = await getCourseById(id); return <section className="mx-auto max-w-3xl px-6 py-10"><h1 className="mb-6 text-3xl font-bold">Edit Course</h1><CourseForm course={course} /></section>; }
