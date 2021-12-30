import React from 'react'
import Marketscrape from './projects/Marketscrape'
import Statbreak from './projects/Statbreak'
import SemanticSearch from './projects/SemanticSearch'
import WorkoutTracker from './projects/WorkoutTracker'
import Sciteens from './projects/Sciteens'
import './css/projects.css'

export default function Projects(props) {
  return (
    <div className="flex flex-col lg:flex-row justify-around pb-32">
      <div className="flex flex-col w-full px-8 md:px-20 lg:px-8">
        <Statbreak parentCallBack={props.parentCallBack} page={props.page} />
        <div className="py-8 md:py-16" />
        <SemanticSearch parentCallBack={props.parentCallBack} page={props.page} />
        <div className="py-8 md:py-16" />
        <Sciteens parentCallBack={props.parentCallBack} page={props.page} />
      </div>
      <div className="flex flex-col w-full mt-24 lg:mt-72 px-8 md:px-20 lg:px-8">
        <Marketscrape parentCallBack={props.parentCallBack} page={props.page} />
        <div className="py-8 md:py-16" />
        <WorkoutTracker parentCallBack={props.parentCallBack} page={props.page} />
      </div>
    </div>
  )
}
