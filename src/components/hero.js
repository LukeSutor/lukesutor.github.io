import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import github from "../images/github.png"
import linkedin from "../images/linkedin.png"
import mail from "../images/mail.png"
import resume from "../images/resume.png"

const links = [
  {
    image: github,
    href: "https://github.com/LukeSutor",
    alt: "GitHub",
  },
  {
    image: linkedin,
    href: "https://www.linkedin.com/in/luke-sutor/",
    alt: "LinkedIn",
  },
  {
    image: mail,
    href: "mailto:lukesutor@gmail.com",
    alt: "Email",
  },
  {
    image: resume,
    href: "/resume",
    alt: "Resume",
  },
]

const Hero = () => (
  <div className="flex flex-col-reverse lg:flex-row justify-between m-0 space-x-0 lg:space-x-16">
    <div className="flex flex-col space-y-4 my-auto text-center lg:text-left">
      <h1 className="text-3xl lg:text-5xl font-bold">Hello, I'm Luke Sutor</h1>
      <p className="text-xl mb-4">
        I'm a third year Computer Science student at the University of Florida
        🐊
      </p>
      <div className="flex flex-row justify-center lg:justify-start space-x-4">
        {links.map(link => {
          return (
            <a
              key={link.href}
              href={link.href}
              rel="noreferrer"
              target="_blank"
            >
              <img
                className="h-12 hover:scale-[105%] transition-all duration-200 ease-in-out"
                src={link.image}
                alt={link.alt}
              />
            </a>
          )
        })}
      </div>
    </div>
    <div className="mx-auto mb-12 lg:mb-0 w-full lg:w-[40%]">
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
