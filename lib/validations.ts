import { z } from "zod";

export const objectIdSchema = z.string().regex(/^[0-9a-fA-F]{24}$/, "Invalid MongoDB id");

export const studentSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("A valid email is required").max(200),
});

export const courseSchema = z.object({
  title: z.string().trim().min(1, "Title is required").max(120),
  code: z.string().trim().min(1, "Code is required").max(30),
  description: z.string().trim().max(500).optional().or(z.literal("")),
});

export const enrollmentStatusSchema = z.enum(["active", "completed", "dropped"]);

export const enrollmentSchema = z.object({
  student: objectIdSchema,
  course: objectIdSchema,
  status: enrollmentStatusSchema.default("active"),
});
