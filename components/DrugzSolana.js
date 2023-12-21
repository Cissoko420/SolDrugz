// components/AnimatedText.js
import React from 'react'
import { motion } from 'framer-motion'

const DrugzSolana = ({ text }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -60 }}
      animate={{ opacity: 1, y: -30 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className='text-white text-4xl font-bold sm:text-[3.5rem]'>
        Drugz On Solana
      </h1>
    </motion.div>
  )
}

export default DrugzSolana
