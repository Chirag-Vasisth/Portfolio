import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, ArrowRight, Download, Folder } from 'lucide-react'

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center pt-24 pb-12 px-6">
      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">

        {/* Text Content (Shifted to right) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-8 order-2"
        >
          <div>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="text-primary font-medium tracking-wide mb-2"
            >
              HELLO, I'M
            </motion.p>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 leading-tight">
              Chirag Vasisth
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-400">
              Cloud & <span className="text-white">Fullstack Engineer</span>
            </h2>
          </div>

          <p className="text-gray-400 text-lg leading-relaxed max-w-lg">
            Architecting robust cloud infrastructure and building highly scalable full-stack applications. Passionate about transforming complex business challenges into elegant, high-performance software solutions that drive real-world impact.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <a href="#projects" className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-6 py-3 rounded-xl font-medium flex items-center gap-2 hover:opacity-90 transition-opacity">
              <Folder size={20} /> View Projects
            </a>
            <a href="#contact" className="bg-[#0a0a0a] border border-yellow-500/30 text-white px-6 py-3 rounded-xl font-medium flex items-center gap-2 hover:border-yellow-500/80 transition-all shadow-sm">
              <Mail size={20} /> Contact
            </a>
            <a href="/resume.pdf" target="_blank" rel="noreferrer" className="bg-[#0b0c10] border border-indigo-500/30 text-white px-6 py-3 rounded-xl font-medium flex items-center gap-2 hover:border-indigo-500/80 transition-all shadow-sm">
              <Download size={20} /> Download Resume
            </a>
          </div>

          <div className="flex items-center gap-4 pt-8">
            <a href="https://github.com/Chirag-Vasisth" target="_blank" rel="noreferrer" className="bg-[#0a0a0a] border border-white/10 p-4 rounded-2xl text-gray-400 hover:text-white hover:border-white/30 transition-all shadow-sm">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/chiragvasisth" target="_blank" rel="noreferrer" className="bg-[#0a0a0a] border border-white/10 p-4 rounded-2xl text-gray-400 hover:text-[#0A66C2] hover:border-[#0A66C2]/50 transition-all shadow-sm">
              <Linkedin size={24} />
            </a>
            <a href="#contact" className="bg-[#0a0a0a] border border-white/10 p-4 rounded-2xl text-gray-400 hover:text-primary hover:border-primary/50 transition-all shadow-sm" title="Contact Me">
              <Mail size={24} />
            </a>
          </div>
        </motion.div>

        {/* Visuals (Circular Image, Shifted to front) */}
        <div className="relative h-[400px] flex items-center justify-center order-1">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative z-20 w-80 h-80 !rounded-full p-2 bg-glass border border-glassBorder backdrop-blur-md shadow-xl flex items-center justify-center overflow-hidden border-2 border-primary/30"
          >
            <div className="w-full h-full rounded-full overflow-hidden border border-glassBorder bg-dark">
              <img
                src="https://github.com/Chirag-Vasisth.png"
                alt="Chirag Vasisth"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Decorative Elements */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/20 rounded-full blur-[100px] -z-10"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] h-[340px] border border-glassBorder rounded-full animate-spin-slow opacity-30" style={{ animationDuration: '20s' }}></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[380px] h-[380px] border border-glassBorder rounded-full animate-spin-slow opacity-10" style={{ animationDuration: '25s', animationDirection: 'reverse' }}></div>
        </div>
      </div>
    </section>
  )
}
