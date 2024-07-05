import * as React from "react"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => (
  <header className="w-full bg-gray-50 px-16 py-6">
    <div className="flex justify-between w-full max-w-screen-2xl mx-auto">
      <Link to="/">{siteTitle}</Link>
      <div className="flex flex-row items-center space-x-6">
        <Link to="/#experience">Experience</Link>
        <Link to="/#projects">Projects</Link>
      </div>
    </div>
  </header>
)

export default Header
