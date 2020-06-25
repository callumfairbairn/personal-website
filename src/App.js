import React from 'react'

import './App.css'
import { motion } from 'framer-motion'

const App = () => {
  const textToAnimate = 'Coming soon...'
  const containerVariants = {
    end: {
      transition: {
        staggerChildren: 0.2
      }
    }
  }
  const characterVariants = {
    start: {
      y: 0
    },
    end: {
      y: -50
    }
  }
  const characterTransition = {
    duration: 0.5,
    yoyo: 1,
    ease: 'easeInOut'
  }

  return (
    <div className='App'>
      <motion.div
        className='visualiser'
        drag
        dragConstraints={{ left: -0, right: 0, top: -0, bottom: 0 }}
        dragElastic={0.5}
        dragTransition={{ bounceStiffness: 600, bounceDamping: 10 }}
        variants={containerVariants}
        initial='start'
        animate='end'

      >
        {
          textToAnimate.split('').map(character => {
            return (
              <motion.div
                key={character}
                className='character'
                variants={characterVariants}
                transition={characterTransition}
              >
                {character}
              </motion.div>
            )
          })
        }
      </motion.div>
    </div>
  )
}

export default App
