"use client";

import { useState } from "react";
import type { PublicationYearGroup } from "@/lib/publications";

export function PublicationsBrowser({
  conference,
  journal,
}: {
  conference: PublicationYearGroup[];
  journal: PublicationYearGroup[];
}) {
  const [tab, setTab] = useState<"conference" | "journal">("conference");
  const groups = tab === "conference" ? conference : journal;

  return (
    <div>
      <div className="flex gap-2.5">
        {(["conference", "journal"] as const).map((key) => {
          const isActive = tab === key;
          return (
            <button
              key={key}
              onClick={() => setTab(key)}
              aria-pressed={isActive}
              className={`font-display rounded-full px-4 py-2 text-sm capitalize transition-all duration-300 ${
                isActive
                  ? "bg-gradient-to-b from-accent-400 to-accent-600 text-white shadow-[0_4px_16px_-4px_rgba(32,86,172,0.55)]"
                  : "border border-neutral-300 bg-white text-neutral-700 hover:border-accent-400 hover:text-accent-700"
              }`}
            >
              {key} papers
            </button>
          );
        })}
      </div>

      <div className="mt-10 space-y-10">
        {groups.map((group) => (
          <div key={group.year}>
            <h2 className="font-display text-sm font-semibold text-accent-700">{group.year}</h2>
            <ul className="mt-4 space-y-4 border-l border-neutral-200 pl-5">
              {group.entries.map((entry, i) => (
                <li key={i} className="text-sm leading-relaxed text-neutral-700">
                  {entry}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
