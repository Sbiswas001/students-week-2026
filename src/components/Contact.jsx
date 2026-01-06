import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const firstName = form.FirstName.value.trim();
    const email = form.Email.value.trim();
    const phone = form.PhoneNumber.value.trim();
    const message = form.Message.value.trim();

    if (!firstName || !email || !phone || !message) {
      setStatus({ tone: "error", text: "Please fill in all fields." });
      return;
    }

    setStatus({ tone: "info", text: "Sending..." });
    setTimeout(() => {
      setStatus({ tone: "success", text: "Thanks! We received your message." });
      form.reset();
    }, 800);
  };

  return (
    <section className="max-w-2xl">
      <h2 className="text-2xl font-bold text-ink">Contact Us</h2>
      <form
        className="mt-4 space-y-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-card"
        onSubmit={handleSubmit}
      >
        <div>
          <label className="text-xs text-muted">FIRST NAME</label>
          <input
            name="FirstName"
            className="mt-1 w-full rounded-md border px-3 py-2"
            placeholder="Please enter first name..."
          />
        </div>
        <div>
          <label className="text-xs text-muted">EMAIL</label>
          <input
            name="Email"
            type="email"
            className="mt-1 w-full rounded-md border px-3 py-2"
            placeholder="Please enter email..."
          />
        </div>
        <div>
          <label className="text-xs text-muted">PHONE NUMBER</label>
          <input
            name="PhoneNumber"
            className="mt-1 w-full rounded-md border px-3 py-2"
            placeholder="Please enter phone number..."
          />
        </div>
        <div>
          <label className="text-xs text-muted">
            WHAT DO YOU HAVE IN MIND ?
          </label>
          <textarea
            name="Message"
            className="mt-1 w-full rounded-md border px-3 py-2 min-h-[120px]"
            placeholder="Please enter query..."
          ></textarea>
        </div>
        <div>
          <button className="w-full rounded-md bg-gradient-to-r from-accent to-accent-strong px-4 py-2 text-white font-semibold">
            Submit
          </button>
          {status && (
            <p
              className={`mt-2 font-semibold ${
                status.tone === "error"
                  ? "text-red-600"
                  : status.tone === "success"
                  ? "text-green-600"
                  : "text-slate-700"
              }`}
            >
              {status.text}
            </p>
          )}
        </div>
      </form>
    </section>
  );
}
