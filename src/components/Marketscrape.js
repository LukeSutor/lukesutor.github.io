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
      <div className="image-container">
        <img src={marketscrape} alt="" className="image"/>
        <div className="overlay">
          <div className="link-container">
            <a href="https://github.com/LukeSutor/marketscrape" target="_blank" rel="noreferrer" className="link"><Github /></a>
            <a href="https://lukesutor.github.io/marketscrape" target="_blank" rel="noreferrer" className="link"><Link /></a>
          </div>
          <div className="info-container">
            <em className="info-label text-xl font-bold">i</em>
            <div className="info">
              <p className="text-xs md:text-xl text-black text-justify">Marketscrape is a money saving tool in which users can 
              search Amazon, Walmart, and Ebay to ensure they're getting the best deal possible when buying online.
              Marketscrape utilizes a Node.js backend that webscrapes using puppeteer and is connected to a React.js frontend.</p>
            </div>
          </div>
        </div>
      </div>
      <a href="https://lukesutor.github.io/marketscrape" target="_blank" rel="noreferrer" className="text-2xl md:text-4xl font-semibold hover:text-gray-300">Marketscrape</a>
      <p className="mt-2 text-base md:text-2xl lg:text-xl text-gray-400">Product price comparison tool.</p>
    </div>
  )
}
