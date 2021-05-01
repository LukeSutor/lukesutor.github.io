import React, { useEffect, useState } from 'react'
import { useSpring, useTransition, animated } from 'react-spring'
import { useInView } from 'react-intersection-observer'
import statbreak from './images/statbreak.png'
import Github from './images/Github'
import Link from './images/Link'

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


  return (
    <div ref={ref} className="w-full h-full">
      <div className="relative mb-4">
        <img src={statbreak} alt="" />
        <div className="overlay">
          <div className="link-container">
            <a href="https://github.com/LukeSutor/React-Basketball-Site" target="_blank" rel="noreferrer" className="link"><Github /></a>
            <a href="https://statbreak.herokuapp.com" target="_blank" rel="noreferrer" className="link"><Link /></a>
          </div>
        </div>
      </div>
      <a href="https://statbreak.herokuapp.com" target="_blank" rel="noreferrer" className="text-4xl font-semibold hover:text-gray-200">Statbreak</a>
      <p className="mt-2 text-xl text-gray-400">Platform for sharing basketball stats.</p>
    </div>
  );
}

export default Statbreak