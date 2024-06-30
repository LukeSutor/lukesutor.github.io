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
        // style={{
        //   margin: `0 auto`,
        //   maxWidth: `var(--size-content)`,
        //   padding: `var(--size-gutter)`,
        // }}
      >
        <main>{children}</main>
        <footer className="flex flex-row justify-between mx-16 mt-24">
          <p>Resume</p>
          <p>Contact</p>
          <p>{new Date().getFullYear()} &middot; Built by Luke Sutor</p>
        </footer>
      </div>
    </>
  )
}

export default Layout
