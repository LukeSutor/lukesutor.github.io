import React, { useEffect, useState } from 'react'
import { useSpring, animated } from 'react-spring'
import { useInView } from 'react-intersection-observer'
import statbreak from './images/statbreak.png'
import Github from './images/Github'
import WWW from './images/WWW'

const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 250, 1.03]
const transImage = (x, y, s) => `perspective(1000px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

function Statbreak(props) {

  const { page } = props

  const [visible, setVisible] = useState(false)

  const { ref, inView, entry } = useInView({
    threshold: 0.6
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
    transform: visible ? 'translate3d(0, 0, 0)' : 'translate3d(-50%, 0, 0)'
  })

  const descriptionTransition = useSpring({
    config: { mass: 1, tension: 20, friction: 10 },
    delay: 250,
    opacity: visible ? 1 : 0,
    transform: visible ? 'translate3d(0, 0, 0)' : 'translate3d(-50%, 0, 0)'
  })

  const imageTransition = useSpring({
    config: { mass: 1, tension: 20, friction: 10 },
    delay: 250,
    opacity: visible ? 1 : 0,
    transform: visible ? 'translate3d(0, 0, 0)' : 'translate3d(50%, 0, 0)'
  })

  const linkTransition = useSpring({
    config: { mass: 1, tension: 20, friction: 7 },
    delay: 750,
    transform: visible ? 'scale(1)' : 'scale(0)'
  })

  const [hoverAnimation, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }))

  return (
    <div ref={ref} className="w-full h-full">
      <div className="flex flex-row justify-evenly w-full h-full mx-8">
        <div className="flex flex-col justify-between w-min my-auto" style={{ height: '60vh' }}>
          <animated.div style={titleTransition} className="flex flex-row text-6xl font-semibold">
            <p>Statbreak</p>
            <p className="ml-8 animate-bounce">🏀</p>
          </animated.div>
          <animated.p style={descriptionTransition} className="text-gray-400 text-lg">Statbreak is a social networking site for players to share basketball stats from their best games.
            Statbreak was created using the MERN stack, tailwindcss, and react-spring for animations.</animated.p>
          <div className="flex flex-row justify-around text-2xl text-black font-semibold">
            <animated.a href="https://statbreak.herokuapp.com" target="_blank" style={linkTransition} className="flex flex-row bg-white px-4 py-2 rounded-md hover:bg-gray-200">
              <WWW />
              <p className="pl-4">Site</p>
            </animated.a>
            <animated.a href="https://github.com/LukeSutor/React-Basketball-Site" target="_blank" style={linkTransition} className="flex flex-row bg-white px-4 py-2 rounded-md hover:bg-gray-200">
              <Github />
              <p className="pl-4">Github</p>
            </animated.a>
          </div>
        </div>
        <div className="flex flex-col h-full mx-8">
          <animated.a href="https://statbreak.herokuapp.com" target="_blank" onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
            onMouseLeave={() => set({ xys: [0, 0, 1] })}
            className="my-auto" style={{ imageTransition, transform: hoverAnimation.xys.interpolate(transImage) }}>
            <animated.img src={statbreak} className="mx-auto my-auto rounded-xl" style={{ maxHeight: '65vh' }} />
          </animated.a>
        </div>
      </div>
    </div>
  );
}

export default Statbreak