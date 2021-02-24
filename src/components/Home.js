import React, { useEffect, useState } from 'react'
import { useTransition, animated } from 'react-spring'
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons'
import ArrowSVG from './images/ArrowSVG'

function Home() {

  const [page, setPage] = useState(0)

  let prevScroll = window.pageYOffset

  let parallax, horizontalParallax

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    switch (page) {
      case 0:
        parallax.scrollTo(0)
        break;

      case 1:
        parallax.scrollTo(1)
        break;

      case 2:
        parallax.scrollTo(2)
        break;

      default:
        break;
    }
  }, [page])

  console.log("yes")
  function handleScroll() {
    console.log(window.pageYOffset)
    if (window.pageYOffset > 10) {
      console.log("testing")
    }
  }

  const transition = useTransition(true, null, {
    config: { mass: 1, tension: 10, friction: 5 },
    from: { opacity: 0, transform: 'translate3d(0, 30px, 0)' },
    enter: { opacity: 1, transform: 'translate3d(0, 0, 0)' }
  })

  const underlineTransition = useTransition(page, null, {
    from: { opacity: 0 },
    enter: { opacity: 1 }
  })

  return (
    <div className="text-white">
      {/* Side navigation */}
      <div className="absolute z-10 top-1/2 ml-1/2 flex h-8 ml-4 -mt-6 flex-row transform-origin-top-left -translate-x-1/2 transform rotate-90 text-center" style={{ width: '100vh' }}>
        <button className={`relative w-full text-xs text-center tracking-widest focus:outline-none
        ${page === 0 ? "text-white" : "text-gray-500"}`}
          onClick={() => setPage(0)}>Home
          <div class={`${page === 0 ? "underline" : ""}`} /></button>
        <button className={`relative w-full text-xs text-center tracking-widest focus:outline-none
        ${page === 1 ? "text-white" : "text-gray-500"}`}
          onClick={() => setPage(1)}>About
          <div class={`${page === 1 ? "underline" : ""}`} /></button>
        <button className={`relative w-full text-xs text-center tracking-widest focus:outline-none
        ${page === 2 ? "text-white" : "text-gray-500"}`}
          onClick={() => setPage(2)}>Projects
          <div class={`${page === 2 ? "underline" : ""}`} /></button>
      </div>


      <Parallax pages={3} scrolling={false} ref={ref => parallax = ref}>

        {/* Child layers */}
        <ParallaxLayer offset={1.8} factor={2} speed={2}>
          <p className="text-green-500 w-min h-min" style={{ marginLeft: '87%', transform: 'rotate(30deg)' }}>&lt;Basketball&gt;</p>
        </ParallaxLayer>

        <ParallaxLayer offset={1.5} speed={0.5}>
          <p className="text-blue-500 w-min h-min" style={{ marginLeft: '5%', transform: 'rotate(-10deg)' }}>&lt;Coding&gt;</p>
        </ParallaxLayer>

        <ParallaxLayer offset={1.1} speed={1.5}>
          <p className="text-yellow-500 w-min h-min" style={{ marginLeft: '70%', transform: 'rotate(-5deg)' }}>&lt;Weightlifting&gt;</p>
        </ParallaxLayer>

        <ParallaxLayer offset={1.8} speed={2}>
          <p className="text-red-500 w-min h-min" style={{ marginLeft: '30%', transform: 'rotate(-15deg)' }}>&lt;WebDesign&gt;</p>
        </ParallaxLayer>

        <ParallaxLayer offset={1.15} speed={0.9}>
          <p className="text-pink-500 w-min h-min" style={{ marginLeft: '20%', transform: 'rotate(15deg)' }}>&lt;Guitar&gt;</p>
        </ParallaxLayer>


        {/* Layer 1 */}
        <ParallaxLayer offset={0} speed={0.1}>
          <div className="flex flex-col w-full h-full">
            {transition.map(({ item, key, props }) =>
              item &&
              <animated.div key={key} style={props} className="flex flex-col h-min w-min text-8xl font-semibold my-auto mx-auto">
                <p className="whitespace-nowrap inline-flex">Hello 👋 I'm</p>
                <p id="realistic-marker-highlight" className="relative mx-auto w-min whitespace-nowrap transform hover:scale-105 ease-in-out duration-300">Luke Sutor.</p>
              </animated.div>
            )}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 mx-auto p-4 transform hover:scale-125 ease-in-out duration-300" onClick={() => setPage(1)}>
              <ArrowSVG />
            </div>
          </div>
        </ParallaxLayer>

        {/* Layer 2 */}
        <ParallaxLayer offset={1} speed={0.1}>
          <div className="flex w-full h-full bg-gray-900 bg-opacity-50">
            <div className="flex flex-col w-2/3 h-min my-auto mx-auto">
              <p className="text-6xl font-semibold mb-8">About</p>
              <p className="text-gray-300">Hey there! I'm Luke Sutor, a student currently attending Suncoast Community High School. When I'm not coding I enjoy going to the gym,
            shooting hoops, and playing my Fender Strat.</p>
            </div>
            <div className="absolute top-0 left-1/2 -translate-x-1/2 mx-auto p-4 rotate-180 transform hover:scale-125 ease-in-out duration-300" onClick={() => setPage(0)}>
              <ArrowSVG />
            </div>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 mx-auto p-4 transform hover:scale-125 ease-in-out duration-300" onClick={() => setPage(2)}>
              <ArrowSVG />
            </div>
          </div>
        </ParallaxLayer>

        {/* Layer 3 */}
        <ParallaxLayer offset={2} speed={0.1}>
          <div className="flex flex-col w-1/2 h-full">
            <Parallax pages={3} horizontal ref={ref => horizontalParallax = ref}>
              <ParallaxLayer offset={0} factor={0.5} speed={0.1}>
                <p>P1</p>
              </ParallaxLayer>

              <ParallaxLayer offset={1} factor={0.5} speed={0.1}>
                <p>P2</p>
              </ParallaxLayer>

              <ParallaxLayer offset={2} factor={0.5} speed={0.1}>
                <p>P3</p>
              </ParallaxLayer>

            </Parallax>
            <div className="absolute top-0 left-1/2 -translate-x-1/2 mx-auto p-4 rotate-180 transform hover:scale-125 ease-in-out duration-300" onClick={() => setPage(1)}>
              <ArrowSVG />
            </div>
          </div>
        </ParallaxLayer>

      </Parallax>
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