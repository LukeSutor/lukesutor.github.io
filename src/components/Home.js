import React, { useEffect } from 'react'
import { useTransition, animated } from 'react-spring'
import { useInView } from 'react-intersection-observer'


function Home(props) {

  const transition = useTransition(true, null, {
    config: { mass: 1, tension: 10, friction: 5 },
    from: { opacity: 0, transform: 'translate3d(0, 30px, 0)' },
    enter: { opacity: 1, transform: 'translate3d(0, 0, 0)' }
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
    <div ref={ref} className="w-full h-full">
      <div className="flex flex-col w-full h-full">
        {transition.map(({ item, key, props }) =>
          item &&
          <animated.div key={key} style={props} className="flex flex-col h-min w-min text-8xl font-semibold my-auto mx-auto">
            <p className="whitespace-nowrap inline-flex">Hello 👋 I'm</p>
            <p id="realistic-marker-highlight" className="relative mx-auto w-min whitespace-nowrap transform hover:scale-105 ease-in-out duration-300">Luke Sutor.</p>
          </animated.div>
        )}
      </div>
      <div class="mouse" >
        <p className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs text-gray-600 tracking-widest">Scroll</p>
      </div>
    </div>
  );
}

export default Home