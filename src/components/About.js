import React from 'react'
import AboutParagraph from './AboutParagraph'
import Skills from './Skills'
import './css/about.css'

export default function About(props) {
  return (
    <div className="px-8 lg:px-24 py-12 md:py-20 bg-white">

      <AboutParagraph parentCallBack={props.parentCallBack} page={props.page} />

      <div className="w-full h-0.5 my-8 md:my-14 bg-gray-500" />

      <Skills parentCallBack={props.parentCallBack} page={props.page} />

    </div>
  )
}