import React, { useEffect, useState } from 'react'
import { useTransition, animated } from 'react-spring'
import Home from './Home'
import AboutWord from './AboutWord'
import About from './About'
import ProjectsWord from './ProjectsWord'
import Statbreak from './Statbreak'
import Footer from './Footer'

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

  const pageCheck = page

  useEffect(() => {
    if (page < 1) {

    }
  }, [page])

  // Below transitions seem very inefficient, must be a better way
  const from = { opacity: 0, transform: 'translate3d(30px, 0, 0)' }
  const enter = { opacity: 1, transform: 'translate3d(0, 0, 0)' }
  const leave = { opacity: 0, transform: 'translate3d(-30px, 0, 0)' }

  const homeTransition = useTransition(page === 0, null, {
    config: { mass: 1, tension: 20, friction: 8 },
    from: from,
    enter: enter,
    leave: leave
  })

  const aboutTransition = useTransition(page === 1, null, {
    config: { mass: 1, tension: 20, friction: 8 },
    from: from,
    enter: enter,
    leave: leave
  })

  const projectsTransition = useTransition(page === 2, null, {
    config: { mass: 1, tension: 20, friction: 8 },
    from: from,
    enter: enter,
    leave: leave
  })

  return (
    <div className="text-white overflow-x-hidden" >

      {/* Top right indicator for which section you're on */}
      <div className="text-base md:text-lg lg:text-xl font-semibold tracking-wider" style={{ writingMode: 'vertical-rl' }}>
        {homeTransition.map(({ item, key, props }) =>
          item &&
          <animated.p key={key} style={props} className="fixed top-4 right-4 z-10">HOME</animated.p>
        )}
        {aboutTransition.map(({ item, key, props }) =>
          item &&
          <animated.p key={key} style={props} className="fixed top-4 right-4 z-10">ABOUT</animated.p>
        )}
        {projectsTransition.map(({ item, key, props }) =>
          item &&
          <animated.p key={key} style={props} className="fixed top-4 right-4 z-10">PROJECTS</animated.p>
        )}
      </div>

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

      {/* Layer 6 // Footer */}
      <Footer />

      <svg xmlns="//www.w3.org/2000/svg" version="1.1" className="svg-filters" style={{ display: 'none' }}>
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