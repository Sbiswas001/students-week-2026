const pad = (num) => num.toString().padStart(2, "0");

export const formatTime = (dateStr, timeStr) => {
  if (!timeStr) return "TBA";
  const [hours, minutes] = timeStr.split(":").map(Number);
  const suffix = hours >= 12 ? "PM" : "AM";
  const hour12 = hours % 12 === 0 ? 12 : hours % 12;
  return `${hour12}:${pad(minutes)} ${suffix}`;
};

export const formatDateRange = (entry) => {
  if (entry.allDay && entry.endDate && entry.endDate !== entry.date) {
    return `${new Date(entry.date).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
    })} – ${new Date(entry.endDate).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
    })}`;
  }
  return new Date(entry.date).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
  });
};

export const formatTimeRange = (entry) =>
  entry.allDay
    ? "All day"
    : `${formatTime(entry.date, entry.start)} – ${formatTime(
        entry.date,
        entry.end
      )}`;

const toDateTime = (dateStr, timeStr = "00:00") =>
  new Date(`${dateStr}T${timeStr}:00+05:30`);

export const statusForEntry = (entry) => {
  const now = new Date();
  const start = toDateTime(entry.date, entry.allDay ? "00:00" : entry.start);
  const endBoundary = entry.endDate ? entry.endDate : entry.date;
  const end = entry.allDay
    ? toDateTime(endBoundary, "23:59")
    : toDateTime(endBoundary, entry.end || entry.start);

  if (now >= start && now <= end) return "now";
  const today = now.toISOString().slice(0, 10);
  if (today === entry.date || today === entry.endDate) return "today";
  return now < start ? "upcoming" : "past";
};

export const statusLabel = {
  now: "Happening now",
  today: "Today",
  upcoming: "Upcoming",
  past: "Finished",
};
