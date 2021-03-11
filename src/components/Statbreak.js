import React, { useEffect, useState } from 'react'
import { useSpring, useTransition, animated } from 'react-spring'
import { useInView } from 'react-intersection-observer'
import statbreak from './images/statbreak.png'
import Github from './images/Github'
import Link from './images/Link'

const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 250]
const transImage = (x, y) => `perspective(1000px) rotateX(${x}deg) rotateY(${y}deg)`

function Statbreak(props) {

  const { page } = props

  const [visible, setVisible] = useState(false)

  const { ref, inView, entry } = useInView({
    threshold: 0.8
  })

  useEffect(() => {
    if (inView) {
      setVisible(true)
      props.parentCallBack(2)
    } else if (page <= 1) {
      setVisible(false)
    }
  }, [inView, page])

  const titleTransition = useSpring({
    config: { mass: 1, tension: 20, friction: 10 },
    opacity: visible ? 1 : 0,
    transform: visible ? 'translate3d(0, 0, 0)' : 'translate3d(0, 25px, 0)',
    delay: 100
  })

  const descriptionTransition = useSpring({
    config: { mass: 1, tension: 20, friction: 10 },
    opacity: visible ? 1 : 0,
    transform: visible ? 'translate3d(0, 0, 0)' : 'translate3d(0, 25px, 0)',
    delay: 250
  })

  const linkTransition = useSpring({
    config: { mass: 1, tension: 10, friction: 4 },
    transform: visible ? 'scale(1)' : 'scale(0)',
    delay: 500
  })

  const imageTransition = useTransition(visible, null, {
    config: { mass: 1, tension: 20, friction: 7 },
    from: { clipPath: 'polygon(50% 0, 50% 0, 50% 100%, 50% 100%)' },
    enter: [
      { clipPath: 'polygon(50% 0, 50% 0, 50% 100%, 50% 100%)' },
      { clipPath: 'polygon(100% 0, 0 0, 0 100%, 100% 100%)' }
    ],
    leave: { opacity: 0 }
  })

  const [hoverAnimation, set] = useSpring(() => ({ xy: [0, 0], config: { mass: 5, tension: 350, friction: 40 } }))

  return (
    <div ref={ref} className="mt-12 mb-40">
      <div className="flex flex-col md:flex-row justify-evenly w-full h-full px-4 md:px-8">
        <div className="flex flex-col justify-center w-3/4 md:w-min mx-auto my-auto">
          <animated.div style={titleTransition} className="flex flex-row mb-6 text-4xl md:text-5xl lg:text-6xl font-semibold">
            <p>Statbreak</p>
            <p className="ml-8 animate-bounce">🏀</p>
          </animated.div>
          <animated.p style={descriptionTransition} className="mb-8 md:mb-12 text-gray-400 text-sm md:text-base lg:text-lg font-light">Statbreak is a social networking site for basketball players to share stats from their best games.
            Statbreak was created using the MERN stack, tailwindcss, and react-spring for animations.</animated.p>
          <div className="flex flex-row justify-evenly md:justify-around mb-12 md:mb-0 text-lg md:text-xl lg:text-2xl text-black font-semibold">
            <animated.a href="https://statbreak.herokuapp.com" target="_blank" style={linkTransition} className="flex flex-row bg-white px-2 md:px-3 lg:px-4 py-1 lg:py-2 rounded-md hover:bg-gray-200 w-min" >
              <div className="h-4 md:h-5 lg:h-6 w-4 md:w-5 lg:w-6 mx-auto my-auto"><Link /></div>
              <p className="pl-2 md:pl-4">Site</p>
            </animated.a>
            <animated.a href="https://github.com/LukeSutor/React-Basketball-Site" target="_blank" style={linkTransition} className="flex flex-row bg-white my-auto px-2 md:px-3 lg:px-4 py-1 lg:py-2 rounded-md hover:bg-gray-200 w-min">
            <div className="h-4 md:h-5 lg:h-7 w-4 md:w-5 lg:w-7 mx-auto my-auto"><Github /></div>
              <p className="pl-2 md:pl-3 lg:pl-4">Github</p>
            </animated.a>
          </div>
        </div>
        <div className="flex h-full md:mx-8 my-auto">
          {imageTransition.map(({ item, key, props }) =>
            item &&
            <animated.a key={key} style={props} id="image-background" href="https://statbreak.herokuapp.com" target="_blank"
              className="my-auto">
              <animated.img onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}
                onMouseLeave={() => set({ xy: [0, 0] })} src={statbreak}
                className="mb-1 mr-1"
                style={{ maxHeight: '65vh', transform: hoverAnimation.xy.interpolate(transImage) }} />
            </animated.a>
          )}
        </div>
      </div>
    </div>
  );
}

export default Statbreak