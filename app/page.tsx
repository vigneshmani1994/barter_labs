import { ArrowRight, BrainCircuit, Camera, Cpu, Eye, Github, Mail, MapPin, Radar, ShieldCheck, Sparkles, Users, Waves } from "lucide-react";

const founders = [
  { name: "Santhosh", role: "Co-Founder", initials: "S" },
  { name: "Selva", role: "Co-Founder", initials: "S" },
  { name: "Vignesh", role: "Co-Founder", initials: "V" },
  { name: "Dhanu", role: "Co-Founder", initials: "D" },
];

const capabilities = [
  { icon: BrainCircuit, title: "Artificial Intelligence", text: "Building intelligent systems that turn complex real-world data into useful decisions." },
  { icon: Eye, title: "Computer Vision", text: "Teaching machines to understand images, video, objects, movement and environments." },
  { icon: Radar, title: "Real-time Intelligence", text: "Designing AI systems that observe, analyse and respond to changing conditions." },
  { icon: Cpu, title: "Machine Learning", text: "Developing practical ML solutions that learn from data and improve over time." },
];

const heliosFeatures = [
  "Live CCTV intelligence",
  "Vehicle and lane detection",
  "Traffic flow analysis",
  "Road anomaly detection",
  "Real-time traffic insights",
  "Computer vision powered analytics",
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#050816] text-white selection:bg-cyan-400/30">
      <nav className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#050816]/75 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
          <a href="#top" className="flex items-center gap-3 font-semibold tracking-tight">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-cyan-300 to-blue-600 text-sm font-black text-slate-950">B</span>
            <span className="text-xl">Barter<span className="text-cyan-300">Labs</span></span>
          </a>
          <div className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
            <a href="#projects" className="transition hover:text-white">Projects</a>
            <a href="#about" className="transition hover:text-white">About</a>
            <a href="#founders" className="transition hover:text-white">Founders</a>
            <a href="#contact" className="rounded-full border border-white/15 px-4 py-2 transition hover:border-cyan-300/50 hover:bg-white/5">Contact</a>
          </div>
        </div>
      </nav>

      <section id="top" className="relative flex min-h-screen items-center px-6 pb-20 pt-32 lg:px-8">
        <div className="absolute left-1/2 top-24 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[120px]" />
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.05fr_.95fr]">
          <div className="relative z-10">
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-200">
              <Sparkles className="h-3.5 w-3.5" /> AI Product Lab
            </div>
            <h1 className="max-w-4xl text-5xl font-black leading-[0.95] tracking-[-0.04em] sm:text-6xl lg:text-8xl">
              Building <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-violet-400 bg-clip-text text-transparent">AI</span>
              <br />for the real world.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
              Barter Labs is building practical AI products that turn real-world data into intelligent, actionable insights.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <a href="#projects" className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:bg-cyan-100">
                Explore our projects <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </a>
              <a href="#founders" className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3.5 font-semibold text-white transition hover:border-cyan-300/40 hover:bg-white/5">
                Meet the founders
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-5 rounded-[2rem] bg-gradient-to-r from-cyan-400/20 to-blue-500/20 blur-2xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/15 bg-white/5 p-2 shadow-2xl shadow-cyan-950/30">
              <img src="/barter_labs/images/project-helios.svg" alt="Project Helios AI traffic intelligence" className="aspect-square w-full rounded-[1.5rem] object-cover" />
              <div className="absolute bottom-7 left-7 right-7 rounded-2xl border border-white/15 bg-slate-950/80 p-4 backdrop-blur-xl">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">Featured Project</p>
                <div className="mt-1 flex items-center justify-between gap-3">
                  <span className="text-lg font-bold">Project Helios</span>
                  <span className="rounded-full bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-300">In development</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.025]">
        <div className="mx-auto grid max-w-7xl gap-px px-6 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
          {capabilities.map(({ icon: Icon, title, text }) => (
            <div key={title} className="group border-white/10 px-2 py-12 sm:px-8 lg:border-r last:lg:border-r-0">
              <Icon className="h-7 w-7 text-cyan-300 transition group-hover:scale-110" />
              <h2 className="mt-5 text-lg font-bold">{title}</h2>
              <p className="mt-3 text-sm leading-6 text-slate-400">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="projects" className="mx-auto max-w-7xl px-6 py-28 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">Featured project</p>
          <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-6xl">Project Helios</h2>
          <p className="mt-5 text-lg leading-8 text-slate-400">AI-powered traffic intelligence designed for Indian roads, using live CCTV feeds and computer vision to understand traffic in real time.</p>
        </div>

        <div className="mt-14 grid overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.035] lg:grid-cols-[1.1fr_.9fr]">
          <div className="p-3 sm:p-5">
            <img src="/barter_labs/images/project-helios.svg" alt="Project Helios traffic intelligence visualization" className="h-full min-h-[420px] w-full rounded-[1.5rem] object-cover" />
          </div>
          <div className="flex flex-col justify-center p-8 sm:p-12">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-300/10 text-cyan-300"><Camera className="h-6 w-6" /></div>
            <h3 className="mt-6 text-2xl font-bold">Seeing the road through AI</h3>
            <p className="mt-4 leading-7 text-slate-400">Helios is being developed to convert camera streams into meaningful traffic intelligence — helping identify movement, lane behaviour and road-level anomalies.</p>
            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {heliosFeatures.map((feature) => (
                <div key={feature} className="flex items-start gap-2 text-sm text-slate-300">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300" /> {feature}
                </div>
              ))}
            </div>
            <div className="mt-8 rounded-2xl border border-cyan-300/10 bg-cyan-300/[0.04] p-4 text-sm text-slate-400">
              <span className="font-semibold text-cyan-200">Our direction:</span> build AI that solves measurable, everyday problems.
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="border-y border-white/10 bg-white/[0.025]">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-28 lg:grid-cols-[.8fr_1.2fr] lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">About Barter Labs</p>
            <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">From ideas to intelligent products.</h2>
          </div>
          <div className="space-y-6 text-lg leading-8 text-slate-400">
            <p>Barter Labs is an AI-focused technology company building practical solutions for real-world problems.</p>
            <p>We combine <span className="text-white">Artificial Intelligence, Computer Vision, Machine Learning</span> and modern cloud technologies to transform ideas into useful products.</p>
            <p>Our goal is simple: <span className="text-cyan-200">build useful AI, solve meaningful problems, and create technology that makes an impact.</span></p>
          </div>
        </div>
      </section>

      <section id="founders" className="mx-auto max-w-7xl px-6 py-28 lg:px-8">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">The people behind Barter Labs</p>
            <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">Meet the founders.</h2>
          </div>
          <Users className="h-10 w-10 text-slate-600" />
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {founders.map((founder) => (
            <div key={founder.name} className="group rounded-3xl border border-white/10 bg-white/[0.035] p-5 transition hover:-translate-y-1 hover:border-cyan-300/25">
              <div className="relative grid aspect-square place-items-center overflow-hidden rounded-2xl bg-gradient-to-br from-cyan-300/20 via-blue-500/10 to-violet-500/20">
                <div className="grid h-24 w-24 place-items-center rounded-full border border-white/15 bg-slate-950/60 text-4xl font-black text-cyan-200">{founder.initials}</div>
                <span className="absolute bottom-3 rounded-full border border-white/10 bg-slate-950/80 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-slate-400">Photo coming soon</span>
              </div>
              <h3 className="mt-5 text-xl font-bold">{founder.name}</h3>
              <p className="mt-1 text-sm text-cyan-300">{founder.role}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="px-6 pb-20 lg:px-8">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-cyan-300/15 bg-gradient-to-br from-cyan-400/10 via-blue-500/5 to-violet-500/10 p-8 sm:p-14">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">Let&apos;s build</p>
            <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-6xl">Have an AI problem worth solving?</h2>
            <p className="mt-5 text-lg leading-8 text-slate-400">We&apos;re building, experimenting and turning promising ideas into real products.</p>
            <a href="mailto:hello@barterlabs.ai" className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 font-semibold text-slate-950 transition hover:bg-cyan-100">
              <Mail className="h-4 w-4" /> Get in touch
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 px-6 py-10 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <div><span className="font-semibold text-slate-300">BarterLabs</span> — Building AI for the real world.</div>
          <div className="flex items-center gap-5">
            <span className="flex items-center gap-2"><MapPin className="h-4 w-4" /> India</span>
            <a href="https://github.com/vigneshmani1994/barter_labs" target="_blank" rel="noreferrer" className="transition hover:text-white"><Github className="h-4 w-4" /></a>
          </div>
        </div>
      </footer>
    </main>
  );
}
