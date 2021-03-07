import React, { useEffect, useState } from 'react'
import { useSpring, animated } from 'react-spring'
import { useInView } from 'react-intersection-observer'
import statbreak from './images/statbreak.png'
import Github from './images/Github'
import WWW from './images/Link'

const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 250, 1.03]
const transImage = (x, y, s) => `perspective(1000px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

function Statbreak(props) {

  const { page } = props

  const [visible, setVisible] = useState(false)

  const { ref, inView, entry } = useInView({
    threshold: 0.51
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

  const linkTransition = useSpring({
    config: { mass: 1, tension: 20, friction: 7 },
    delay: 750,
    transform: visible ? 'scale(1)' : 'scale(0)'
  })

  const [hoverAnimation, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }))

  return (
    <div ref={ref} className="w-full h-screen mt-12">
      <div className="flex flex-row justify-evenly w-full h-full mx-8">
        <div className="flex flex-col justify-between w-min my-auto" style={{ height: '60vh' }}>
          <animated.div style={titleTransition} className="flex flex-row text-6xl font-semibold">
            <p>Statbreak</p>
            <p className="ml-8 animate-bounce">🏀</p>
          </animated.div>
          <animated.p style={descriptionTransition} className="text-gray-400 text-lg font-light">Statbreak is a social networking site for basketball players to share stats from their best games.
            Statbreak was created using the MERN stack, tailwindcss, and react-spring for animations.</animated.p>
          <div className="flex flex-row justify-around text-2xl text-black font-semibold">
            <animated.a href="https://statbreak.herokuapp.com" target="_blank" style={linkTransition} className="flex flex-row bg-white px-4 py-2 rounded-md whitespace-nowrap" >
              <WWW />
              <p className="pl-4">Site</p>
            </animated.a>
            <animated.a href="https://github.com/LukeSutor/React-Basketball-Site" target="_blank" style={linkTransition} className="flex flex-row bg-white my-auto px-4 py-2 rounded-md hover:bg-gray-200">
              <Github />
              <p className="pl-4">Github</p>
            </animated.a>
          </div>
        </div>
        <div className="flex flex-col h-full mx-8">
          <a id="image-background" href="https://statbreak.herokuapp.com" target="_blank"
            className="my-auto">
            <animated.img onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })} 
              onMouseLeave={() => set({ xys: [0, 0, 1] })} src={statbreak} 
              className="mb-1 mr-1" 
              style={{ maxHeight: '65vh', transform: hoverAnimation.xys.interpolate(transImage) }} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Statbreak