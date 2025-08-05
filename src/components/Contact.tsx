// ContactAbout.jsx  – animated single-page contact & about
import { useState, useEffect, useRef } from "react";

const jobs = [
  "Product Manager",
  "UI/UX Designer",
  "Full-Stack Dev",
  "Data Analyst",
  "Other",
];

export default function ContactAbout() {
  const [view, setView] = useState("about"); // about | contact
  const [sent, setSent] = useState(false);
  const formRef = useRef<HTMLFormElement>(null); // or whatever type fits

  // slide-in form
  useEffect(() => {
    if (view !== "contact") return;

    const el = formRef.current;
    if (!el) return; // safety first

    el.style.clipPath = "polygon(0 0, 0 0, 0 100%, 0 100%)";

    const t = setTimeout(() => {
      el.style.transition = "clip-path .8s cubic-bezier(.4,0,.2,1)";
      el.style.clipPath = "polygon(0 0, 100% 0, 100% 100%, 0 100%)";
    }, 100);

    // clean up if the component unmounts or view changes
    return () => clearTimeout(t);
  }, [view]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);

    const timer = setTimeout(() => setSent(false), 3000);
    e.currentTarget.reset();

    // optional: return timer so the caller can clear it if needed
    return () => clearTimeout(timer);
  };

  return (
    <section className="min-h-screen bg-neutral-950 text-white flex items-center justify-center p-6">
      <div className="relative w-full max-w-sm h-[640px] rounded-[3rem] bg-gradient-to-b from-neutral-900 via-neutral-950 to-black shadow-2xl shadow-black/60 p-6 overflow-hidden">
        {/* top notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-6 bg-black rounded-b-xl" />

        {/* toggle tabs */}
        <div className="flex rounded-full bg-black/50 p-1 mb-8">
          {["about", "contact"].map((v) => (
            <button
              key={v}
              onClick={() => setView(v)}
              className={`flex-1 py-2 rounded-full text-sm font-medium transition-all duration-300
                          ${
                            view === v
                              ? "bg-white text-black"
                              : "text-neutral-400"
                          }`}
            >
              {v}
            </button>
          ))}
        </div>

        {/* ABOUT */}
        {view === "about" && (
          <div className="text-center animate-fadeIn">
            <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-neutral-700 to-black mb-4" />
            <h2 className="text-2xl font-bold">Jane Doe</h2>
            <p className="text-sm text-neutral-400 mb-4">
              Senior Product Manager
            </p>
            <p className="text-neutral-300 text-xs leading-relaxed">
              I translate chaos into clarity, data into direction, and ideas
              into impact. Let’s craft the next chapter together.
            </p>
          </div>
        )}

        {/* CONTACT */}
        {view === "contact" && (
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
            {/* Phone */}
            <label className="block">
              <span className="text-xs text-neutral-400">Phone</span>
              <input
                type="tel"
                required
                placeholder="+1 555 123 4567"
                className="w-full mt-1 px-4 py-2 rounded-full bg-neutral-800/50 border border-neutral-700
                           focus:border-white outline-none transition-colors"
              />
            </label>

            {/* Email */}
            <label className="block">
              <span className="text-xs text-neutral-400">Email</span>
              <input
                type="email"
                required
                placeholder="you@email.com"
                className="w-full mt-1 px-4 py-2 rounded-full bg-neutral-800/50 border border-neutral-700
                           focus:border-white outline-none transition-colors"
              />
            </label>

            {/* Job selector */}
            <label className="block">
              <span className="text-xs text-neutral-400">Job Interest</span>
              <select
                required
                className="w-full mt-1 px-4 py-2 rounded-full bg-neutral-800/50 border border-neutral-700
                           focus:border-white outline-none transition-colors"
              >
                <option value="">Select role…</option>
                {jobs.map((j) => (
                  <option key={j}>{j}</option>
                ))}
              </select>
            </label>

            {/* Message */}
            <label className="block">
              <span className="text-xs text-neutral-400">
                Message (optional)
              </span>
              <textarea
                placeholder="Tell me more…"
                rows={3}
                className="w-full mt-1 px-4 py-2 rounded-2xl bg-neutral-800/50 border border-neutral-700
                           focus:border-white outline-none resize-none transition-colors"
              />
            </label>

            {/* submit */}
            <button
              type="submit"
              disabled={sent}
              className="w-full relative overflow-hidden rounded-full py-3 font-bold tracking-widest
                         transition-all duration-500 disabled:scale-95"
            >
              <span
                className="absolute inset-0 -z-10 bg-gradient-to-r from-neutral-700 to-neutral-900
                           transition-transform duration-500"
                style={{
                  clipPath: sent
                    ? "polygon(0 0, 100% 0, 100% 100%, 0 100%)"
                    : "polygon(0 0, 0 0, 0 100%, 0 100%)",
                }}
              />
              <span className="absolute inset-0 rounded-full border border-neutral-600" />
              <span className="relative text-sm">
                {sent ? "Sent ✔" : "Send Message"}
              </span>
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
