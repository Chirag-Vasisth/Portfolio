import { motion } from 'framer-motion'
import { BookOpen, ExternalLink } from 'lucide-react'

export default function Training() {
  const tags = [
    "C++", "OOPs Concepts", "Classes & Objects", "Inheritance",
    "Polymorphism", "Encapsulation", "Abstraction", "File Handling",
    "Standard Template Library"
  ]

  return (
    <section id="training" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">

        <div className="flex items-center gap-4 mb-12">
          <BookOpen className="text-primary" size={32} />
          <h2 className="text-3xl md:text-4xl font-bold text-white">Training</h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass-card p-8 md:p-10 w-full rounded-2xl border border-white/10 bg-[#0a0a0a] space-y-6"
        >
          {/* Header */}
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="text-xl font-bold text-white">Object-Oriented Programming with C++ — Summer Training</h3>
              <p className="text-primary text-sm font-medium mt-1">Jun 2025 – Jul 2025</p>
            </div>
            <a
              href="/Certificate of summer training.pdf"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-sm font-medium text-gray-400 hover:text-primary transition-colors shrink-0 mt-1"
            >
              <ExternalLink size={14} /> View Certificate
            </a>
          </div>

          {/* Description */}
          <div className="space-y-3 text-gray-300 text-base leading-relaxed">
            <p>Completed hands-on training focused on Object-Oriented Programming (OOP) concepts using C++.</p>
            <p>Gained practical experience in writing modular, reusable, and efficient code by applying core principles such as classes, objects, inheritance, polymorphism, encapsulation, and abstraction.</p>
            <p>Worked on implementing real-world problem-solving programs and practiced debugging, file handling, and STL usage in C++.</p>
          </div>

          {/* Skill Tags */}
          <div className="flex flex-wrap gap-3 pt-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-4 py-2 text-sm font-medium text-primary bg-primary/10 border border-primary/20 rounded-lg hover:border-primary/50 transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  )
}
