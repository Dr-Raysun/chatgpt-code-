import { createEnrollment } from "@/actions/enrollment.actions";

type EnrollmentFormProps = {
  students: { _id: string; name: string; email: string }[];
  courses: { _id: string; title: string; code: string }[];
};

export function EnrollmentForm({ students, courses }: EnrollmentFormProps) {
  return (
    <form action={createEnrollment} className="space-y-5 rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
      <label className="block text-sm font-medium text-slate-700">Student<select name="student" required className="mt-2 w-full rounded-md border border-slate-300 px-3 py-2"><option value="">Select a student</option>{students.map((s) => <option key={s._id} value={s._id}>{s.name} ({s.email})</option>)}</select></label>
      <label className="block text-sm font-medium text-slate-700">Course<select name="course" required className="mt-2 w-full rounded-md border border-slate-300 px-3 py-2"><option value="">Select a course</option>{courses.map((c) => <option key={c._id} value={c._id}>{c.code} — {c.title}</option>)}</select></label>
      <label className="block text-sm font-medium text-slate-700">Status<select name="status" defaultValue="active" className="mt-2 w-full rounded-md border border-slate-300 px-3 py-2"><option value="active">Active</option><option value="completed">Completed</option><option value="dropped">Dropped</option></select></label>
      <button className="rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700">Create Enrollment</button>
    </form>
  );
}
