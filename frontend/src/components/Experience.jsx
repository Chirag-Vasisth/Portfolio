import { motion } from 'framer-motion'
import { Award } from 'lucide-react'

export default function Experience() {
  const achievements = [
    {
      title: "Finalist of Udyamitsav",
      subtitle: "Achieved Top 5 position among 50+ teams"
    },
    {
      title: "Finalist of CipherThon 2.0",
      subtitle: "Secured among 5000+ participants"
    }
  ]

  return (
    <section id="achievements" className="py-24 px-6 bg-darker/30">
      <div className="max-w-7xl mx-auto">

        {/* Achievements Header */}
        <div className="flex items-center gap-4 mb-12">
          <Award className="text-primary" size={32} />
          <h2 className="text-3xl md:text-4xl font-bold text-white">Achievements</h2>
        </div>

        <div className="space-y-4">
          {achievements.map((achievement, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="glass-card p-6 flex items-start gap-4 hover:border-primary/50 transition-colors"
            >
              <div className="bg-primary/10 p-2 rounded-lg text-primary mt-1">
                <Award size={20} />
              </div>
              <div>
                <p className="text-white font-semibold text-lg">{achievement.title}</p>
                <p className="text-gray-400 text-sm mt-1">{achievement.subtitle}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
