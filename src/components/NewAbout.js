import React, { useEffect, useState } from 'react'
import { useSpring, useTrail, animated } from 'react-spring'
import { useInView } from 'react-intersection-observer'
import './css/about.css'

export default function NewAbout(props) {

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


  return (
    <div className="py-16" style={{ backgroundColor: '#101010' }}>
      <p className="pl-8 md:pl-16 pb-4 text-3xl font-semibold">Hey There!</p>

      {/* Paragraph and circle grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-1 px-8 lg:px-16 ">
        <div className="flex flex-col justify-around">
          <p className="text-2xl text-gray-400">
            I'm Luke Sutor, a 17 year-old junior at Suncoast Community High School in Palm Beach County, Florida.</p>
          <p className="py-6 md:py-0 text-2xl text-gray-400">
            I began programming when I enrolled in the CS program at my school, and have been creating projects ever since.</p>
          <p className="text-2xl text-gray-400">
            When I'm not programming I enjoy going to the gym, shooting hoops, and playing my Fender Strat.</p>
        </div>


        <div className="circle-text-container hidden md:flex flex-col">
          <p className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl text-center">My<br />Skills</p>
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
                textLength="942">script React HTML CSS Python Node Java</textPath>
            </text>
          </svg>
        </div>
      </div>
    </div>
  )
}
