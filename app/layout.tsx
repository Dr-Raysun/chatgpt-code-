import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Many-to-Many CRUD",
  description: "Next.js, MongoDB, and Mongoose CRUD for many-to-many relationships",
};

const navItems = [
  { href: "/", label: "Home" },
  { href: "/students", label: "Students" },
  { href: "/courses", label: "Courses" },
  { href: "/enrollments", label: "Enrollments" },
];

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-slate-50 text-slate-900 antialiased">
        <header className="border-b border-slate-200 bg-white">
          <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
            <Link href="/" className="text-lg font-bold text-slate-950">Many-to-Many CRUD</Link>
            <div className="flex gap-3 text-sm font-medium text-slate-600">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href} className="rounded-md px-3 py-2 hover:bg-slate-100 hover:text-slate-950">
                  {item.label}
                </Link>
              ))}
            </div>
          </nav>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
