import React from 'react'
import Marketscrape from './Marketscrape'
import Statbreak from './Statbreak'
import SemanticSearch from './SemanticSearch'
import './css/projects.css'

export default function Projects(props) {
  return (
    <div className="flex flex-col lg:flex-row justify-around pb-32">
      <div className="grid grid-rows-1 grid-cols-1 w-full px-8 md:px-20 lg:px-8">
        <Statbreak parentCallBack={props.parentCallBack} page={props.page} />
        <SemanticSearch parentCallBack={props.parentCallBack} page={props.page} />
      </div>
      <div className="grid grid-rows-1 grid-cols-1 w-full mt-24 lg:mt-72 px-8 md:px-20 lg:px-8">
        <Marketscrape parentCallBack={props.parentCallBack} page={props.page} />
      </div>
    </div>
  )
}
