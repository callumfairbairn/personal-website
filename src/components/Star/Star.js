import React from 'react'
import './Star.scss'
import { motion } from 'framer-motion'

export const Star = ({ content }) => {
  return content
    ? <motion.div animate={{ rotate: [0, 180, 360], scale: [1, 1.5, 1] }} transition={{ duration: 2, times: [0, 0.5, 1], loop: Infinity }} className='star-with-content' />
    : <div className='star' />
}