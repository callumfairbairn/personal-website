import React, { useState } from 'react'
import './Star.scss'
import { motion, useAnimation } from 'framer-motion'

const initial = {
  rotate: [0, 180, 360], scale: [1, 1.5, 1],
  transition: {
    duration: 2, times: [0, 0.5, 1], loop: Infinity
  }
}

const hoveredStart = {
  rotate: [null, 360], scale: [null, 40],
  zIndex: 1
}

const hoveredEnd = {
  rotate: [null, 0], scale: [null, 1],
  zIndex: 0
}

export const Star = ({ content }) => {
  // const [isHovered, setIsHovered] = useState(false)
  const controls = useAnimation()
  controls.start(initial)

  return content
    ? <motion.div
      animate={controls}
      // onHoverStart={() => { setIsHovered(true) }}
      // onHoverEnd={() => { setIsHovered(false) }}
      onHoverStart={() => { controls.start(hoveredStart) }}
      onHoverEnd={async () => {
        await controls.start(hoveredEnd)
        await controls.start(initial)
      }}
      className='star-with-content'
    />
    : <div className='star' />
}