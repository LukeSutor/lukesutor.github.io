import React from 'react'
import Navbar from './Navbar'
import { useTransition, animated } from 'react-spring'
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons'

function Home(props) {

  const { history } = props

  const transition = useTransition(true, null, {
    config: { mass: 1, tension: 10, friction: 5 },
    from: { opacity: 0, transform: 'translate3d(0, 30px, 0)' },
    enter: { opacity: 1, transform: 'translate3d(0, 0, 0)' }
  })

  return (
    <div className="text-white">
      <Navbar />
      <div className="flex justify-evenly w-1/2">
        {transition.map(({ item, key, props }) =>
          item &&
          <animated.div style={props} key={key} className="flex flex-col gap-10 mx-auto mt-12">
            <div>
              <p className="text-7xl whitespace-nowrap inline-flex">Hello 👋 I'm</p>
              <p id="realistic-marker-highlight" className="relative w-min text-7xl whitespace-nowrap transform hover:scale-105 ease-in-out duration-300">Luke Sutor</p>
            </div>
            <div>
              <p className="text-2xl text-gray-400">Software Engineer, Athlete, Guitarist</p>
            </div>
            <div className="mx-auto">
              <button onClick={() => history.push('/projects')}
                className="px-4 py-2 text-xl font-semibold bg-blue-700 hover:bg-blue-900 rounded-md focus:outline-none">View My Work</button>
            </div>
          </animated.div>
        )}
      </div>

      {/* SVG for highlight effect */}
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

export default Home