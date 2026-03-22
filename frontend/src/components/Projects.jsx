import { motion } from 'framer-motion'
import { Github, CheckCircle2, TrendingUp, Sparkles, BookOpen, Bot, Code2, Activity, GraduationCap } from 'lucide-react'

export default function Projects() {
  const projects = [
    {
      title: "BookAI",
      tagline: "Your Intelligent Reading Companion",
      description: "An intelligent, context-aware chatbot platform providing personalized book recommendations with deep AI-driven justifications and a premium, mood-adaptive interface.",
      problem: "Readers struggle to find books that truly match their current mood and interests, often receiving generic, truncated, or uninspired suggestions.",
      solution: "A premium, mood-adaptive AI interface that understands natural intent and provides comprehensive, justified recommendations in multiple languages.",
      github: "https://github.com/Chirag-Vasisth/AI-Book-Recommender-Chatbot",
      icon: <Bot className="text-primary" size={32} />,
      features: [
        "Ultra-Premium Glassmorphism UI",
        "Native Multi-Language AI Support",
        "Justified Book Recommendations",
        "Mood-Based Visual Themes",
        "Integrated Voice Recognition",
        "Responsive Web Ecosystem"
      ],
      techStack: {
        web: ["HTML5", "CSS3", "Vanilla JS", "Flask", "Python"],
        ai: ["Google Gemini 3.0 Flash", "google-genai", "Flask-CORS"]
      }
    },
    {
      title: "JeevanSetu",
      tagline: "Healthcare Intelligence Platform",
      description: "A high-fidelity healthcare command center featuring real-time city-wide hospital stress maps, automated triage engines, and critical resource tracking.",
      problem: "Fragmented healthcare data and manual tracking cause fatal delays in emergency admissions and resource allocation during hospital surges.",
      solution: "A high-tech command center with 5-second telemetry polling and AI triage to optimize patient flow and resource utilization across city-wide networks.",
      github: "https://github.com/Chirag-Vasisth/JeevanSetu",
      icon: <Activity className="text-secondary" size={32} />,
      features: [
        "Live Intelligence Command Center",
        "Real-Time City-Wide Stress Maps",
        "AI-Assisted Smart Triage Engine",
        "Predictive Inventory Intelligence",
        "Automated Crisis Mode Protocols",
        "Hospital Telemetry Integration"
      ],
      techStack: {
        web: ["React", "Vite", "Tailwind CSS", "Recharts"],
        data: ["Node.js", "Express.js", "MongoDB Atlas", "REST APIs"]
      }
    },
    {
      title: "Learners' Hub",
      tagline: "Online Learning Management System",
      description: "A comprehensive LMS platform with secure authentication, course forums, gamified leaderboards, and real-time messaging for enhanced student engagement.",
      problem: "Traditional online learning platforms often lack integrated community features, making it difficult for students to stay engaged and track their progress effectively.",
      solution: "A unified platform combining core learning modules with real-time community engagement features and a gamified performance tracking system.",
      github: "https://github.com/Chirag-Vasisth/Learner-s-Hub-Platform",
      icon: <GraduationCap className="text-primary" size={32} />,
      features: [
        "Secure Multi-Role Authentication",
        "Interactive Multimedia Lessons",
        "Gamified Global Leaderboard",
        "Real-Time Direct Messaging",
        "Performance Analytics Dashboard",
        "Automated Quiz Assessment"
      ],
      techStack: {
        web: ["React.js", "Tailwind CSS", "Framer Motion"],
        data: ["Node.js", "Express.js", "MongoDB Atlas", "Socket.io"]
      }
    }
  ]

  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-6 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">Featured Projects</h2>
          <div className="h-[1px] bg-glassBorder flex-grow"></div>
        </div>

        <div className="space-y-20">
          {projects.map((project, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="glass-card p-8 md:p-12 border border-white/10 bg-[#0a0a0a]/80 backdrop-blur-xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 blur-[100px] -z-10"></div>
              
              <div className="grid lg:grid-cols-2 gap-16">
                
                {/* Left Column: Project Info */}
                <div className="space-y-8">
                  <div className="flex items-center gap-5">
                    <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center border border-primary/30 shadow-[0_0_20px_rgba(255,215,0,0.1)]">
                      {project.icon}
                    </div>
                    <div>
                      <h3 className="text-4xl font-bold text-white mb-1">{project.title}</h3>
                      <p className="text-primary font-medium tracking-wide text-sm md:text-base uppercase">{project.tagline}</p>
                    </div>
                  </div>

                  <p className="text-gray-300 text-lg leading-relaxed">
                    {project.description}
                  </p>

                  <div className="space-y-4">
                    <div className="bg-[#1a0a0a]/60 border border-red-900/30 p-5 rounded-2xl">
                      <div className="flex items-center gap-3 text-red-400 font-bold mb-2 uppercase tracking-wider text-xs">
                        <TrendingUp size={14} /> Problem
                      </div>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {project.problem}
                      </p>
                    </div>
                    
                    <div className="bg-[#0a1a0f]/60 border border-emerald-900/30 p-5 rounded-2xl">
                      <div className="flex items-center gap-3 text-emerald-400 font-bold mb-2 uppercase tracking-wider text-xs">
                        <CheckCircle2 size={14} /> Solution
                      </div>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {project.solution}
                      </p>
                    </div>
                  </div>

                  <div className="pt-4">
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noreferrer" 
                      className="inline-flex items-center gap-3 px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl text-gray-200 transition-all duration-300 group shadow-lg"
                    >
                      <Github size={20} className="group-hover:scale-110 transition-transform" /> 
                      <span className="font-semibold">View Code</span>
                    </a>
                  </div>
                </div>

                {/* Right Column: Features & Stack */}
                <div className="space-y-12">
                  <div>
                    <div className="flex items-center gap-3 mb-8">
                      <CheckCircle2 className="text-primary" size={24} />
                      <h4 className="text-2xl font-bold text-white">Key Features</h4>
                    </div>
                    <div className="grid gap-4">
                      {project.features.map((feature, i) => (
                        <div key={i} className="flex items-start gap-4 text-gray-400 group">
                          <div className="mt-1 flex-shrink-0">
                            <CheckCircle2 className="text-primary group-hover:scale-110 transition-transform" size={18} />
                          </div>
                          <p className="text-base group-hover:text-gray-200 transition-colors uppercase tracking-tight font-medium">{feature}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-8">
                    <div>
                      <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                        <Code2 className="text-primary" size={20} /> Tech Stack
                      </h4>
                      
                      <div className="space-y-6">
                        {Object.entries(project.techStack).map(([category, techs]) => (
                          <div key={category}>
                            <p className="text-gray-500 text-xs uppercase tracking-[0.2em] font-bold mb-3">{category === 'web' ? 'Web Platform' : category === 'ai' ? 'AI & Core' : 'Backend & Data'}</p>
                            <div className="flex flex-wrap gap-2">
                              {techs.map(tech => (
                                <span key={tech} className="px-5 py-2 bg-white/5 border border-white/10 rounded-xl text-xs font-semibold text-gray-300 hover:border-primary/50 transition-colors">
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
