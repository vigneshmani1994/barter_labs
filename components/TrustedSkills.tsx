'use client'

import { motion } from 'framer-motion'
import { Database, Server, Code2, Cloud, GitBranch, Terminal } from 'lucide-react'

const skills = [
  { name: 'Git & GitHub', icon: GitBranch },
  { name: 'Docker & K8s', icon: Server },
  { name: 'AWS & Azure', icon: Cloud },
  { name: 'React & Node.js', icon: Code2 },
  { name: 'PostgreSQL', icon: Database },
  { name: 'CI/CD Pipelines', icon: Terminal },
]

export default function TrustedSkills() {
  return (
    <section className="py-12 border-b border-gray-200 bg-white">
      <div className="container mx-auto px-6">
        <p className="text-center text-sm text-slate-500 font-medium mb-8 tracking-widest uppercase">
          Master Modern Industry Standard Tools
        </p>
        <div className="flex flex-wrap justify-center gap-8 md:gap-16">
          {skills.map((skill, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="flex items-center gap-2 text-slate-400 hover:text-primary transition-colors cursor-pointer"
            >
              <skill.icon size={20} />
              <span className="font-medium text-slate-600 hover:text-primary">{skill.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}