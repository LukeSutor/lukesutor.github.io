import React, { useEffect, useState } from 'react'
import { useSpring, useTransition, animated } from 'react-spring'
import { useInView } from 'react-intersection-observer'

function About(props) {

  const { page } = props

  const [visible, setVisible] = useState(false)

  const [animateProps, set] = useSpring(() => ({ xy: [0, 0], config: { mass: 10, tension: 550, friction: 140 } }))

  const { ref, inView, entry } = useInView({
    threshold: 0.51
  })

  useEffect(() => {
    if (inView) {
      setVisible(true)
      props.parentCallBack(1)
    } else if (page === 0) {
      setVisible(false)
    }
  }, [inView, page])

  const aboutTransition = useTransition(visible, null, {
    config: { mass: 1, tension: 20, friction: 10 },
    from: { opacity: 0, transform: 'translate3d(10%, 0, 0)' },
    enter: { opacity: 1, transform: 'translate3d(0, 0, 0)' },
    leave: { position: 'absolute', opacity: 0, transform: 'translate3d(0, -100%, 0)' }
  })

  const wordTransition = useTransition(visible, null, {
    config: { duration: 1500 },
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0, transform: 'translate3d(0, -100%, 0)' }
  })

  return (
    <div ref={ref} className="w-screen h-full">
      <div className="flex flex-row w-full h-full my-64">
        <div className="flex flex-col w-1/2 mx-auto my-auto">
          <p className="mb-6 ml-4 text-4xl font-semibold">I build
          <span className="text-blue-600"> websites</span> and <span className="text-blue-600">software solutions</span>.</p>
          <div className="rounded-lg" style={{ backgroundColor: '#1D1D1D' }}>
            <p className="my-2 mx-4 text-2xl text-gray-300 font-light">Hey there! I'm Luke Sutor, a 17 year-old
            junior at Suncoast Community High School in Palm Beach, Florida.
            I started programming when I enrolled in the CS program at my school, and have been creating projects ever since.
            When I'm not programming I enjoy going to the gym, shooting hoops, and playing my Fender Strat.</p>
          </div>
          <div className="flex flex-row justify-around mt-4 text-sm" style={{ fontFamily: 'Consolas' }}>
            <div className="py-1 px-2 rounded-md" style={{ backgroundColor: '#200dd8' }}>
              <p>Javascript</p>
            </div>
            <div className="bg-blue-600 py-1 px-2 rounded-md">
              <p>HTML</p>
            </div>
            <div className="py-1 px-2 rounded-md" style={{ backgroundColor: '#9039FF' }}>
              <p>CSS</p>
            </div>
            <div className="py-1 px-2 rounded-md" style={{ backgroundColor: '#F147F0' }}>
              <p>React</p>
            </div>
            <div className="py-1 px-2 rounded-md" style={{ backgroundColor: '#FF6E6B' }}>
              <p>Java</p>
            </div>
            <div className="py-1 px-2 rounded-md" style={{ backgroundColor: '#FF9F5A' }}>
              <p>Python</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About