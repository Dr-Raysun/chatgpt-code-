"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface SearchBoxProps {
  currentSearch: string;
  placeholder?: string;
}

export function SearchBox({ currentSearch, placeholder = "Search…" }: SearchBoxProps) {
  const router = useRouter();
  const [value, setValue] = useState(currentSearch);

  useEffect(() => {
    setValue(currentSearch);
  }, [currentSearch]);

  useEffect(() => {
    const id = setTimeout(() => {
      const params = new URLSearchParams(window.location.search);
      if (value) {
        params.set("search", value);
      } else {
        params.delete("search");
      }
      router.push(`?${params.toString()}`, { scroll: false });
    }, 300);
    return () => clearTimeout(id);
  }, [value, router]);

  return (
    <input
      type="search"
      value={value}
      onChange={(event) => setValue(event.target.value)}
      placeholder={placeholder}
      aria-label={placeholder}
      className="w-full rounded-md border border-slate-300 px-3 py-2 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600"
    />
  );
}
