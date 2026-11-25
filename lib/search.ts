export function escapeRegExp(input: string): string {
  return input.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

export function buildSearchFilter(search: string | undefined, fields: string[]) {
  if (!search) {
    return {};
  }
  const term = escapeRegExp(search.trim());
  const regex = new RegExp(term, "i");
  return { $or: fields.map((field) => ({ [field]: regex })) };
}
