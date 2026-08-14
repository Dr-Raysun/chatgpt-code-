import Link from "next/link";
import { deleteStudent, getStudents } from "@/actions/student.actions";

export default async function StudentsPage() {
  const students = await getStudents();
  return <section className="mx-auto max-w-6xl px-6 py-10"><div className="mb-6 flex items-center justify-between"><h1 className="text-3xl font-bold">Students</h1><Link href="/students/new" className="rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white">New Student</Link></div><div className="rounded-xl border border-slate-200 bg-white shadow-sm">{students.length === 0 ? <p className="p-6 text-slate-600">No students yet.</p> : <table className="w-full text-left text-sm"><thead className="bg-slate-100"><tr><th className="p-4">Name</th><th>Email</th><th>Actions</th></tr></thead><tbody>{students.map((s: any) => <tr key={s._id} className="border-t border-slate-200"><td className="p-4 font-medium">{s.name}</td><td>{s.email}</td><td className="flex gap-2 py-3"><Link href={`/students/${s._id}`} className="rounded border px-3 py-2">View</Link><Link href={`/students/${s._id}/edit`} className="rounded border px-3 py-2">Edit</Link><form action={deleteStudent.bind(null, s._id)}><button className="rounded bg-red-600 px-3 py-2 text-white">Delete</button></form></td></tr>)}</tbody></table>}</div></section>;
}
