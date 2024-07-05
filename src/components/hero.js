import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import github from "../images/github.png"
import linkedin from "../images/linkedin.png"
import mail from "../images/mail.png"

const links = [
  {
    "image": github,
    "href": "https://github.com/LukeSutor",
    "alt": "GitHub"
  },
  {
    "image": linkedin,
    "href": "https://www.linkedin.com/in/luke-sutor/",
    "alt": "LinkedIn"
  },
  {
      "image": mail,
      "href": "mailto:lukesutor@gmail.com",
      "alt": "Email"
  }
]

const Hero = ({}) => (
  <div className="flex flex-row justify-between m-0">
    <div className="flex flex-col space-y-4 my-auto">
      <h1 className="text-5xl font-bold">Hello, I'm Luke Sutor</h1>
      <p className="text-xl mb-4">
        I'm a rising Junior studying Computer Science at the University of
        Florida.
      </p>
      <div className="flex flex-row space-x-4">
        {links.map((link) => {
          return (
            <a href={link.href} rel="noreferrer" target="_blank">
              <img className="h-12" src={link.image} alt={link.alt} />
            </a>
          );
        })}
      </div>
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
