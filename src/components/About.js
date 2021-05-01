import React, { useEffect, useState } from 'react'
import { useSpring, useTrail, animated } from 'react-spring'
import { useInView } from 'react-intersection-observer'
import './css/about.css'

export default function About(props) {

  const { page } = props

  const [visible, setVisible] = useState(false)

  const { ref, inView, entry } = useInView({
    threshold: 0.8
  })

  useEffect(() => {
    if (inView) {
      setVisible(true)
      props.parentCallBack(1)
      document.title = "About | Luke Sutor"
    } else if (page === 0) {
      setVisible(false)
    }
  }, [inView, page])

  const headerTransition = useSpring({
    config: { mass: 1, tension: 20, friction: 10 },
    opacity: visible ? 1 : 0,
    transform: visible ? 'translate3d(0, 0, 0)' : 'translate3d(0, 25px, 0)'
  })

  const aboutTransition = useSpring({
    config: { mass: 1, tension: 20, friction: 10 },
    opacity: visible ? 1 : 0,
    transform: visible ? 'translate3d(0, 0, 0)' : 'translate3d(0, 25px, 0)',
    backgroundColor: '#1a1a1a',
    delay: 150
  })

  // HTML saved in an array to use for the Trail transition on page scrolls
  const languagesHTML = [
    <code className="py-1 px-1 md:px-2 rounded-md w-min" style={{ backgroundColor: '#200dd8' }}>Javascript</code>,
    <code className="bg-blue-600 py-1 px-1 md:px-2 rounded-md w-min">HTML</code>,
    <code className="py-1 px-1 md:px-2 rounded-md w-min" style={{ backgroundColor: '#9039FF' }}>CSS</code>,
    <code className="py-1 px-1 md:px-2 rounded-md w-min" style={{ backgroundColor: '#F147F0' }}>React</code>,
    <code className="py-1 px-1 md:px-2 rounded-md w-min" style={{ backgroundColor: '#FF6E6B' }}>Java</code>,
    <code className="py-1 px-1 md:px-2 rounded-md w-min" style={{ backgroundColor: '#FF9F5A' }}>Python</code>
  ]

  // Trail used for languages listed under paragraph
  const [trail, set] = useTrail(languagesHTML.length, () => ({ transform: 'scale(0)' }))

  // Update trail if in view
  if (visible) {
    set({ transform: 'scale(1)', delay: 350 })
  } else {
    set({ transform: 'scale(0)' })
  }


  return (
    <>
      <div ref={ref} className="w-screen h-full">
        <div className="flex flex-row w-full h-full pt-20 md:pt-32 pb-20" style={{ backgroundColor: '#101010' }}>
          <div className="flex flex-col w-full md:w-2/3 lg:w-1/2 mx-auto my-auto">
            <animated.p style={headerTransition} className="mb-8 ml-10 md:ml-6 text-2xl md:text-4xl lg:text-5xl text-white font-semibold whitespace-nowrap">I build
          <span className="text-blue-600"> websites</span> and <br /><span className="text-blue-600">software solutions</span>.</animated.p>
            <animated.div style={aboutTransition} className="rounded-lg mx-4 md:mx-0">
              <animated.p className="my-4 mx-6 text-base md:text-xl text-gray-200 font-light">Hey there! I'm Luke Sutor, a 17 year-old
              junior at Suncoast Community High School in Palm Beach County, Florida.
              I started programming when I enrolled in the CS program at my school, and have been creating projects ever since.
            When I'm not programming I enjoy going to the gym, shooting hoops, and playing my Fender Strat.</animated.p>
            </animated.div>
            <div className="flex flex-row justify-around mt-4 text-xs md:text-sm lg:text-base" >
              {trail.map((props, i) => <animated.div key={i} style={props} >{languagesHTML[i]}</animated.div>)}
            </div>
          </div>
        </div>
      </div>
      <div className="circle-text-container">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" className="circle-text-SVG">
          <title>Skills</title>
          <defs>
            <path id="textcircle"
              d="M250,400a150,150 0 0,1 0,-300a150,150 0 0,1 0,300Z"
              transform="rotate(12,250,250)" />
          </defs>
          <rect width="100%" height="100%" fill="none" />
          <text className="circle-text">
            <textPath href="#textcircle"
              aria-label="All for One &amp; One for All"
              textLength="942">script React HTML CSS Python Java</textPath>
          </text>
        </svg>
        <p className="SVG-center-text">Skills</p>
      </div>
    </>
  );
}