export default function Gallery() {
  return (
    <section className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.08em] text-muted">
            Highlights
          </p>
          <h2 className="text-2xl font-bold text-ink">Gallery</h2>
        </div>
        <p className="text-sm text-muted">
          Event photos will be added here soon.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-2xl border border-dashed border-slate-200 bg-white/60 p-6 text-center text-muted">
          No images yet.
        </div>
      </div>
    </section>
  );
}
