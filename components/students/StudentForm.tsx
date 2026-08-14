import { createStudent, updateStudent } from "@/actions/student.actions";

type StudentFormProps = { student?: { _id: string; name: string; email: string } };

export function StudentForm({ student }: StudentFormProps) {
  const action = student ? updateStudent.bind(null, student._id) : createStudent;
  return (
    <form action={action} className="space-y-5 rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
      <label className="block text-sm font-medium text-slate-700">Name<input name="name" defaultValue={student?.name} required className="mt-2 w-full rounded-md border border-slate-300 px-3 py-2" /></label>
      <label className="block text-sm font-medium text-slate-700">Email<input name="email" type="email" defaultValue={student?.email} required className="mt-2 w-full rounded-md border border-slate-300 px-3 py-2" /></label>
      <button className="rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700">{student ? "Update Student" : "Create Student"}</button>
    </form>
  );
}
