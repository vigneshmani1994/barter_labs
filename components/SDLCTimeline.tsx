'use client'

import { motion } from 'framer-motion'

const timeline = [
  { step: "01", title: "Requirements", desc: "Gathering and system architecture" },
  { step: "02", title: "Backend", desc: "API design and database modeling" },
  { step: "03", title: "Frontend", desc: "UI development and integration" },
  { step: "04", title: "Testing", desc: "Unit, integration, and E2E tests" },
  { step: "05", title: "CI/CD", desc: "Automated pipelines and deployments" },
  { step: "06", title: "Monitoring", desc: "Observability and scaling in production" },
]

export default function SDLCTimeline() {
  return (
    <section className="py-24 bg-white border-y border-gray-200 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="mb-16 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4 tracking-tight text-slate-900">The Complete SDLC</h2>
          <p className="text-slate-600 text-lg">Master every phase of the software development life cycle.</p>
        </div>

        <div className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory scrollbar-hide">
          {timeline.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="flex-none w-72 md:w-80 snap-start p-6 rounded-2xl bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="text-primary font-bold text-sm mb-4 uppercase tracking-wider">Phase {item.step}</div>
              <h3 className="text-xl font-bold mb-2 text-slate-900">{item.title}</h3>
              <p className="text-slate-600 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}