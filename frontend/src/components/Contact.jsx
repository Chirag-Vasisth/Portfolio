import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send } from 'lucide-react'
import axios from 'axios'

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState({ type: '', msg: '' })
  const [isLoading, setIsLoading] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    setStatus({ type: '', msg: '' })

    try {
      // Connects to the Express backend
      const res = await axios.post('/api/contact', formData);
      setStatus({ type: 'success', msg: 'Message sent successfully! I will get back to you soon.' })
      setFormData({ name: '', email: '', subject: '', message: '' })
    } catch (error) {
      console.error(error)
      setStatus({ type: 'error', msg: 'Failed to send message. Please try again later.' })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section id="contact" className="py-24 px-6 bg-darker/30 relative">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">
        
        {/* Contact Info */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Get In Touch</h2>
            <p className="text-gray-400 leading-relaxed max-w-md">
              Whether you have a question, a project proposal, or just want to say hi, my inbox is always open. I'll try my best to get back to you!
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                <Mail size={24} />
              </div>
              <div>
                <p className="text-sm border-gray-500 text-gray-400">Email Me At</p>
                <a href="mailto:chirag@main.com" className="text-lg text-white font-medium hover:text-primary transition-colors">
                  chirag@main.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                <Phone size={24} />
              </div>
              <div>
                <p className="text-sm border-gray-500 text-gray-400">Call Me At</p>
                <p className="text-lg text-white font-medium">7006262330</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                <MapPin size={24} />
              </div>
              <div>
                <p className="text-sm border-gray-500 text-gray-400">Location</p>
                <p className="text-lg text-white font-medium">Agra, India</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card p-8 md:p-10"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">Your Name</label>
                <input 
                  type="text" 
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-dark/50 border border-glassBorder rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                  placeholder="James william"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">Your Email</label>
                <input 
                  type="email" 
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-dark/50 border border-glassBorder rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                  placeholder="james@main.com"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-300">Subject</label>
              <input 
                type="text" 
                name="subject"
                required
                value={formData.subject}
                onChange={handleChange}
                className="w-full bg-dark/50 border border-glassBorder rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                placeholder="Project Inquiry"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-300">Message</label>
              <textarea 
                name="message"
                required
                rows="5"
                value={formData.message}
                onChange={handleChange}
                className="w-full bg-dark/50 border border-glassBorder rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors resize-none"
                placeholder="Hello Chirag, I'd like to talk about..."
              ></textarea>
            </div>

            {status.msg && (
              <div className={`p-4 rounded-lg flex items-center ${status.type === 'success' ? 'bg-green-500/10 text-green-400 border border-green-500/20' : 'bg-red-500/10 text-red-400 border border-red-500/20'}`}>
                {status.msg}
              </div>
            )}

            <button 
              type="submit" 
              disabled={isLoading}
              className="w-full btn-primary flex justify-center items-center gap-2 disabled:opacity-70"
            >
              {isLoading ? 'Sending...' : 'Send Message'} {!isLoading && <Send size={18} />}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  )
}
