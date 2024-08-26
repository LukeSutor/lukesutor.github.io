import * as React from "react"

// Import images
import latent_docs from "../images/latent_docs.png"
import semantic_search from "../images/semantic_search.png"
import programmatic_pitch from "../images/programmatic_pitch.png"

const projects = [
  {
    title: "Latent Docs",
    image: latent_docs,
    description:
      "Coming soon... Use LLMs to interact with Python library documentation, generating the most up-to-date code.",
    technologies: ["AWS", "React", "Large Language Models"],
    href: "/#projects",
  },
  {
    title: "Semantic Search",
    image: semantic_search,
    description:
      "A Chrome extension with ~200 users for semantically retrieving information from webpages.",
    technologies: ["JavaScript", "GPT-3.5", "Cloudflare Workers"],
    href: "https://chromewebstore.google.com/detail/semantic-search/moknadjgghaffcedafbafjfjgnaanalm?hl=en-US",
  },
  {
    title: "Programmatic Pitch",
    image: programmatic_pitch,
    description:
      "Research into using diffusion models for generating mel spectrograms. Presented at the University of Florida's 2024 Undergraduate Research Symposium.",
    technologies: ["Python", "PyTorch", "🤗 Accelerate"],
    href: "https://github.com/LukeSutor/programmatic-pitch",
  },
]

const Projects = () => (
  <div>
    <h1 id="projects" className="text-3xl lg:text-5xl font-bold mb-12">
      Selected Projects
    </h1>
    <div className="flex flex-col lg:grid lg:grid-cols-3 space-y-8 lg:space-y-0 lg:gap-x-8">
      {projects.map(project => {
        return (
          <a
            key={project.title}
            href={project.href}
            rel="noreferrer"
            target="_blank"
            className="flex flex-col w-full border border-gray-300 hover:border-gray-500 hover:scale-[100.5%] rounded-xl overflow-hidden transition-all duration-200 ease-in-out"
          >
            <img
              src={project.image}
              alt={project.alt}
              className="object-cover w-full h-56"
            />
            <div className="px-4 py-4 border-t border-gray-300">
              <p className="font-semibold text-xl lg:text-2xl">
                {project.title}
              </p>
              <div className="flex flex-row flex-wrap mt-4">
                {project.technologies.map(technology => {
                  return (
                    <p
                      key={technology}
                      className="text-xs lg:text-sm font-bold whitespace-nowrap px-2 py-1 mr-2 mb-2 bg-gray-200 rounded-lg border border-gray-300"
                    >
                      {technology}
                    </p>
                  )
                })}
              </div>
              <p className="text-sm lg:text-base">{project.description}</p>
            </div>
          </a>
        )
      })}
    </div>
  </div>
)

export default Projects
