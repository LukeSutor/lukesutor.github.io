import React from 'react'

function Home(props) {
  return (
    <div className="text-white">
      <div className="flex justify-evenly w-1/2 h-min">
        <div className="flex flex-col gap-10 mx-auto mt-12">
          <div>
            <p className="text-7xl whitespace-nowrap inline-flex">Hello 👋 I'm</p>
            <p className="relative w-min text-7xl whitespace-nowrap transform hover:scale-105 ease-in-out duration-300">Luke Sutor
            <div className="absolute w-full h-1/4 bg-blue-700 rounded-full transform -translate-y-full" style={{ zIndex: -10 }} /></p>
          </div>
          <div>
            <p className="text-2xl text-gray-400">Software Engineer, Athlete, Guitarist</p>
          </div>
          <div className="mx-auto">
            <button onClick={() => props.history.push('/projects')}
            className="px-4 py-2 text-xl font-semibold bg-blue-700 hover:bg-blue-900 rounded-md focus:outline-none">View My Work</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home