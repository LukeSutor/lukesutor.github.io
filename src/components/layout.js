/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"

import Header from "./header"

const Layout = ({ children }) => {
  return (
    <>
      <Header siteTitle={"Luke Sutor"} />
      <div
        className="m-0"
      >
        <main>{children}</main>
        <footer className="mt-24">
          <p className="text-sm lg:text-base ml-auto mr-8 lg:mr-4 w-min whitespace-nowrap">{new Date().getFullYear()} &middot; Built by Luke Sutor</p>
        </footer>
      </div>
    </>
  )
}

export default Layout
