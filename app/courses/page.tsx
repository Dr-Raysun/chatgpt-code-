import Link from "next/link";
import { deleteCourse, getCourses } from "@/actions/course.actions";
import { SearchBox } from "@/components/shared/SearchBox";

export default async function CoursesPage({ searchParams }: { searchParams?: { search?: string } }) {
  const raw = searchParams?.search;
  const search = Array.isArray(raw) ? raw[0] : raw;
  const courses = await getCourses(search);

  return (
    <section className="mx-auto max-w-6xl px-6 py-10">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-3xl font-bold">Courses</h1>
        <Link href="/courses/new" className="rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white">
          New Course
        </Link>
      </div>
      <SearchBox currentSearch={search ?? ""} placeholder="Search courses…" />
      <div className="mt-6 rounded-xl border border-slate-200 bg-white shadow-sm">
        {courses.length === 0 ? (
          <p className="p-6 text-slate-600">No courses yet.</p>
        ) : (
          <table className="w-full text-left text-sm">
            <thead className="bg-slate-100">
              <tr>
                <th className="p-4">Code</th>
                <th className="p-4">Title</th>
                <th className="p-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              {courses.map((c: any) => (
                <tr key={c._id} className="border-t border-slate-200">
                  <td className="p-4 font-medium">{c.code}</td>
                  <td className="p-4">{c.title}</td>
                  <td className="flex gap-2 py-3">
                    <Link href={`/courses/${c._id}`} className="rounded border px-3 py-2">
                      View
                    </Link>
                    <Link href={`/courses/${c._id}/edit`} className="rounded border px-3 py-2">
                      Edit
                    </Link>
                    <form action={deleteCourse.bind(null, c._id)}>
                      <button className="rounded bg-red-600 px-3 py-2 text-white">Delete</button>
                    </form>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </section>
  );
}
