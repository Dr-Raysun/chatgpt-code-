import { getStudentById } from "@/actions/student.actions";
import { StudentForm } from "@/components/students/StudentForm";

export default async function EditStudentPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const student = await getStudentById(id);
  return <section className="mx-auto max-w-3xl px-6 py-10"><h1 className="mb-6 text-3xl font-bold">Edit Student</h1><StudentForm student={student} /></section>;
}
