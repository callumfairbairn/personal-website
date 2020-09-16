import React, { useEffect, useRef } from 'react'
import './Star.scss'
import { motion, useAnimation } from 'framer-motion'

const initial = {
  rotate: [0, 180, 360], scale: [1, 3, 1],
  transition: {
    duration: 2, times: [0, 0.5, 1], loop: Infinity
  }
}

const hoveredStart = {
  rotate: [null, 360], scale: [null, 30],
  zIndex: 1
}

const hoveredEnd = {
  rotate: [null, 0], scale: [null, 1],
  zIndex: 1
}

export const Star = ({ content }) => {
  const ref = useRef()

  useEffect(() => {
    const handleTapOutside = async (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        await controls.start(hoveredEnd)
        await controls.start(initial)
      }
    }

    document.addEventListener("touchend", handleTapOutside)

    return () => {
      document.removeEventListener("touchend", handleTapOutside)
    }
  })

  const controls = useAnimation()

  controls.start(initial)

  return content
    ? <motion.div
      animate={controls}
      onHoverStart={() => { controls.start(hoveredStart) }}
      onHoverEnd={async () => {
        await controls.start(hoveredEnd)
        await controls.start(initial)
      }}

      onTap={() => { controls.start(hoveredStart) }}
      className='star-with-content'
      ref={ref}
    >
      {content}
    </motion.div>
    : <div className='star' />
}