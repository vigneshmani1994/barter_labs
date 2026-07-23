'use client'

import { motion } from 'framer-motion'
import { LayoutDashboard, GitPullRequest, Wrench, Cloud } from 'lucide-react'

const features = [
  {
    title: "Learn by Building",
    desc: "No fake projects. Build production-grade applications that solve real business problems.",
    icon: <LayoutDashboard className="text-primary" size={24} />,
    colSpan: "col-span-1 md:col-span-2"
  },
  {
    title: "Real Team Collaboration",
    desc: "Work exactly like software engineers using Git workflows, pull requests, code reviews, and agile practices.",
    icon: <GitPullRequest className="text-[#f97316]" size={24} />,
    colSpan: "col-span-1 md:col-span-1"
  },
  {
    title: "Industry Tools",
    desc: "Use the same technologies companies use daily, from IaC to message queues.",
    icon: <Wrench className="text-[#10b981]" size={24} />,
    colSpan: "col-span-1 md:col-span-1"
  },
  {
    title: "Cloud & DevOps",
    desc: "Deploy applications to Azure and AWS. Operate them in production with proper CI/CD, logging, and monitoring.",
    icon: <Cloud className="text-blue-500" size={24} />,
    colSpan: "col-span-1 md:col-span-2"
  }
]

export default function WhyBarterLabs() {
  return (
    <section className="py-24 bg-gray-50 relative">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="mb-16 text-center md:text-left">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6 tracking-tight text-slate-900">Engineering at its core.</h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto md:mx-0">Experience the reality of shipping production software. We bridge the gap between theoretical tutorials and actual industry expectations.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {features.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`group relative p-8 rounded-3xl bg-white border border-gray-200 hover:border-gray-300 hover:shadow-md transition-all overflow-hidden ${item.colSpan}`}
            >
              <div className="mb-6 p-3 bg-gray-50 rounded-xl inline-flex border border-gray-100 shadow-sm">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900">{item.title}</h3>
              <p className="text-slate-600 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}