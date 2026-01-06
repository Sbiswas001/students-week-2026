import { defaultEventDetail, eventDetails } from "../data/eventDetails.js";
import { formatDateRange, formatTimeRange } from "../utils/formatters.js";

export default function DetailModal({ open, onClose, entry }) {
  if (!open || !entry) return null;
  const detail = eventDetails[entry.title] || defaultEventDetail;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4"
      role="dialog"
      aria-modal="true"
      aria-label={`${entry.title} details`}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative w-full max-w-2xl rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-card">
        <button
          type="button"
          className="absolute right-3 top-3 rounded-full px-2 text-xl text-muted hover:text-ink focus:outline-none focus:ring-2 focus:ring-accent"
          aria-label="Close details"
          onClick={onClose}
        >
          ×
        </button>
        <p className="text-xs font-semibold uppercase tracking-[0.08em] text-muted">
          {formatDateRange(entry)}
        </p>
        <h3 className="mt-1 text-2xl font-bold text-ink">{entry.title}</h3>
        <p className="text-sm text-muted">{formatTimeRange(entry)}</p>
        <p className="mt-1 text-sm text-muted">
          Organiser: {entry.organiser || "TBA"}
        </p>
        {entry.poc ? (
          <p className="mt-1 text-sm text-muted">
            Point of contact: {entry.poc}
          </p>
        ) : null}

        <div className="mt-4 space-y-4">
          <div>
            <h4 className="mb-2 text-base font-semibold text-ink">Rules</h4>
            {detail.rules.length ? (
              <ol className="list-decimal space-y-1 pl-5 text-sm text-muted">
                {detail.rules.map((rule) => (
                  <li key={rule}>{rule}</li>
                ))}
              </ol>
            ) : (
              <p className="text-sm text-muted">No rules listed yet.</p>
            )}
          </div>

          <div>
            <h4 className="mb-2 text-base font-semibold text-ink">
              Submission links
            </h4>
            {detail.links.length ? (
              <ul className="list-disc space-y-1 pl-5 text-sm">
                {detail.links.map((link) => (
                  <li key={link.url}>
                    <a
                      href={link.url}
                      className="text-accent-strong hover:text-sky-700"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-sm text-muted">Spot registration at venue.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
