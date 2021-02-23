import React, { useState } from 'react'
import { NavLink, withRouter } from 'react-router-dom'

function Navbar(props) {

  const [page, setPage] = useState(0)

  return (
    <div className="text-white">
      <button className="text-lg underline" onClick={() => props.parallax.scrollTo(2)}>Home</button>
    </div>
  );
}

export default withRouter(Navbar)