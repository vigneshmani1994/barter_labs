'use client'

import { motion } from 'framer-motion'

export default function CallToAction() {
  return (
    <section className="py-24 lg:py-32 bg-white relative">
      <div className="container mx-auto px-6 max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="p-10 md:p-16 rounded-3xl bg-teal-50 border border-teal-100 relative overflow-hidden"
        >
          {/* Decorative background blob */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2 pointer-events-none" />
          
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6 tracking-tight text-slate-900">
              Ready to Build Software That Matters?
            </h2>
            <p className="text-slate-600 mb-10 text-lg max-w-2xl mx-auto">
              Join Barter Labs and gain the practical skills, tools, and experience needed to become an industry-ready software engineer.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-full font-bold transition-all shadow-md">
                Apply Now
              </button>
              <button className="bg-white hover:bg-gray-50 border border-gray-200 text-slate-700 px-8 py-4 rounded-full font-bold transition-all shadow-sm">
                Talk to Us
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}