import React, { useState } from 'react'
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons'
import Home from './Home'
import AboutWord from './AboutWord'
import About from './About'
import Projects from './Projects'
import Statbreak from './Statbreak'

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
    setPage(3)
    parallax.scrollTo(3)
  }

  function handleCallback(page) {
    setPage(page)
  }

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

      <Parallax pages={5} scrolling={true} ref={ref => parallax = ref}>

        {/* Layer 1 // Home */}
        <ParallaxLayer offset={0} speed={0.1}>
          <div className="flex w-full h-full">
            <Home parentCallBack={handleCallback} page1={page1} page2={page2}/>
          </div>
        </ParallaxLayer>

        {/* Layer 2 // About */}
        <ParallaxLayer offset={1} speed={0.2}>
          <div className="flex w-full h-full">
            <AboutWord parentCallBack={handleCallback} />
          </div>
        </ParallaxLayer>

        {/* Layer 3 // About Paragraph */}
        <ParallaxLayer offset={2} speed={0.1}>
          <div className="flex w-full h-full">
            <About parentCallBack={handleCallback} page={page} />
          </div>
        </ParallaxLayer>

        {/* Layer 4 // Projects */}
        <ParallaxLayer offset={3} speed={0.2}>
          <div className="flex w-full h-full">
            <Projects parentCallBack={handleCallback} />
          </div>
        </ParallaxLayer>

        {/* Layer 5 // Statbreak */}
        <ParallaxLayer offset={4} speed={0.1}>
          <div className="flex w-full h-full">
            <Statbreak parentCallBack={handleCallback} page={page} />
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