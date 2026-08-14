import { getCourses } from "@/actions/course.actions";
import { getStudents } from "@/actions/student.actions";
import { EnrollmentForm } from "@/components/enrollments/EnrollmentForm";

export default async function NewEnrollmentPage() { const [students, courses] = await Promise.all([getStudents(), getCourses()]); return <section className="mx-auto max-w-3xl px-6 py-10"><h1 className="mb-6 text-3xl font-bold">Create Enrollment</h1><EnrollmentForm students={students} courses={courses} /></section>; }
