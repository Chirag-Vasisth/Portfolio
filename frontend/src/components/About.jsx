import { motion } from 'framer-motion'
import { Lightbulb, Braces, ClipboardList, RefreshCw } from 'lucide-react'

export default function About() {
  const customSkills = [
    {
      title: "Problem-Solving",
      desc: "Analytical approach to complex technical challenges.",
      icon: <Lightbulb size={24} />,
      color: "text-yellow-500",
      bgClass: "bg-yellow-500/5 border-yellow-500/10 hover:border-yellow-500/30",
      iconBg: "bg-yellow-500/10"
    },
    {
      title: "OOPs",
      desc: "Strong foundation in Object-Oriented principles.",
      icon: <Braces size={24} />,
      color: "text-purple-400",
      bgClass: "bg-purple-500/5 border-purple-500/10 hover:border-purple-500/30",
      iconBg: "bg-purple-500/10"
    },
    {
      title: "Project Management",
      desc: "Agile methodologies & effective team coordination.",
      icon: <ClipboardList size={24} />,
      color: "text-blue-400",
      bgClass: "bg-blue-500/5 border-blue-500/10 hover:border-blue-500/30",
      iconBg: "bg-blue-500/10"
    },
    {
      title: "Adaptability",
      desc: "Quick learner across versatile tech environments.",
      icon: <RefreshCw size={24} />,
      color: "text-orange-400",
      bgClass: "bg-orange-500/5 border-orange-500/10 hover:border-orange-500/30",
      iconBg: "bg-orange-500/10"
    }
  ]

  return (
    <section id="about" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            About Me
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="h-1 w-20 bg-primary mx-auto rounded-full mb-12"
          ></motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
          >
            I'm a BTech Computer Science student passionate about creating innovative solutions that merge AI, web development, and cloud computing.
          </motion.p>

          {/* Large Bio Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="bg-[#0a0a0a] border border-white/10 px-6 py-6 md:px-12 md:py-8 text-left space-y-4 mt-16 w-full mx-auto rounded-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
            
            <p className="text-gray-300 leading-relaxed text-base font-light tracking-wide">
              My engineering journey is driven by a clear mission: <span className="text-primary font-medium">architecting robust systems that scale seamlessly</span>. From designing complex data flows to deploying highly available cloud infrastructures, I focus on building reliable applications that solve real-world problems.
            </p>
            <p className="text-gray-300 leading-relaxed text-base font-light tracking-wide">
              With deep expertise in <span className="text-[#61dafb] font-medium">React</span>, <span className="text-[#339933] font-medium">Node.js</span>, and <span className="text-[#ff9900] font-medium">AWS</span>, I've developed data-intensive applications and optimized backend services for maximum performance. I'm particularly passionate about implementing automated CI/CD pipelines and interactive interfaces.
            </p>
            <p className="text-gray-300 leading-relaxed text-base font-light tracking-wide">
              Currently exploring opportunities in <span className="text-primary font-medium">cloud architecture, backend engineering, and scalable product development</span>. Whether it's optimizing server deployments or launching a new product, let's build something extraordinary together!
            </p>
          </motion.div>

          {/* 4 Soft Skills Tiles */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12 w-full mx-auto text-left">
            {customSkills.map((skill, i) => (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 + i * 0.1 }}
                className={`p-6 md:p-8 rounded-2xl border transition-all duration-300 ${skill.bgClass} flex flex-col justify-center`}
              >
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-sm ${skill.iconBg} ${skill.color}`}>
                  {skill.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{skill.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{skill.desc}</p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
