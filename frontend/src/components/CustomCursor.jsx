import { useEffect, useState } from 'react'
import { motion, useSpring, useMotionValue } from 'framer-motion'

export default function CustomCursor() {
  const [isPointer, setIsPointer] = useState(false)
  
  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)
  
  // High stiffness and low damping for ultra-snappy follow (feels responsive, not laggy)
  const springConfig = { damping: 20, stiffness: 800 }
  const mainX = useSpring(cursorX, springConfig)
  const mainY = useSpring(cursorY, springConfig)

  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX)
      cursorY.set(e.clientY)

      const target = e.target
      const style = window.getComputedStyle(target)
      setIsPointer(
        style.cursor === 'pointer' || 
        ['A', 'BUTTON', 'INPUT', 'TEXTAREA'].includes(target.tagName) ||
        target.closest('a') ||
        target.closest('button')
      )
    }

    window.addEventListener('mousemove', moveCursor, { passive: true })
    return () => window.removeEventListener('mousemove', moveCursor)
  }, [cursorX, cursorY])

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999] hidden md:block">
      {/* Target Brackets - Only 2 pieces for better performance */}
      <motion.div
        className="fixed w-8 h-8 flex items-center justify-center"
        style={{
          x: mainX,
          y: mainY,
          translateX: "-50%",
          translateY: "-50%",
          scale: isPointer ? 1.5 : 1,
          rotate: isPointer ? 45 : 0
        }}
        transition={{ 
          type: "spring", stiffness: 400, damping: 25,
          rotate: { duration: 0.3 }
        }}
      >
        {/* Simple Corner Brackets (Combined into SVG for efficiency) */}
        <svg width="100%" height="100%" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 12V4H12" stroke="#FFD700" strokeWidth="2" strokeLinecap="round"/>
          <path d="M20 4H28V12" stroke="#FFD700" strokeWidth="2" strokeLinecap="round"/>
          <path d="M28 20V28H20" stroke="#FFD700" strokeWidth="2" strokeLinecap="round"/>
          <path d="M12 28H4V20" stroke="#FFD700" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      </motion.div>
      
      {/* Core Dot (Zero Spring - Instant follow) */}
      <motion.div
          className="fixed w-1 h-1 bg-white rounded-full shadow-[0_0_5px_white] z-10"
          style={{
            x: cursorX,
            y: cursorY,
            translateX: "-50%",
            translateY: "-50%",
          }}
      />
    </div>
  )
}
