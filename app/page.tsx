import Link from "next/link";

const cards = [
  { href: "/students", title: "Students", text: "Create, view, edit, and delete students." },
  { href: "/courses", title: "Courses", text: "Manage courses that students can join." },
  { href: "/enrollments", title: "Enrollments", text: "Connect students and courses with a many-to-many join collection." },
];

export default function Home() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-12">
      <div className="mb-8">
        <p className="text-sm font-semibold uppercase tracking-wide text-blue-600">Server Actions + Mongoose</p>
        <h1 className="mt-2 text-4xl font-bold">Many-to-many CRUD demo</h1>
        <p className="mt-3 max-w-2xl text-slate-600">
          Learn CRUD with Students, Courses, and Enrollment records that model the relationship between them.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-3">
        {cards.map((card) => (
          <Link
            key={card.href}
            href={card.href}
            className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md"
          >
            <h2 className="text-xl font-semibold">{card.title}</h2>
            <p className="mt-2 text-sm text-slate-600">{card.text}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
