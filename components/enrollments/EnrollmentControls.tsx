import { deleteEnrollment, updateEnrollmentStatus } from "@/actions/enrollment.actions";

export function DeleteEnrollmentButton({ id }: { id: string }) {
  return <form action={deleteEnrollment.bind(null, id)}><button className="rounded-md bg-red-600 px-3 py-2 text-xs font-semibold text-white hover:bg-red-700">Remove</button></form>;
}

export function UpdateEnrollmentStatusForm({ id, status }: { id: string; status: string }) {
  return (
    <form action={updateEnrollmentStatus.bind(null, id)} className="flex items-center gap-2">
      <select name="status" defaultValue={status} className="rounded-md border border-slate-300 px-2 py-2 text-xs">
        <option value="active">Active</option><option value="completed">Completed</option><option value="dropped">Dropped</option>
      </select>
      <button className="rounded-md border border-slate-300 px-3 py-2 text-xs font-semibold hover:bg-slate-50">Save</button>
    </form>
  );
}
