import React, { useEffect, useState } from 'react'
import { useSpring, useTransition, animated } from 'react-spring'
import { useInView } from 'react-intersection-observer'


const calcMouse = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2]
const transBasketball = (x, y) => `translate3d(${-x / 40}px,${y / 60}px,0)`
const transCoding = (x, y) => `translate3d(${x / 40}px,${-y / 60}px,0)`
const transWeightlifting = (x, y) => `translate3d(${x / 50}px,${-y / 40}px,0)`
const transWebDesign = (x, y) => `translate3d(${-x / 32}px,${y / 50}px,0)`
const transGuitar = (x, y) => `translate3d(${x / 50}px,${y / 40}px,0)`
const transReact = (x, y) => `translate3d(${-x / 80}px,${y / 32}px,0)`


function About(props) {

  const [visible, setVisible] = useState(false)

  const [animateProps, set] = useSpring(() => ({ xy: [0, 0], config: { mass: 10, tension: 550, friction: 140 } }))

  const { ref, inView, entry } = useInView({
    threshold: 0.6
  })

  useEffect(() => {
    if (inView) {
      setVisible(true)
      props.parentCallBack(1)
    }
  }, [inView])

  const aboutTransition = useTransition(visible, null, {
    config: { mass: 1, tension: 20, friction: 10 },
    from: { opacity: 0, transform: 'translate3d(10%, 0, 0)' },
    enter: { opacity: 1, transform: 'translate3d(0, 0, 0)' }
  })

  const wordTransition = useTransition(visible, null, {
    config: { duration: 1500 },
    from: { opacity: 0 },
    enter: { opacity: 1 }
  })

  return (
    <div ref={ref} className="w-full h-full">
      <div className="flex w-full h-full"
        onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calcMouse(x, y) })}>
        <div className="flex flex-col w-2/3 mx-auto my-auto">
          {aboutTransition.map(({ item, key, props }) =>
            item &&
            <animated.p key={key} style={props} className="text-lg text-gray-300">Hey there! I'm Luke Sutor, a 17 year-old junior at Suncoast Community High School in Riviera Beach, Florida.
            I got involved in coding when I enrolled in the CS program at my school, and have been working on projects ever since.
            The technologies I work with are Javascript (React), Python, Java, and SQL.
            When I'm not coding I enjoy going to the gym, shooting hoops, and playing my Fender Strat.</animated.p>
          )}
        </div>
      </div>

      {/* Floating words */}
      {wordTransition.map(({ item, key, props }) =>
        item &&
        <animated.div style={props} key={key}>
          <animated.div className="absolute w-min h-min"
            style={{ color: '#fa8320', marginLeft: '87%', top: '40%', transform: animateProps.xy.interpolate(transBasketball) }}>
            <p style={{ transform: 'rotate(20deg)' }}>.basketball()</p>
          </animated.div>

          <animated.div className="absolute w-min h-min"
            style={{ color: '#149414', marginLeft: '8%', top: '30%', transform: animateProps.xy.interpolate(transCoding) }}>
            <p style={{ transform: 'rotate(10deg)' }}>coding;</p>
          </animated.div>

          <animated.div className="absolute text-gray-400 w-min h-min"
            style={{ marginLeft: '70%', top: '80%', transform: animateProps.xy.interpolate(transWeightlifting) }}>
            <p style={{ transform: 'rotate(-10deg)' }}>&lt;weightlifting&gt;</p>
          </animated.div>

          <animated.div className="absolute text-red-500 w-min h-min"
            style={{ marginLeft: '25%', top: '75%', transform: animateProps.xy.interpolate(transWebDesign) }}>
            <p style={{ transform: 'rotate(18deg)' }}>.webDesign()</p>
          </animated.div>

          <animated.div className="absolute text-pink-500 w-min h-min"
            style={{ marginLeft: '60%', top: '20%', transform: animateProps.xy.interpolate(transGuitar) }}>
            <p style={{ transform: 'rotate(-20deg)' }}>&lt;guitar&gt;</p>
          </animated.div>

          <animated.div className="absolute w-min h-min whitespace-nowrap"
            style={{ color: '#00d8ff', marginLeft: '40%', top: '18%', transform: animateProps.xy.interpolate(transReact) }}>
            <p style={{ transform: 'rotate(10deg)' }}>&#123; react &#125;</p>
          </animated.div>
        </animated.div>
      )}
    </div>
  );
}

export default About