import React, { useEffect } from 'react'
import { useTransition, animated } from 'react-spring'
import { useInView } from 'react-intersection-observer'


function Home(props) {

  const homeTransition = useTransition(true, null, {
    config: { mass: 1, tension: 10, friction: 5 },
    from: { opacity: 0, transform: 'translate3d(0, 25%, 0)' },
    enter: { opacity: 1, transform: 'translate3d(0, 0, 0)' }
  })

  const scrollTransition = useTransition(true, null, {
    config: { mass: 1, tension: 20, friction: 10 },
    from: { opacity: 0 },
    enter: { opacity: 1 }
  })

  const { ref, inView, entry } = useInView({
    threshold: 0.6
  })

  useEffect(() => {
    if (inView) {
      props.parentCallBack(0)
    }
  }, [inView])

  return (
    <div ref={ref} className="w-full h-screen">
      <div className="flex flex-col w-full h-full">
        {homeTransition.map(({ item, key, props }) =>
          item &&
          <animated.div key={key} style={props} className="flex flex-col h-min w-min text-6xl md:text-8xl lg:text-9xl font-semibold my-auto mx-auto">
            <p className="whitespace-nowrap inline-flex overflow-y-hidden">Hello 👋 I'm</p>
            <p id="realistic-marker-highlight" className="relative mx-auto w-min whitespace-nowrap transform hover:scale-105 ease-in-out duration-300">Luke Sutor.</p>
          </animated.div>
        )}
      </div>
      {scrollTransition.map(({ item, key, props }) =>
        item &&
        <animated.div key={key} style={props} className="mouse">
          <p className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs text-gray-500 tracking-wide">Scroll</p>
        </animated.div>
      )}
    </div>
  );
}

export default Home