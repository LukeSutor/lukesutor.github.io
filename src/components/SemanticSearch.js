import React, { useState, useEffect } from 'react'
import { useSpring, animated } from 'react-spring'
import { useInView } from 'react-intersection-observer'
import semantic_search from './images/semantic_search.png'
import Github from './images/Github'
import Link from './images/Link'

export default function SemanticSearch(props) {

  const { page } = props

  const [visible, setVisible] = useState(false)

  const transition = useSpring({
    config: { mass: 1, tension: 20, friction: 10 },
    opacity: visible ? 1 : 0,
    transform: visible ? 'translate3d(0, 0, 0)' : 'translate3d(0, 25px, 0)'
  })

  const { ref, inView, entry } = useInView({
    threshold: 0.6
  })

  useEffect(() => {
    if (inView) {
      setVisible(true)
      props.parentCallBack(2)
      document.title = "Projects | Luke Sutor"
    } else if (page <= 1) {
      setVisible(false)
    }
  }, [inView, page])


  return (
    <animated.div ref={ref} style={transition} className="w-full h-full mt-24 lg:mt-32">
      <div className="image-container">
        <img src={semantic_search} alt="" className="image" />
        <div className="overlay">
          <div className="link-container">
            <a href="https://github.com/LukeSutor/semantic-search-extension" target="_blank" rel="noreferrer" className="link mr-4 rounded-full border-2 border-white"><Github /></a>
            <a href="https://chrome.google.com/webstore/detail/semantic-search/moknadjgghaffcedafbafjfjgnaanalm" target="_blank" rel="noreferrer" className="link rounded-full border-2 border-white"><Link /></a>
          </div>
          <div className="info-container">
            <em className="info-label text-xl font-bold rounded-full border-2 border-white">i</em>
            <div className="info">
              <p className="text-xs md:text-xl text-justify">Semantic Search is a chrome extension that makes use of the
                NLPcloud api, and the RoBERTa natural language processing model to answer your questions using either
                the text from a webpage or user entered text.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-between">
        <a href="https://chrome.google.com/webstore/detail/semantic-search/moknadjgghaffcedafbafjfjgnaanalm" target="_blank" rel="noreferrer" className="text-2xl md:text-4xl font-semibold hover:text-gray-300 whitespace-nowrap">Semantic Search</a>
        <p className="my-auto text-xl text-gray-400 font-thin">06.2021</p>
      </div>
      <p className="mt-2 text-base md:text-2xl lg:text-xl text-gray-400">Search websites to find the answers you need.</p>
    </animated.div>
  )
}
