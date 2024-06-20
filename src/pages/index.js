import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"


const IndexPage = () => (
  <Layout>
    <div>

      <h1 className="text-3xl text-red-400">
        Welcome to <b>Gatsby!</b>
      </h1>
      
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