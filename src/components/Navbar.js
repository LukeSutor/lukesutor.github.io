import React from 'react'
import { NavLink, withRouter } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="relative z-50 text-white">
      <div className="flex justify-between items-center w-11/12 mx-auto py-4">
        <NavLink exact to='/' className="text-2xl">Luke Sutor</NavLink>
        <div className="flex gap-6">
          <NavLink exact to='/' className="text-sm text-gray-300 hover:text-white p-2"
            activeClassName="text-blue-700 hover:text-blue-800">Home</NavLink>
          <NavLink to='/projects' className="text-sm text-gray-300 hover:text-white p-2"
            activeClassName="text-blue-700 hover:text-blue-800">Projects</NavLink>
        </div>
      </div>
      <hr className="mx-auto w-11/12" />
    </nav>
  );
}

export default withRouter(Navbar)