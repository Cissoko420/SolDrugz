import React, { useEffect, useRef } from 'react'

const Falling = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) {
      return // container not found
    }

    const numberOfTabs = 20

    for (let i = 0; i < numberOfTabs; i++) {
      const tab = createTabElement()
      setRandomStartPosition(tab)
      setRandomSpeed(tab)
      container.appendChild(tab)
    }
  }, []) // Empty dependency array means this useEffect runs once on mount

  const createTabElement = () => {
    const tab = document.createElement('div')
    tab.classList.add('falling-tab')
    const img = document.createElement('img')
    img.src = '/images/solana-logo_new.png' // Adjusted path here
    img.alt = 'DRUGZ Tab'
    img.style.width = '100px' // Set your desired width
    img.style.height = '100px'
    tab.appendChild(img)
    return tab
  }

  const setRandomStartPosition = (tab) => {
    const tabWidth = 80 // Width of the tab
    const randomLeftPosition = Math.random() * (window.innerWidth - tabWidth)
    tab.style.left = `${randomLeftPosition}px`
    tab.style.top = `-100px` // Start from above the viewport
  }

  const setRandomSpeed = (tab) => {
    const fallDuration = '6s' // Set a fixed fall duration
    const randomRotateDuration = Math.random() * 5 + 5 + 's' // Random rotate duration between 5 to 10 seconds

    const randomDelay = Math.random() * 5 + 's' // This will delay the start of the animation by up to 5 seconds

    tab.style.animationDuration = `${fallDuration}, ${randomRotateDuration}`
    tab.style.animationDelay = `${randomDelay}, 0s` // No delay for rotation, only for fall
  }

  return <div ref={containerRef} className='falling-tabs-container'></div>
}

export default Falling
