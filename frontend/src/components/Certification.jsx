import { motion } from 'framer-motion'
import { Award, ExternalLink } from 'lucide-react'

export default function Certification() {
  const certs = [
    {
      title: "Oracle Data Platform 2025 Certified Foundations Associate",
      issuer: "Oracle",
      file: "/Oracle Certificate.pdf",
      color: "text-red-500",
      iconBg: "bg-red-500/10",
      border: "border-red-500/20 hover:border-red-500/60"
    },
    {
      title: "Cloud Computing Essentials with Azure Management",
      issuer: "Coursera",
      file: "/Coursera 4M8910DRW0G0.pdf",
      color: "text-blue-400",
      iconBg: "bg-blue-400/10",
      border: "border-blue-400/20 hover:border-blue-400/60"
    },
    {
      title: "AWS Cloud Architecting",
      issuer: "AWS Academy",
      file: "/AWS_Academy_Graduate___Cloud_Architecting___Training_Badge_Badge20260121-31-qnc7tf.pdf",
      color: "text-[#ff9900]",
      iconBg: "bg-[#ff9900]/10",
      border: "border-[#ff9900]/20 hover:border-[#ff9900]/60"
    },
    {
      title: "Privacy & Security in Online Social Media",
      issuer: "NPTEL / Online Course",
      file: "/Privacy and Security in Online Social Media.pdf",
      color: "text-green-400",
      iconBg: "bg-green-400/10",
      border: "border-green-400/20 hover:border-green-400/60"
    }
  ]

  return (
    <section id="certification" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">

        <div className="flex items-center gap-4 mb-12">
          <Award className="text-primary" size={32} />
          <h2 className="text-3xl md:text-4xl font-bold text-white">Certifications</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {certs.map((cert, idx) => (
            <motion.a
              key={idx}
              href={cert.file}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className={`glass-card p-8 flex flex-col items-start justify-between gap-6 border transition-all duration-300 ${cert.border} hover:-translate-y-1 group`}
            >
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${cert.iconBg}`}>
                <Award className={cert.color} size={26} />
              </div>

              <div className="flex-1">
                <h3 className="text-white font-bold text-lg leading-snug mb-1">{cert.title}</h3>
                <p className={`text-sm font-medium ${cert.color}`}>{cert.issuer}</p>
              </div>

              <div className={`flex items-center gap-2 text-sm font-medium ${cert.color} group-hover:underline underline-offset-4`}>
                View Certificate <ExternalLink size={14} />
              </div>
            </motion.a>
          ))}
        </div>

      </div>
    </section>
  )
}
