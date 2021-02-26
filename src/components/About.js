import React from 'react'
import { useSpring, animated } from 'react-spring'
import { ParallaxLayer } from 'react-spring/renderprops-addons'

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2]
const transAbout = (x, y) => `translate3d(${x / 75}px,${y / 75}px, 0)`
const transBasketball = (x, y) => `translate3d(${-x / 40}px,${y / 60}px,0)`
const transCoding = (x, y) => `translate3d(${x / 40}px,${-y / 60}px,0)`
const transWeightlifting = (x, y) => `translate3d(${x / 50}px,${-y / 40}px,0)`
const transWebDesign = (x, y) => `translate3d(${-x / 32}px,${y / 50}px,0)`
const transGuitar = (x, y) => `translate3d(${x / 50}px,${y / 40}px,0)`
const transReact = (x, y) => `translate3d(${-x / 80}px,${y / 32}px,0)`



function About() {

  const [props, set] = useSpring(() => ({ xy: [0, 0], config: { mass: 10, tension: 550, friction: 140 } }))

  return (
    <div>
      <div className="flex w-full h-full" onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}>
        <animated.div className="flex flex-col w-2/3 mx-auto my-auto" style={{ transform: props.xy.interpolate(transAbout) }}>
          <p className="text-6xl font-semibold mb-8">About</p>
          <p className="text-gray-300">Hey there! I'm Luke Sutor, a student currently attending Suncoast Community High School. When I'm not
        coding I enjoy going to the gym,shooting hoops, and playing my Fender Strat.</p>
        </animated.div>
      </div>

      {/* Floating words */}
      <animated.div className="absolute w-min h-min"
        style={{ color: '#fa8320', marginLeft: '87%', top: '40%', transform: props.xy.interpolate(transBasketball) }}>
        <p style={{ transform: 'rotate(30deg)' }}>&lt;Basketball&gt;</p>
          </animated.div>

{/* 
      <animated.p className="absolute w-min h-min"
        style={{ color: '#fa8320', marginLeft: '87%', top: '40%', transform: props.xy.interpolate(transBasketball) }}>&lt;Basketball&gt;</animated.p> */}

      <animated.p className="absolute w-min h-min"
        style={{ color: '#149414', marginLeft: '8%', top: '30%', transform: props.xy.interpolate(transCoding) }}>&lt;Coding&gt;</animated.p>

      <animated.p className="absolute text-gray-400 w-min h-min"
        style={{ marginLeft: '70%', top: '80%', transform: props.xy.interpolate(transWeightlifting) }}>&lt;Weightlifting&gt;</animated.p>

      <animated.p className="absolute text-red-500 w-min h-min"
        style={{ marginLeft: '25%', top: '75%', transform: props.xy.interpolate(transWebDesign) }}>&lt;WebDesign&gt;</animated.p>

      <animated.p className="absolute text-pink-500 w-min h-min"
        style={{ marginLeft: '60%', top: '25%', transform: props.xy.interpolate(transGuitar) }}>&lt;Guitar&gt;</animated.p>

      <animated.p className="absolute w-min h-min"
        style={{ color: '#00d8ff', marginLeft: '40%', top: '22%', transform: props.xy.interpolate(transReact) }}>&lt;React&gt;</animated.p>

    </div>
  );
}

export default About