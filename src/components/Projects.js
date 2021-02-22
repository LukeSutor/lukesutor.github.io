import React from 'react'
import Navbar from './Navbar'
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons'

function Projects() {
  let parallax;
  return (
    <Parallax pages={3} ref={ref => parallax = ref} className="text-white">
      <ParallaxLayer offset={0} speed={0.5} className="">
        <Navbar />
        <p className="flex justify-center my-auto align-center" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Projects</p>
      </ParallaxLayer>
      <ParallaxLayer offset={1} speed={0.5} className="bg-gray-900">
        <p style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Projects1</p>
      </ParallaxLayer>
      <ParallaxLayer offset={2} speed={0.5} className="">
        <p>Projects2</p>
      </ParallaxLayer>
    </Parallax>
  );
}

export default Projects