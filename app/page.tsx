import Hero from '@/components/Hero'
import TrustedSkills from '@/components/TrustedSkills'
import WhyBarterLabs from '@/components/WhyBarterLabs'
import SDLCTimeline from '@/components/SDLCTimeline'
import RealProjects from '@/components/RealProjects'
import CallToAction from '@/components/CallToAction'

export default function Home() {
  return (
    <main className="min-h-screen selection:bg-primary/20 selection:text-slate-900 overflow-hidden">
      
      {/* Light Mode Navbar */}
      <nav className="fixed top-0 w-full z-50 bg-white border-b border-gray-100 shadow-sm">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <div className="font-extrabold text-2xl tracking-tight text-slate-900 flex items-center gap-2">
            {/* Abstract logo mark */}
            <div className="w-3 h-6 bg-slate-900 rounded-sm transform skew-x-12"></div>
            BarterLabs
          </div>
          <div className="flex gap-6 items-center text-sm font-medium text-slate-600">
            <span className="hidden md:block hover:text-slate-900 cursor-pointer transition-colors">Find courses</span>
            <span className="hidden md:block hover:text-slate-900 cursor-pointer transition-colors">Corporate training</span>
            <button className="text-sm font-medium border border-gray-200 text-slate-700 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors">
              Log in
            </button>
          </div>
        </div>
      </nav>
      
      {/* Page Components */}
      <Hero />
      <TrustedSkills />
      <WhyBarterLabs />
      <SDLCTimeline />
      <RealProjects />
      <CallToAction />
      
      {/* Light Mode Footer */}
      <footer className="border-t border-gray-200 bg-white py-12 text-center text-sm text-slate-500">
        <div className="container mx-auto px-6">
          <p>© {new Date().getFullYear()} Barter Labs. All rights reserved.</p>
        </div>
      </footer>
      
    </main>
  )
}