import {
  formatDateRange,
  formatTimeRange,
  statusForEntry,
  statusLabel,
} from "../utils/formatters.js";

export default function ScheduleCard({ entry, onView }) {
  const status = statusForEntry(entry);

  return (
    <article className="flex flex-col gap-2 rounded-2xl border border-slate-200 bg-white p-4 shadow-card">
      <p className="text-xs font-semibold uppercase tracking-[0.08em] text-muted">
        {formatDateRange(entry)}
      </p>
      <h3 className="text-lg font-semibold text-ink">{entry.title}</h3>
      <p className="text-sm text-muted">{formatTimeRange(entry)}</p>
      <p className="text-sm text-muted">
        Organiser: {entry.organiser || "TBA"}
      </p>
      {entry.poc ? (
        <p className="text-sm text-muted">POC: {entry.poc}</p>
      ) : null}
      <div className="mt-2 flex items-center justify-between gap-2">
        <button
          type="button"
          className="rounded-lg border border-accent bg-transparent px-3 py-2 text-sm font-semibold text-accent-strong transition hover:bg-sky-50 focus:outline-none focus:ring-2 focus:ring-accent"
          onClick={() => onView(entry)}
        >
          View details
        </button>
        <span
          className={`rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide ${
            status === "now"
              ? "bg-sky-100 text-accent-strong"
              : status === "today"
              ? "bg-sky-50 text-sky-900"
              : status === "upcoming"
              ? "bg-slate-100 text-slate-700"
              : "bg-slate-200 text-slate-600"
          }`}
        >
          {statusLabel[status]}
        </span>
      </div>
    </article>
  );
}
