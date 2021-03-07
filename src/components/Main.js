import React, { useEffect, useState } from 'react'
import Home from './Home'
import AboutWord from './AboutWord'
import About from './About'
import ProjectsWord from './ProjectsWord'
import Statbreak from './Statbreak'

function Main() {

  const [page, setPage] = useState(0)

  const [scroll, setScroll] = useState(0)

  useEffect(() => {
    document.addEventListener('scroll', function () {
      setScroll(-window.scrollY)
    })

    return (
      document.removeEventListener('scroll', function () { })
    )
  }, [])

  function handleCallback(page) {
    setPage(page)
  }

  return (
    <div className="text-white w-screen">

      {/* Layer 1 // Home */}
      <Home parentCallBack={handleCallback} />

      {/* Layer 2 // About */}
      <AboutWord parentCallBack={handleCallback} scroll={scroll} />

      {/* Layer 3 // About Paragraph */}
      <About parentCallBack={handleCallback} page={page} />

      {/* Layer 4 // Projects */}
      <ProjectsWord parentCallBack={handleCallback} scroll={scroll} />

      {/* Layer 5 // Statbreak */}
      <Statbreak parentCallBack={handleCallback} page={page} />

      <svg xmlns="//www.w3.org/2000/svg" version="1.1" class="svg-filters" style={{ display: 'none' }}>
        <defs>
          <filter id="marker-shape">
            <feTurbulence type="fractalNoise" baseFrequency="0 0.10" numOctaves="1" result="warp" />
            <feDisplacementMap xChannelSelector="R" yChannelSelector="G" scale="30" in="SourceGraphic" in2="warp" />
          </filter>
        </defs>
      </svg>
    </div>
  );
}

export default Main