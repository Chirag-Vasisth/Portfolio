import { motion } from 'framer-motion'
import { GraduationCap } from 'lucide-react'

export default function Education() {
  const educations = [
    {
      degree: "B.Tech Computer Science",
      institution: "Lovely Professional University",
      duration: "2023 - 2027",
      grade: "CGPA: 8.0/10"
    },
    {
      degree: "12th Grade (PCM)",
      institution: "Jammu Sanskriti School, Kathua",
      duration: "2021 - 2023",
      grade: "Percentage: 84%"
    },
    {
      degree: "10th Grade",
      institution: "Jammu Sanskriti School, Kathua",
      duration: "2020 - 2021",
      grade: "Percentage: 94%"
    }
  ]

  return (
    <section id="education" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">

        <div className="flex items-center gap-4 mb-12">
          <GraduationCap className="text-primary" size={32} />
          <h2 className="text-3xl md:text-4xl font-bold text-white">Education</h2>
        </div>

        <div className="flex flex-col gap-6">
          {educations.map((edu, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="glass-card px-8 py-6 border-l-4 border-l-primary hover:border-primary/60 transition-all duration-300 flex items-center gap-8 w-full"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                <GraduationCap className="text-primary" size={24} />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-white">{edu.degree}</h3>
                <p className="text-primary font-medium text-sm mt-1">{edu.institution} • {edu.duration}</p>
                <p className="text-gray-400 text-sm mt-2">{edu.grade}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
