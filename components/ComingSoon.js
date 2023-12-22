import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const ComingSoon = () => {
  const sentence = 'Coming Soon'
  const words = sentence.split(' ')
  const glitchDuration = 3

  const cointainer = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: {
        delay: 0.7,
        staggerChildren: 0.85,
        delayChildren: 0.25 * i,
      },
    }),
  }

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100,
      },
    },
  }

  const glitch = {
    visible: {
      opacity: [1, 0, 1, 0, 1],
      x: [0, -5, 5, -2, 2, 0],
      transition: {
        duration: 0.2,
      },
    },
    hidden: {
      opacity: 1,
      x: 0,
    },
  }

  const GlitchWord = ({ word }) => {
    const [glitching, setGlitching] = useState(false)

    useEffect(() => {
      console.log(glitching)
      let timeoutId = null
      const intervalId = setInterval(() => {
        setGlitching(true)
        timeoutId = setTimeout(
          () => setGlitching(false),
          glitchDuration * 10000 - 100
        )
      }, glitchDuration * 1000)

      return () => {
        clearInterval(intervalId)
        if (timeoutId) {
          clearTimeout(timeoutId)
        }
      }
    }, [glitching])

    return (
      <motion.span
        variants={glitching ? glitch : child}
        style={{ marginRight: '20px' }}
      >
        {word}
      </motion.span>
    )
  }

  return (
    <motion.div
      style={{ overflow: 'hidden', display: 'srping' }}
      variants={cointainer}
      initial='hidden'
      animate='visible'
    >
      {words.map((word, index) => (
        <GlitchWord key={index} word={word} />
      ))}
    </motion.div>
  )
  /*
  return (
    <motion.div style={{overflow: "hidden", display: "flex"}} variants={cointainer} initial ="hidden" animate="visible">
      {words.map((word, index) =>(
        <motion.span variants={child} style={{ marginRight: "20px" }} key={index}>
          {word}
        </motion.span>
      ))}
      <h1></h1>
    </motion.div>
  );
  */
}

export default ComingSoon
