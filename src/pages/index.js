import * as React from "react"
// import { Link } from "gatsby"
// import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Hero from "../components/hero"
import Experience from "../components/experience"
import Seo from "../components/seo"


const IndexPage = () => (
  <Layout>
    <div className="flex justify-center items-center w-full px-16">
      <div className="w-full max-w-screen-xl">

        <div className="h-24" />
        <Hero />

        <div className="h-0.5 w-full bg-gray-500 my-16"></div>

        <Experience />

        <div className="h-0.5 w-full bg-gray-500 my-16"></div>


        
      </div>
    </div>
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage


{/* <StaticImage
src="../images/example.png"
loading="eager"
width={64}
quality={95}
formats={["auto", "webp", "avif"]}
alt=""
style={{ marginBottom: `var(--space-3)` }}
/> */}