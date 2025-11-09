import React from "react";
import { Link } from "react-router-dom";

const Stat = ({ kpi, label }) => (
  <div className="bg-white/80 rounded-2xl p-6 shadow-sm border">
    <div className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
      {kpi}
    </div>
    <div className="mt-1 text-gray-600">{label}</div>
  </div>
);

const Pill = ({ children }) => (
  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-pink-50 text-pink-700 border border-pink-100">
    {children}
  </span>
);

function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50">
      {/* Top Bar */}
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link to="/residential/ongoing-projects" className="flex items-center">
            <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">E</span>
            </div>
            <span className="ml-3 text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              EliteHomes
            </span>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            {/* <Link to="/residential/ongoing-projects" className="text-gray-700 hover:text-purple-700">
              Home
            </Link>
            <Link to="/feauturedprojects" className="text-gray-700 hover:text-purple-700">
              Properties
            </Link>
            <Link to="/blog" className="text-gray-700 hover:text-purple-700">
              Blog
            </Link> */}
            <Link
              to="/residential/ongoing-projects"
              className="px-4 py-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white"
            >
              Back to home
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 py-16 md:py-24 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border text-sm font-medium">
              <span className="i">🏠</span> About EliteHomes
            </div>
            <h1 className="mt-4 text-3xl md:text-5xl font-extrabold leading-tight">
              Building trust. <br className="hidden md:block" />
              Unlocking{" "}
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                your dream home
              </span>
              .
            </h1>
            <p className="mt-4 text-gray-600 text-lg">
              We simplify Indian real estate with verified listings, transparent
              pricing, and expert guidance. From first site visit to handover —
              we’re with you at every step.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              <Pill>RERA-first</Pill>
              <Pill>Carpet vs SBA clarity</Pill>
              <Pill>Home loan support</Pill>
              <Pill>Trusted builders</Pill>
            </div>

            <div className="mt-8 flex gap-3">
              <Link
                to="/feauturedprojects"
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold hover:shadow-lg"
              >
                Explore Properties
              </Link>
              <Link
                to="/contact"
                className="px-6 py-3 rounded-xl border-2 border-purple-600 text-purple-700 font-semibold hover:bg-pink-50"
              >
                Talk to Expert
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-xl border">
              <img
                src="https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=1600&auto=format&fit=crop"
                alt="EliteHomes"
                className="w-full h-[320px] md:h-[420px] object-cover"
              />
            </div>
            <div className="absolute -bottom-5 -left-5 bg-white rounded-2xl shadow-lg border p-4">
              <div className="text-sm text-gray-600">Customer Happiness</div>
              <div className="text-2xl font-extrabold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                4.9/5
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-8">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-4">
          <Stat kpi="12k+" label="Verified Listings" />
          <Stat kpi="200+" label="Trusted Builders" />
          <Stat kpi="9 Cities" label="All-India Coverage" />
          <Stat kpi="10k+" label="Happy Buyers" />
        </div>
      </section>

      {/* Mission / Vision / Values */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Our Mission",
              desc: "Deliver a simple, transparent home-buying experience tailored for India.",
              icon: "🎯",
            },
            {
              title: "Our Vision",
              desc: "To be India’s most trusted real estate companion—online to onsite.",
              icon: "🌟",
            },
            {
              title: "Our Values",
              desc: "Integrity, clarity, empathy and long-term relationships over short-term wins.",
              icon: "🤝",
            },
          ].map((card) => (
            <div
              key={card.title}
              className="bg-white rounded-2xl p-6 shadow-sm border hover:shadow-md transition"
            >
              <div className="text-3xl">{card.icon}</div>
              <h3 className="mt-3 text-xl font-bold">{card.title}</h3>
              <p className="mt-2 text-gray-600">{card.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Our Story (Timeline) */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-extrabold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Our Story
          </h2>
          <div className="relative pl-6">
            <div className="absolute left-2 top-0 bottom-0 w-px bg-gradient-to-b from-purple-300 to-pink-300" />
            {[
              {
                year: "2021",
                title: "Started EliteHomes",
                text: "Set out to make property search clean and trustworthy.",
              },
              {
                year: "2022",
                title: "RERA-verified inventory",
                text: "Partnered with reputed builders across metros.",
              },
              {
                year: "2023",
                title: "Loan & Legal Desk",
                text: "Introduced in-house assistance for finance & docs.",
              },
              {
                year: "2024",
                title: "Pan-India expansion",
                text: "Now active in 9 cities with 10k+ happy families.",
              },
            ].map((t, i) => (
              <div key={i} className="relative mb-6">
                <div className="absolute -left-[13px] top-2 w-3 h-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-600" />
                <div className="bg-white rounded-2xl p-5 shadow-sm border">
                  <div className="text-xs font-bold text-gray-500">{t.year}</div>
                  <div className="text-lg font-semibold mt-1">{t.title}</div>
                  <p className="mt-2 text-gray-600">{t.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-extrabold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Leadership Team
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Aisha Verma", role: "CEO", img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1200&auto=format&fit=crop" },
              { name: "Rahul Mehta", role: "Head of Ops", img: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=1200&auto=format&fit=crop" },
              { name: "Priya Singh", role: "Finance Lead", img: "https://images.unsplash.com/photo-1544005316-04ce1f3d3d87?q=80&w=1200&auto=format&fit=crop" },
              { name: "Arjun Rao", role: "Tech Lead", img: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?q=80&w=1200&auto=format&fit=crop" },
            ].map((m) => (
              <div key={m.name} className="bg-white rounded-2xl overflow-hidden shadow-sm border">
                <div className="h-44">
                  <img src={m.img} alt={m.name} className="w-full h-full object-cover" />
                </div>
                <div className="p-4">
                  <div className="font-semibold">{m.name}</div>
                  <div className="text-sm text-gray-600">{m.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-extrabold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            What buyers say
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                q: "Super smooth experience. They handled everything end-to-end!",
                a: "Harish, Chennai",
              },
              {
                q: "Shortlisted great options within my budget. Transparent pricing.",
                a: "Shruti, Pune",
              },
              {
                q: "Loan & legal help saved time. Highly recommend.",
                a: "Ankit, Bengaluru",
              },
            ].map((t, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 shadow-sm border">
                <p className="text-gray-800">“{t.q}”</p>
                <div className="mt-4 text-sm text-gray-600">— {t.a}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="rounded-3xl p-8 md:p-10 bg-gradient-to-r from-purple-600 to-pink-600 text-white flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <div className="text-2xl md:text-3xl font-extrabold">Ready to begin your home journey?</div>
              <p className="text-pink-100 mt-1">
                Get a free 15-min consultation with our property expert.
              </p>
            </div>
            <div className="flex gap-3">
              <Link
                to="/feauturedprojects"
                className="px-6 py-3 rounded-xl bg-white text-purple-700 font-semibold hover:bg-pink-50"
              >
                Browse Homes
              </Link>
              <Link
                to="/hone"
                className="px-6 py-3 rounded-xl border-2 border-white font-semibold hover:bg-white/10"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer mini */}
      <footer className="py-10">
        <p className="text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} EliteHomes. Crafted with ❤️ for India.
        </p>
      </footer>
    </div>
  );
}

export default About;
