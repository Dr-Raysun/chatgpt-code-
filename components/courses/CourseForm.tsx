import { createCourse, updateCourse } from "@/actions/course.actions";

type CourseFormProps = { course?: { _id: string; title: string; code: string; description?: string } };

export function CourseForm({ course }: CourseFormProps) {
  const action = course ? updateCourse.bind(null, course._id) : createCourse;
  return (
    <form action={action} className="space-y-5 rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
      <label className="block text-sm font-medium text-slate-700">Title<input name="title" defaultValue={course?.title} required className="mt-2 w-full rounded-md border border-slate-300 px-3 py-2" /></label>
      <label className="block text-sm font-medium text-slate-700">Code<input name="code" defaultValue={course?.code} required className="mt-2 w-full rounded-md border border-slate-300 px-3 py-2" /></label>
      <label className="block text-sm font-medium text-slate-700">Description<textarea name="description" defaultValue={course?.description} className="mt-2 w-full rounded-md border border-slate-300 px-3 py-2" /></label>
      <button className="rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700">{course ? "Update Course" : "Create Course"}</button>
    </form>
  );
}
