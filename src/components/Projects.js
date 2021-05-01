import React from 'react'
import Marketscrape from './Marketscrape'
import Statbreak from './Statbreak'
import './css/projects.css'

export default function Projects(props) {
  return (
    <div className="flex flex-row justify-around pb-32">
      <div className="grid grid-rows-1 grid-cols-1 w-2/5">
        <Statbreak parentCallBack={props.parentCallBack} page={props.page} />
      </div>
      <div className="grid grid-rows-1 grid-cols-1 w-2/5 md:mt-60">
        <Marketscrape parentCallBack={props.parentCallBack} page={props.page} />
      </div>
    </div>
  )
}
