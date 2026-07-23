'use client'

import { motion } from 'framer-motion'

const projects = [
  {
    title: "E-Commerce Microservices",
    tech: ["Node.js", "Docker", "RabbitMQ", "Redis"],
    difficulty: "Advanced",
    color: "text-[#f97316]",
    bg: "bg-[#f97316]/10",
    border: "border-[#f97316]/20"
  },
  {
    title: "Healthcare Portal",
    tech: ["React", "PostgreSQL", "Azure", "CI/CD"],
    difficulty: "Intermediate",
    color: "text-blue-600",
    bg: "bg-blue-100",
    border: "border-blue-200"
  },
  {
    title: "DevOps Automation Platform",
    tech: ["Terraform", "Kubernetes", "Python", "AWS"],
    difficulty: "Advanced",
    color: "text-[#10b981]",
    bg: "bg-[#10b981]/10",
    border: "border-[#10b981]/20"
  }
]

export default function RealProjects() {
  return (
    <section className="py-24 bg-gray-50 relative">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4 tracking-tight text-slate-900">Build Real Projects</h2>
          <p className="text-slate-600 text-lg">Graduate with a portfolio of production-grade systems.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-8 rounded-3xl bg-white border border-gray-200 shadow-sm flex flex-col h-full hover:border-primary/50 hover:shadow-md transition-all"
            >
              <div className={`text-xs font-bold mb-6 border inline-block px-3 py-1 rounded-full w-max ${project.color} ${project.bg} ${project.border}`}>
                {project.difficulty}
              </div>
              <h3 className="text-xl font-bold mb-6 text-slate-900">{project.title}</h3>
              <div className="mt-auto flex flex-wrap gap-2">
                {project.tech.map((t, i) => (
                  <span key={i} className="text-xs font-medium text-slate-600 bg-slate-100 border border-gray-200 px-3 py-1.5 rounded-lg">
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}