import React, { useEffect, useState } from 'react'
import DrugzSolana from './DrugzSolana'

const Layout = ({ children }) => {
  const [imageIndex, setImageIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [audio, setAudio] = useState(null)
  const [textColor, setTextColor] = useState('text-blue-500')
  const [showLastText, setShowLastText] = useState(false)

  useEffect(() => {
    const indexIntervalId = setInterval(() => {
      // Toggle between 0 and 1
      setImageIndex((prevIndex) => (prevIndex === 0 ? 1 : 0))
    }, 1250)

    return () => {
      clearInterval(indexIntervalId)
    }
  }, [])

  useEffect(() => {
    const lastTextTimeoutId = setTimeout(() => {
      setShowLastText(true)
    }, 2000)

    return () => {
      clearTimeout(lastTextTimeoutId)
    }
  }, [])

  useEffect(() => {
    const colorIntervalId = setInterval(() => {
      setTextColor((prevColor) =>
        prevColor === 'text-blue-500' ? 'text-red-500' : 'text-blue-500'
      )
    }, 1500)

    return () => {
      clearInterval(colorIntervalId)
    }
  }, [])

  const flip = imageIndex === 1
  const imageSrc = `/images/solana-logo_2${
    imageIndex === 0 ? '_blue' : '_red'
  }.png`

  const playSoundCher = () => {
    if (audio) {
      if (isPlaying) {
        audio.pause()
      } else {
        audio.volume = 0.2
        audio.currentTime = 13
        audio.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  useEffect(() => {
    setAudio(new Audio('audio/TheMusic.mp3'))
  }, [])

  const playSoundStupid = () => {
    if (audio) {
      if (isPlaying) {
        audio.pause()
        const audio2 = new Audio('audio/TheBestMusic.mp3')
        audio2.volume = 0.75
        audio2.play()
      } else {
        const audio2 = new Audio('audio/TheBestMusic.mp3')
        audio2.volume = 0.75
        audio2.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  return (
    <div className='cursor-default bg-r-gradient-bb min-w-[100vw] min-h-[100vh] flex flex-col items-center justify-center gap-5'>
      <DrugzSolana />
      <div
        className={`w-[150px] sm:w-[20%] ${
          flip ? 'scale-x-[-1]' : 'scale-x-100'
        } transition durantion-1000 ease-in-out mb-[10px]`}
      >
        <img
          src={imageSrc}
          alt='Logo'
          className='min-w-[150px] object-cover mt-10 sm:w-full'
        />
      </div>
      <span className='text-white leading-normal text-3xl font-bold sm:text-[3rem] mb-[30px]'>
        {children}
      </span>
      <div className='w-[75px] h-[40px] absolute bottom-0 right-0 mb-3 mr-1 flex justify-between items-center'>
        <a
          href='https://twitter.com/Drugz_on_Solana'
          className='mr-2'
          target='_blank'
        >
          <img
            className='transition-all duration-300 ease-in-out hover:w-[20px] hover:h-[20px] w-[15px] h-[15px] object-right-bottom sm:w-[25px] sm:h-[25px] sm:hover:w-[30px] sm:hover:h-[30px]'
            src='images/logo-black.png'
            alt='Drugz_On_Solana Twitter'
          />
        </a>
        <a href='https://t.me/drugzonsolana' className='mr-2' target='_blank'>
          <img
            className='transition-all duration-300 ease-in-out hover:w-[25px] hover:h-[25px] w-[20px] h-[20px] object-right-bottom sm:w-[30px] sm:h-[30px] sm:hover:w-[35px] sm:hover:h-[35px]'
            src='images/telegram-logo.png'
            alt='Drugz_On_Solana Telegram'
          />
        </a>
      </div>
      <div className='group absolute bottom-0 left-[10px] h-[50px] w-[60px] sm:h-[60px]'>
        <img
          className={`z-50 w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] `}
          src='images/santa-running.gif'
        />
        <div className='opacity-0 group-hover:opacity-95 pointer-events-none left-[30px] sm:left-[40px] w-[250px]  h-[250px] sm:w-[500px] sm:h-[500px] absolute z-50 bottom-full ml-2 bg-blue-700 text-yellow-500 p-2 text-center text-3xl sm:text-5xl flex items-center justify-center'>
          Live Chart Soon
        </div>
      </div>
      <div className='w-[60px] h-[100px] sm:w-[80px] sm:h-[140px] absolute top-[20px] right-[5px] flex justify-between items-center'>
        <img
          className='transition-all duration-300 ease-in-out hover:w-[60px] hover:h-[60px] sm:hover:w-[80px] sm:hover:h-[80px] absolute cursor-pointer object-right-top top-0 w-[50px] h-[50px] sm:w-[70px] sm:h-[70px]'
          onClick={playSoundCher}
          src='/images/solana-logo_2_red.png'
        ></img>
        <img
          className='transition-all duration-300 ease-in-out hover:w-[60px] hover:h-[60px] sm:hover:w-[80px] sm:hover:h-[80px] absolute cursor-pointer object-right-top top-[50px] sm:top-[70px] w-[50px] h-[50px] sm:w-[70px] sm:h-[70px]'
          onClick={playSoundStupid}
          src='/images/solana-logo_2_blue.png'
        ></img>
      </div>
      {showLastText && (
        <div
          className={`absolute object-center text-3xl bottom-[100px] sm:bottom-[80px] font-serif font-bold ${textColor} sm:text-6xl`}
        >
          Which Will You Choose?
        </div>
      )}
    </div>
  )
}

export default Layout
// -left-[60px] translate-x-running-pepe transition-transform duration-1000 ease-in
