import React, { useState, useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import marketscrape from './images/marketscrape.png'
import Github from './images/Github'
import Link from './images/Link'

export default function Marketscrape(props) {

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
        <img src={marketscrape} alt="" />
        <div className="overlay">
          <div className="link-container">
            <a href="https://github.com/LukeSutor/marketscrape" target="_blank" rel="noreferrer" className="link"><Github /></a>
            <a href="https://lukesutor.github.io/marketscrape" target="_blank" rel="noreferrer" className="link"><Link /></a>
          </div>
          <div className="outer">
            <p className="info-label text-xl font-bold">i</p>
            <div className="info">
              <p className="text-xl text-black">Marketscrape is a...</p>
            </div>
          </div>
        </div>
      </div>
      <a href="https://lukesutor.github.io/marketscrape" target="_blank" rel="noreferrer" className="text-4xl font-semibold hover:text-gray-200">Marketscrape</a>
      <p className="mt-2 text-xl text-gray-400">Product price comparison tool.</p>
    </div>
  )
}
