'use client'

import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-24 overflow-hidden bg-background">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & Input */}
          <div className="max-w-2xl">
            {/* Decorative decorative lines (mimicking the top left of the reference) */}
            <div className="mb-4 flex gap-1">
              <div className="h-1 w-8 bg-black rounded-full transform -rotate-12"></div>
              <div className="h-1 w-12 bg-primary rounded-full transform -rotate-12 translate-y-1"></div>
            </div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-6"
            >
              Prepare to build <br/>
              <span className="text-slate-900">software confidently</span>
              <br/>
              <span className="text-3xl lg:text-4xl font-normal text-slate-600 mt-2 block">
                with real-world engineering teams
              </span>
            </motion.h1>

            {/* Search/Input Bar */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex items-center w-full max-w-lg bg-white rounded-full border border-gray-200 shadow-sm p-1.5 mb-6"
            >
              <input 
                type="text" 
                placeholder="Search by technology or role" 
                className="flex-grow px-4 py-3 bg-transparent outline-none text-slate-700 placeholder-slate-400"
              />
              <button className="bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-full font-medium transition-colors">
                Explore curriculum
              </button>
            </motion.div>

            {/* Tags */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-wrap items-center gap-4 text-sm font-semibold text-slate-700"
            >
              <span className="hover:text-primary cursor-pointer transition-colors">Kubernetes</span>
              <span className="hover:text-primary cursor-pointer transition-colors">Azure DevOps</span>
              <span className="hover:text-primary cursor-pointer transition-colors">React</span>
              <span className="hover:text-primary cursor-pointer transition-colors">Node.js</span>
              <span className="hover:text-primary cursor-pointer transition-colors">Platform Engineering</span>
            </motion.div>
          </div>

          {/* Right Column: Blobs and Images */}
          <div className="relative h-[400px] lg:h-[500px] w-full flex justify-center items-center">
            
            {/* Light Blue accent blob */}
            <div className="absolute top-0 right-10 w-24 h-24 bg-[#5abcb9] rounded-[40%_60%_70%_30%/40%_50%_60%_50%] opacity-80 animate-pulse"></div>
            
            {/* Main Dark Navy Blob */}
            <div className="absolute inset-0 right-[-10%] blob-shape bg-[#1f2937] transform rotate-[-5deg] scale-95 transition-transform duration-700 hover:scale-100"></div>
            
            {/* Image Placeholder 1 (Left/Back) */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="absolute left-[10%] bottom-[10%] w-48 h-64 bg-gray-200 rounded-3xl border-4 border-white shadow-xl overflow-hidden z-10"
            >
              <div className="w-full h-full bg-slate-300 flex items-center justify-center text-slate-500 font-medium">
                Image 1
              </div>
            </motion.div>

            {/* Image Placeholder 2 (Right/Front) */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute right-[15%] top-[15%] w-56 h-72 bg-gray-300 rounded-t-full rounded-b-3xl border-4 border-white shadow-2xl overflow-hidden z-20"
            >
              <div className="w-full h-full bg-slate-400 flex items-center justify-center text-slate-100 font-medium">
                Image 2
              </div>
            </motion.div>

            {/* Decorative bottom left lines */}
            <div className="absolute -bottom-6 left-0 flex gap-2">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="w-1 h-12 bg-[#5abcb9] opacity-40 transform rotate-45 rounded-full"></div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}