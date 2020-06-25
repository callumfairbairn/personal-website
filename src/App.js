import React from 'react'

import './App.css'
import { motion } from 'framer-motion'
import { Header } from './components/Header/Header'

const App = () => {
  const textToAnimate = 'Coming soon...'

  return (
    <div className='App'>
      <motion.div
        animate={{ scale: 1.5 }}
        drag
        dragConstraints={{ left: -0, right: 0, top: -0, bottom: 0 }}
        dragElastic={0.5}
        dragTransition={{ bounceStiffness: 600, bounceDamping: 10 }}
      >
        {textToAnimate}
      </motion.div>
    </div>
  )
}

export default App
