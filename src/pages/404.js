import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { Link } from "gatsby"

const NotFoundPage = () => (
  <Layout>
    <div className="flex flex-col justify-center items-center">
      <h1 className="my-16 font-semibold text-3xl lg:text-7xl">
        404: Not Found
      </h1>
      <p>I don't think you meant to come here...</p>
      <Link
        to="/"
        className="font-semibold text-lg px-4 py-2 mt-4 mx-auto bg-blue-200 border border-blue-300 rounded-lg shadow hover:shadow-md"
      >
        Go home
      </Link>
    </div>
  </Layout>
)

export const Head = () => <Seo title="404: Not Found" />

export default NotFoundPage
