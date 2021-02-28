import React, { useState } from 'react'
import { useTransition, animated } from 'react-spring'
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons'
import { useInView } from 'react-intersection-observer'
import Home from './Home'
import About from './About'
import ArrowSVG from './images/ArrowSVG'

function Main() {

  const [page, setPage] = useState(0)

  let parallax

  function page0() {
    setPage(0)
    parallax.scrollTo(0)
  }

  function page1() {
    setPage(1)
    parallax.scrollTo(1)
  }

  function page2() {
    setPage(2)
    parallax.scrollTo(2)
  }

  function handleCallback(page) {
    setPage(page)
  }

  const transition = useTransition(true, null, {
    config: { mass: 1, tension: 10, friction: 5 },
    from: { opacity: 0, transform: 'translate3d(0, 30px, 0)' },
    enter: { opacity: 1, transform: 'translate3d(0, 0, 0)' }
  })

  return (
    <div className="text-white">

      {/* Side navigation */}
      <div className="absolute z-10 top-1/2 ml-1/2 flex h-8 ml-4 -mt-6 flex-row transform-origin-top-left -translate-x-1/2 transform rotate-90 text-center" style={{ width: '100vh' }}>
        <button className={`relative w-full text-xs text-center tracking-widest focus:outline-none
            ${page === 0 ? "text-white" : "text-gray-500"}`}
          onClick={page0}>Home
            <div class={`${page === 0 ? "underline" : ""}`} /></button>
        <button className={`relative w-full text-xs text-center tracking-widest focus:outline-none
            ${page === 1 ? "text-white" : "text-gray-500"}`}
          onClick={page1}>About
            <div class={`${page === 1 ? "underline" : ""}`} /></button>
        <button className={`relative w-full text-xs text-center tracking-widest focus:outline-none
            ${page === 2 ? "text-white" : "text-gray-500"}`}
          onClick={page2}>Projects
            <div class={`${page === 2 ? "underline" : ""}`} /></button>
      </div>

      <Parallax pages={3} scrolling={true} ref={ref => parallax = ref}>

        <ParallaxLayer offset={1} speed={-0.2}>
          <div className="flex w-full h-full">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-min h-min leading-none" style={{ zIndex: -1 }}>
              <animated.p style={{ fontSize: '65vh', fontFamily: 'Century Gothic', color: '#0a0a0a' }}>ABOUT</animated.p>
            </div>
          </div>
        </ParallaxLayer>

        {/* Layer 1 // Home */}
        <ParallaxLayer offset={0} speed={0.1}>
          <div className="flex w-full h-full">
            <Home parentCallBack={handleCallback} />
          </div>
        </ParallaxLayer>

        {/* Layer 2 // About */}
        <ParallaxLayer offset={1} speed={0.1}>
          <div className="flex w-full h-full">
            <About parentCallBack={handleCallback} />
          </div>
        </ParallaxLayer>

        {/* Layer 3 // Statbreak */}
        <ParallaxLayer offset={2} speed={0.1}>
          <div className="flex flex-col h-full">
            <p>Projects</p>
          </div>
        </ParallaxLayer>
      </Parallax>
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