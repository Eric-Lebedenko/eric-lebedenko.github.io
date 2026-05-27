const navItems = [
  { label: "About", href: "#about" },
  { label: "Expertise", href: "#expertise" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const expertise = [
  {
    title: "Financial Analysis",
    description: [
      "Business fundamentals, risk, and capital allocation.",
      "Clear thinking around cash flows, margins, and long-term value.",
    ],
  },
  {
    title: "Value Investing",
    description: [
      "A disciplined mindset inspired by Benjamin Graham and Warren Buffett.",
      "Focus on patience, quality, and margin of safety.",
    ],
  },
  {
    title: "IT & Automation",
    description: [
      "Practical interest in workflows, analytical systems, and automation.",
      "Learning path toward IT and system integration in Germany.",
    ],
  },
  {
    title: "Business Communication",
    description: [
      "Structured thinking for finance, technology, and client-facing work.",
      "Professional communication across analytical and operational topics.",
    ],
  },
];

const projects = [
  {
    title: "Investment Philosophy 2025",
    category: "Finance / Investing",
    description:
      "A structured document about long-term investing principles, capital allocation, and disciplined market thinking.",
    href: "/Investment%20Philosophy%202025%20by%20ELM.pdf",
    cta: "Open PDF",
  },
  {
    title: "One Pager by ELM",
    category: "Personal Brand",
    description:
      "A concise professional profile for introductions, networking, and finance/IT positioning.",
    href: "/One%20Pager%20by%20ELM%202025.pdf",
    cta: "Open PDF",
  },
  {
    title: "Personal Website",
    category: "React / Vite / Tailwind",
    description:
      "This personal brand website: a lightweight frontend built for finance, investing, automation, and IT positioning.",
    href: "https://github.com/Eric-Lebedenko/eric-lebedenko.github.io",
    cta: "View Repository",
  },
  {
    title: "GitHub Portfolio",
    category: "IT / Automation",
    description:
      "Public development profile for experiments, automation tooling, and future system integration projects.",
    href: "https://github.com/Eric-Lebedenko",
    cta: "Open GitHub",
  },
  {
    title: "Market Research & Analysis",
    category: "Research",
    description:
      "Ongoing research direction focused on financial markets, business quality, risk, and practical analytical frameworks.",
    href: "/Disclaimer%20by%20ELM%202025.pdf",
    cta: "View Notes",
  },
];

const contacts = [
  { label: "Email", value: "contact@ericlmorgan.com", href: "mailto:contact@ericlmorgan.com" },
  { label: "Website", value: "ericlmorgan.com", href: "https://ericlmorgan.com" },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/eric-lebedenko",
    href: "https://www.linkedin.com/in/eric-lebedenko/",
  },
  { label: "GitHub", value: "github.com/Eric-Lebedenko", href: "https://github.com/Eric-Lebedenko" },
];

function App() {
  return (
    <div className="min-h-screen overflow-hidden bg-ink text-platinum">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-ink/86 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
          <a href="#top" className="group">
            <span className="block font-display text-sm font-semibold uppercase tracking-[0.24em] text-platinum">
              Eric L. Morgan
            </span>
            <span className="mt-1 block text-xs uppercase tracking-[0.18em] text-smoke">
              Finance / Systems / Strategy
            </span>
          </a>

          <nav className="hidden items-center gap-8 md:flex" aria-label="Primary navigation">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-smoke transition hover:text-platinum"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <a
            href="#contact"
            className="hidden rounded-sm border border-white/40 px-4 py-2 text-sm text-platinum transition hover:border-white hover:bg-white hover:text-ink sm:inline-flex"
          >
            Contact
          </a>
        </div>
        <nav
          className="mx-auto flex max-w-7xl gap-5 overflow-x-auto px-5 pb-4 text-sm text-smoke sm:px-8 md:hidden"
          aria-label="Mobile navigation"
        >
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="shrink-0 transition hover:text-platinum">
              {item.label}
            </a>
          ))}
        </nav>
      </header>

      <main id="top">
        <section className="relative min-h-[92vh] border-b border-white/10 pt-36 md:pt-28">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(255,255,255,0.08),transparent_34%),linear-gradient(135deg,rgba(255,255,255,0.05),transparent_34%)]" />
          <img
            src="/logo.png"
            alt="Eric L. Morgan logo"
            className="pointer-events-none absolute right-[-10rem] top-24 hidden w-[42rem] opacity-[0.035] grayscale lg:block"
          />
          <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/70 to-transparent" />

          <div className="relative mx-auto grid max-w-7xl gap-14 px-5 pb-20 pt-16 sm:px-8 lg:grid-cols-[1.08fr_0.92fr] lg:items-end lg:pt-28">
            <div>
              <p className="mb-5 text-sm uppercase tracking-[0.28em] text-platinum">
                Private analytical profile
              </p>
              <h1 className="max-w-4xl font-display text-5xl font-semibold leading-[1.02] text-platinum sm:text-7xl lg:text-8xl">
                Eric L. Morgan
              </h1>
              <p className="mt-6 text-lg uppercase tracking-[0.18em] text-smoke">
                Finance · IT · Investing · Automation
              </p>
              <p className="mt-8 max-w-2xl text-lg leading-8 text-smoke">
                I build analytical systems, study financial markets, and combine long-term
                investing with modern technology.
              </p>

              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#contact"
                  className="rounded-sm bg-white px-6 py-3 text-center text-sm font-semibold uppercase tracking-[0.12em] text-ink transition hover:bg-smoke"
                >
                  Contact Me
                </a>
                <a
                  href="#projects"
                  className="rounded-sm border border-white/25 px-6 py-3 text-center text-sm font-semibold uppercase tracking-[0.12em] text-platinum transition hover:border-white hover:bg-white hover:text-ink"
                >
                  View Projects
                </a>
              </div>
            </div>

            <div className="grid gap-4 border-l border-white/10 pl-6 lg:mb-5">
              {["Finance", "Investing", "Automation", "Systemintegration"].map((item, index) => (
                <div
                  key={item}
                  className="flex items-center justify-between border-b border-white/10 py-4"
                >
                  <span className="text-sm uppercase tracking-[0.22em] text-smoke">{item}</span>
                  <span className="font-display text-2xl text-platinum">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="section-shell">
          <div className="section-kicker">About</div>
          <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-start">
            <h2 className="section-title">Finance, technology, and disciplined execution.</h2>
            <div className="space-y-5 text-lg leading-8 text-smoke">
              <p>
                Eric L. Morgan works at the intersection of finance, investments, and IT. His
                profile combines financial consulting and analysis with a value investing mindset
                inspired by Benjamin Graham and Warren Buffett.
              </p>
              <p>
                Based in Germany, he is focused on IT, automation, data analysis, and system
                integration. The long-term direction is clear: build practical analytical systems
                that connect capital, technology, and strategic decision-making.
              </p>
            </div>
          </div>
        </section>

        <section id="expertise" className="section-shell border-y border-white/10 bg-graphite/60">
          <div className="section-kicker">Expertise</div>
          <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <h2 className="section-title max-w-2xl">Core operating fields.</h2>
            <p className="max-w-md text-sm leading-6 text-smoke">
              A compact profile for finance, technology, and professional communication.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {expertise.map((item) => (
              <article
                key={item.title}
                className="rounded-sm border border-white/10 bg-steel/60 p-6 shadow-premium transition hover:-translate-y-1 hover:border-white/60"
              >
                <h3 className="font-display text-xl font-semibold text-platinum">{item.title}</h3>
                <div className="mt-5 space-y-3">
                  {item.description.map((line) => (
                    <p key={line} className="text-sm leading-6 text-smoke">
                      {line}
                    </p>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="projects" className="section-shell">
          <div className="section-kicker">Projects / Links</div>
          <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <h2 className="section-title">Selected projects and public materials.</h2>
              <p className="mt-5 max-w-md text-base leading-7 text-smoke">
                A compact archive of finance, investing, IT, and personal brand materials.
                Each item links to a live profile, repository, or public document.
              </p>
            </div>

            <div className="grid gap-4">
              {projects.map((project, index) => (
                <a
                  key={project.title}
                  href={project.href}
                  target={project.href.startsWith("http") ? "_blank" : undefined}
                  rel={project.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="group grid gap-5 rounded-sm border border-white/10 bg-white/[0.03] p-5 transition hover:border-white/70 hover:bg-white/[0.06] sm:grid-cols-[76px_1fr_auto]"
                >
                  <span className="font-display text-3xl text-platinum">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-smoke">{project.category}</p>
                    <h3 className="mt-2 text-xl font-semibold text-platinum">{project.title}</h3>
                    <p className="mt-3 max-w-2xl text-sm leading-6 text-smoke">
                      {project.description}
                    </p>
                    <div className="mt-4 h-px w-full bg-gradient-to-r from-white/70 to-transparent opacity-50 transition group-hover:opacity-100" />
                  </div>
                  <span className="self-start whitespace-nowrap border border-white/15 px-3 py-2 text-xs uppercase tracking-[0.16em] text-platinum transition group-hover:border-white group-hover:bg-white group-hover:text-ink">
                    {project.cta}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="section-shell border-t border-white/10 bg-graphite/70">
          <div className="section-kicker">Contact</div>
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <h2 className="section-title">Professional contact.</h2>
              <p className="mt-5 max-w-lg text-base leading-7 text-smoke">
                Open to serious conversations around finance, investment analysis, automation,
                and IT/system integration opportunities.
              </p>
            </div>

            <div className="grid gap-3">
              {contacts.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="grid gap-2 rounded-sm border border-white/10 bg-ink/60 p-5 transition hover:border-white hover:bg-steel sm:grid-cols-[130px_1fr]"
                >
                  <span className="text-xs uppercase tracking-[0.2em] text-smoke">{item.label}</span>
                  <span className="break-words text-sm text-platinum">{item.value}</span>
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-ink px-5 py-8 text-sm text-smoke sm:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Eric L. Morgan. All rights reserved.</p>
          <p>Built at the intersection of capital, systems and strategy.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
