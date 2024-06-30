import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

const Hero = ({}) => (
  <div className="flex flex-row justify-between m-0">
    <div className="flex flex-col space-y-4 my-auto">
      <h1 className="text-5xl font-bold">Hello, I'm Luke Sutor</h1>
      <p className="text-xl">
        I'm a rising Junior studying Computer Science at the University of
        Florida.
      </p>
    </div>
    <div className="w-[40%]">
      <StaticImage
        className="rounded-lg"
        src="../images/luke.jpg"
        loading="eager"
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt=""
      />
    </div>
  </div>
)

export default Hero
