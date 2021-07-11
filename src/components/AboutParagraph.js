import React, { useEffect, useState } from 'react'
import { useSpring, useTrail, animated } from 'react-spring'
import { useInView } from 'react-intersection-observer'

export default function AboutParagraph(props) {

  const { page } = props

  const [visible, setVisible] = useState(false)

  const { ref, inView, entry } = useInView({
    threshold: 0.5
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

  const aboutParagraphs = [
    <p>I'm Luke Sutor, a 17 year-old junior at Suncoast Community High School in Palm Beach County, Florida.</p>,
    <p className="py-6">I began programming when I enrolled in the CS program at my school, and have been creating projects ever since.</p>,
    <p>When I'm not programming I enjoy going to the gym, shooting hoops, and playing my Fender Strat.</p>
  ]

  // Trail for skills
  const [trail, setTrail] = useTrail(aboutParagraphs.length, () => ({ opacity: 0, transform: 'translate3d(50%, 0, 0)' }))

  // Update trail if in view
  if (visible) {
    setTrail({ opacity: 1, transform: 'translate3d(0, 0, 0)', delay: 350 })
  } else {
    setTrail({ opacity: 0, transform: 'translate3d(50%, 0, 0)' })
  }

  const headerTransition = useSpring({
    config: { mass: 1, tension: 20, friction: 10 },
    opacity: visible ? 1 : 0,
    transform: visible ? 'translate3d(0, 0, 0)' : 'translate3d(0, 25px, 0)'
  })

  const subheaderTransition = useSpring({
    config: { mass: 1, tension: 20, friction: 10 },
    delay: 350,
    opacity: visible ? 1 : 0,
    transform: visible ? 'translate3d(0, 0, 0)' : 'translate3d(0, 25px, 0)'
  })


  return (
    <div ref={ref}>
      <animated.p style={headerTransition} className="mb-16 md:mb-24 text-4xl md:text-6xl lg:text-7xl text-white font-semibold whitespace-nowrap">I build
          <em className="text-gradient"> websites</em> and <br /><em className="text-gradient">software solutions</em>.</animated.p>

      <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-1">
        <animated.p style={subheaderTransition} className="pb-6 md:pb-8 text-3xl md:text-4xl font-semibold">Hey There!</animated.p>

        <div className="flex flex-col text-base md:text-xl lg:text-2xl text-gray-400" >
          {trail.map((props, i) => <animated.div key={i} style={props} >{aboutParagraphs[i]}</animated.div>)}
        </div>
      </div>
    </div>
  )
}
