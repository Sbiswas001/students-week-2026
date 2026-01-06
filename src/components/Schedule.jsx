import { useMemo, useState } from "react";
import DetailModal from "./DetailModal.jsx";
import ScheduleCard from "./ScheduleCard.jsx";
import { scheduleData } from "../data/scheduleData.js";

export default function Schedule() {
  const [selectedEntry, setSelectedEntry] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const sorted = useMemo(
    () =>
      [...scheduleData].sort((a, b) => {
        const aDate = a.date.localeCompare(b.date);
        if (aDate !== 0) return aDate;
        const aStart = a.start || "00:00";
        const bStart = b.start || "00:00";
        return aStart.localeCompare(bStart);
      }),
    []
  );

  const openDetail = (entry) => {
    setSelectedEntry(entry);
    setModalOpen(true);
  };

  const closeDetail = () => {
    setModalOpen(false);
    setSelectedEntry(null);
  };

  return (
    <section className="space-y-3">
      <div className="flex flex-col gap-1">
        <p className="text-xs font-semibold uppercase tracking-[0.08em] text-muted">
          Schedule
        </p>
        <h2 className="text-2xl font-bold text-ink">Events & Timings</h2>
        <p className="text-sm text-muted">
          Tap any event to view details, rules, and submission links.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {sorted.map((entry) => (
          <ScheduleCard
            key={`${entry.title}-${entry.date}-${entry.start || "all"}`}
            entry={entry}
            onView={openDetail}
          />
        ))}
      </div>

      <DetailModal
        open={modalOpen}
        onClose={closeDetail}
        entry={selectedEntry}
      />
    </section>
  );
}
