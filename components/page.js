import React, { useEffect, useState } from 'react'
import DrugzSolana from './DrugzSolana'
import TradingViewWidget from './TradingViewWidget'

const Layout = ({ children }) => {
  const [imageIndex, setImageIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [audio, setAudio] = useState(null)
  const [textColor, setTextColor] = useState('text-blue-500')
  const [showLastText, setShowLastText] = useState(false)
  const [firstPlay, setFirstPlay] = useState(true)
  const [buttonClick, setButtonClick] = useState(false)

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
        setIsPlaying(false)
        setButtonClick(false)
      } else {
        if (!firstPlay) {
          audio.volume = 0.2
          audio.play()
          setIsPlaying(true)
          setButtonClick(true)
        } else {
          audio.volume = 0.2
          audio.currentTime = 13
          audio.play()
          setFirstPlay(false)
          setIsPlaying(true)
          setButtonClick(true)
        }
      } //setIsPlaying(!isPlaying)
    }
  }

  const playSoundCherHoverEnter = () => {
    if (audio) {
      if (!isPlaying) {
        if (!firstPlay) {
          audio.volume = 0.2
          audio.play()
          setIsPlaying(true)
        } else {
          audio.volume = 0.2
          audio.currentTime = 13
          audio.play()
          setFirstPlay(false)
          setIsPlaying(true)
        }
      }
    }
  }

  const playSoundCherHoverOut = () => {
    if (audio) {
      if (!buttonClick) {
        audio.pause()
        setIsPlaying(false)
      }
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
    <div className='cursor-default bg-r-gradient-bb min-w-[100vw] min-h-[100vh] flex flex-col items-center justify-center gap-5 overflow-x-hidden overscroll-y-none m-0 p-0'>
      <meta
        name='viewport'
        content='width=device-width, initial-scale=1.0, viewport-fit=cover'
      />
      <DrugzSolana />
      <div
        className={`w-[150px] sm:w-[20%] ${
          flip ? 'scale-x-[-1]' : 'scale-x-100'
        } transition durantion-1000 ease-in-out`}
      >
        <img
          src={imageSrc}
          alt='Logo'
          className='min-w-[150px] object-cover mt-10 sm:w-full'
        />
      </div>
      <div className='w-[75px] h-[30px] sm:h-[40px] absolute bottom-0 right-0 mb-2 mr-1 flex justify-between items-center'>
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
      <div className='group absolute left-[10px] h-[40px] bottom-[5px] w-[50px] sm:h-[60px]'>
        <img
          className={`z-50  w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] `}
          src='images/santa-running.gif'
          onMouseOver={playSoundCherHoverEnter}
          onMouseOut={playSoundCherHoverOut}
        />
        <div className='opacity-0 group-hover:opacity-95 pointer-events-none left-[30px] sm:left-[40px] w-[300px]  h-[500px] sm:w-[500px] sm:h-[500px] absolute z-50 bottom-full ml-2 bg-blue-700 text-yellow-500 p-2 text-center text-3xl sm:text-5xl flex items-center justify-center'>
          <TradingViewWidget />
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
          className={`absolute object-center text-3xl bottom-[100px] md:bottom-[80px] xl:bottom-[80px] font-serif font-bold ${textColor} sm:text-6xl`}
        >
          Which Will You Choose?
        </div>
      )}
      <div className='group'>
        <img
          className='absolute w-[150px] h-[150px] top-[30px] left-[-105px] rotate-90 hover:left-[-50px]'
          src='/images/st_small_507x507-pad_600x600_f8f8f8-removebg-preview-removebg-preview.png'
          onMouseOver={playSoundCherHoverEnter}
          onMouseOut={playSoundCherHoverOut}
        ></img>
        <div className='absolute place-content-center opacity-0 group-hover:opacity-100 pointer-events-none top-[80px] left-[100px] bg-blue-700 flex-col'>
          <h2 className='font-serif font-bold text-4xl'>Tokenomics Soon</h2>
        </div>
      </div>
    </div>
  )
}

export default Layout
{
  /* <ul className='list-disc flex-col list-inside'>
            <li>Airdrops 30%</li>
            <li>Presale 10%</li>
            <li>Team 10%</li>
            <li>Liq Burn 15%</li>
          </ul>
          <ul className='inline-block'>
            <li>Test</li>
          </ul> */
}
