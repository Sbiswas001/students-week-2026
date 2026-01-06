import gcectLogo from "./assets/logo.png";
import { Routes, Route, NavLink } from "react-router-dom";
import Schedule from "./components/Schedule.jsx";
import Gallery from "./components/Gallery.jsx";
import Contact from "./components/Contact.jsx";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-slate-50 to-white">
      <header className="site-header relative flex items-center justify-between gap-4 px-6 py-6 text-slate-50">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/10 shadow-inner overflow-hidden">
            <img
              src={gcectLogo}
              alt="GCECT"
              className="h-10 w-10 object-cover"
            />
          </div>
          <div>
            <p className="m-0 text-xs font-semibold uppercase tracking-[0.08em] text-sky-300">
              STUDENTS&apos; WEEK 2026
            </p>
            <h1 className="m-0 text-3xl font-extrabold">
              GCECT Students&apos; Week Program
            </h1>
          </div>
        </div>
        <div className="text-right text-sm text-slate-200">
          <p className="font-semibold">Jan 7–14, 2026</p>
          <p className="text-slate-300">Kolkata, India</p>
        </div>
      </header>

      {/* Tab bar beneath header (full-width centered) */}
      <div className="tab-bar-wrap">
        <div className="max-w-6xl mx-auto -mt-6 px-4">
          <div className="tab-bar flex overflow-hidden bg-slate-900/90 p-1">
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `flex-1 text-center py-3 px-4 text-sm font-semibold rounded-md ${
                  isActive ? "bg-sky-700 text-white" : "text-slate-200"
                }`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/gallery"
              className={({ isActive }) =>
                `flex-1 text-center py-3 px-4 text-sm font-semibold rounded-md ${
                  isActive ? "bg-sky-700 text-white" : "text-slate-200"
                }`
              }
            >
              Gallery
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `flex-1 text-center py-3 px-4 text-sm font-semibold rounded-md ${
                  isActive ? "bg-sky-700 text-white" : "text-slate-200"
                }`
              }
            >
              Contact Us
            </NavLink>
          </div>
        </div>
      </div>

      {/* secondary nav removed to avoid duplicate tabs; primary tab bar lives under header */}

      <main className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-8">
        <section className="mx-2 rounded-3xl border border-slate-200 bg-white p-8 shadow-card">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold text-ink">
              Welcome to Students&apos; Week!
            </h2>
            <div className="rounded-xl bg-sky-50/80 px-4 py-3 text-sm text-slate-800 shadow-sm border-l-4 border-accent-strong pl-4">
              <strong className="text-accent-strong">UPDATE:</strong> Full
              Students&apos; Week 2026 schedule is live below, now with
              organiser names and timings.
            </div>
            <div className="rounded-xl bg-sky-50/80 px-4 py-3 text-sm text-slate-800 shadow-sm border-l-4 border-accent-strong pl-4">
              <strong className="text-accent-strong">UPDATE:</strong>{" "}
              Photography, Astrophotography, and Creative Writing submissions
              run 7th-12th January (online). View any event for rules and links.
            </div>
          </div>
          <div className="mt-8">
            <Routes>
              <Route path="/" element={<Schedule />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/contact" element={<Contact />} />
              <Route
                path="*"
                element={
                  <p className="text-sm text-slate-600">Page not found.</p>
                }
              />
            </Routes>
          </div>
        </section>
      </main>
    </div>
  );
}
