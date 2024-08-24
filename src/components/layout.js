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
        <footer className="mt-24">
          <p className="ml-auto mr-4 w-min whitespace-nowrap">{new Date().getFullYear()} &middot; Built by Luke Sutor</p>
        </footer>
      </div>
    </>
  )
}

export default Layout
