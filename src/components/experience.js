import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

// Images
import gaming_analytics from "../images/gaming_analytics.jpg"
import william_ryan from "../images/william_ryan.jpg"
import ai_scholars from "../images/ai_scholars.jpg"
import pilot_media from "../images/pilot_media.jpg"

const years = [
  {
    year: 2024,
    experiences: [
      {
        title: "Gaming Analytics Inc.",
        position: "Software Engineer Intern (Data Science)",
        months: "Mar - Aug",
        image: gaming_analytics,
        caption:
          "During my time at Gaming Analytics, I trained custom transformer-based NER models on a synthetic dataset I generated. These models served as the backbone for a text-to-graph-query pipeline that I created to address weaknesses of the prior system.",
        color: "#1cbcff",
        range: "2024/5-2024/8",
      }
    ],
  },
  {
    year: 2023,
    experiences: [
      {
        title: "William Ryan Group",
        position: "Software Engineer Intern",
        months: "Jun - Aug",
        image: william_ryan,
        caption: "At gaming analytics, I trained transformer-based NER models ",
        color: "#073e6f",
        range: "2023/6-2023/8",
      },
      {
        title: "Artificial Intelligence Scholars Program",
        position: "Undergraduate Researcher",
        months: "Jun '23 - Apr '25",
        image: ai_scholars,
        caption:
          "During my time at Gaming Analytics, I trained custom transformer-based NER models on a synthetic dataset I generated. These models served as the backbone for a text-to-graph-query pipeline that I created to address weaknesses of the prior system.",
        color: "#0021a5",
        range: "2023/4-2025/4",
      }
    ],
  },
  {
    year: 2022,
    experiences: [
          {
            title: "University of Florida",
            position: "BSc in Computer Science",
            months: "Jul '22 - May '26",
            image: ai_scholars,
            caption:
              "During my time at Gaming Analytics, I trained custom transformer-based NER models on a synthetic dataset I generated. These models served as the backbone for a text-to-graph-query pipeline that I created to address weaknesses of the prior system.",
            color: "#fa4616",
            range: "2022/7-2026/5",
          }
    ],
  },
  {
    year: 2021,
    experiences: [
        {
            title: "Pilot Media AI",
            position: "Software Engineer",
            months: "Dec '21 - Jul '22",
            image: pilot_media,
            caption:
              "During my time at Gaming Analytics, I trained custom transformer-based NER models on a synthetic dataset I generated. These models served as the backbone for a text-to-graph-query pipeline that I created to address weaknesses of the prior system.",
            color: "#00a99d",
            range: "2021/12-2022/7",
          }
    ],
  },
]

function Experience() {
  const [color, setColor] = React.useState("black")
  const [range, setRange] = React.useState("")

  function handleRangeChange() {
    if (range == "") {
      // Reset values
      for (let year = 2019; year <= 2024; year++) {
        let bar = document.getElementById("bar-" + year.toString())
        if (bar != null) {
          bar.style.backgroundColor = "transparent"
          bar.style.top = 0
          bar.style.bottom = 0
          bar.style.boxShadow = `0px 0px 0px 0`

          let dot = document.getElementById("dot-" + year.toString())
          dot.style.backgroundColor = "rgb(107 114 128)"
          dot.style.boxShadow = `0px 0px 0px 0`
        }
      }
      return
    }

    // Extract time from range
    let dates = range.split("-")
    let date = dates[0].split("/")
    const y1 = parseInt(date[0])
    const m1 = parseInt(date[1])
    date = dates[1].split("/")
    const y2 = parseInt(date[0])
    const m2 = parseInt(date[1])

    // Set only one year
    if (y1 == y2) {
      let bar = document.getElementById("bar-" + y1.toString())
      if(bar != null) {
          bar.style.backgroundColor = color
          bar.style.bottom = Math.max(100 * ((m1 - 1) / 11), 0).toString() + "%"
          bar.style.top = Math.max((100 * (11 - m2)) / 11, 0).toString() + "%"
          bar.style.boxShadow = `0px 0px 5px ${color}B3`
    
          if (m1 == 12 || m2 == 12) {
            let dot = document.getElementById("dot-" + y1.toString())
            dot.style.backgroundColor = color
            dot.style.boxShadow = `0px 0px 5px ${color}B3`
          }
      }
      return
    }

    // Set first year with proper month range
    let bar = document.getElementById("bar-" + y1.toString())
    if(bar != null) {
        bar.style.backgroundColor = color
        bar.style.bottom = Math.max(100 * ((m1 - 1) / 11), 0).toString() + "%"
        bar.style.boxShadow = `0px 0px 5px ${color}B3`
    }

    if (m1 <= 12) {
        let dot = document.getElementById("dot-" + y1.toString())
        if(dot != null) {
            dot.style.backgroundColor = color
            dot.style.boxShadow = `0px 0px 5px ${color}B3`
        }
    }

    // Set colors for middle years
    for (let year = y1 + 1; year < y2; year++) {
        bar = document.getElementById("bar-" + year.toString())
        if(bar != null) {
            bar.style.backgroundColor = color
            bar.style.boxShadow = `0px 0px 5px ${color}B3`
        }

        let dot = document.getElementById("dot-" + year.toString())
        if(dot != null) {
            dot.style.backgroundColor = color
            dot.style.boxShadow = `0px 0px 5px ${color}B3`
        }
    }

    // Set second year with proper month range
    bar = document.getElementById("bar-" + y2.toString())
    if(bar != null) {
        bar.style.backgroundColor = color
        bar.style.top = Math.max((100 * (11 - m2)) / 11, 0).toString() + "%"
        bar.style.boxShadow = `0px 0px 5px ${color}B3`
    }

    if (m2 == 12) {
        let dot = document.getElementById("dot-" + y2.toString())
        if(dot != null) {
            dot.style.backgroundColor = color
            dot.style.boxShadow = `0px 0px 5px ${color}B3`
        }
    }
  }

  React.useEffect(() => {
    handleRangeChange()
  }, [range])

  return (
    <div>
      <h1 id="experience" className="text-5xl font-bold mb-12">
        Experience
      </h1>
      <div className="grid grid-cols-1 grid-rows-4 mx-auto w-full max-w-4xl">
        {years.map(year => {
          return (
            <div key={year.year} className="flex flex-row min-h-72">
              <div className="flex flex-row justify-between w-32">
                <p className="text-lg">{year.year}</p>
                <div className="flex flex-col items-center mx-8">
                  <div
                    id={`dot-${year.year}`}
                    className="h-3 aspect-square bg-gray-500 rounded-full my-2"
                  >
                    <div className="" />
                  </div>
                  <div className="relative h-full w-0.5 bg-gray-500">
                    <div
                      id={`bar-${year.year}`}
                      className="absolute top-0 bottom-0 w-full bg-transparent"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col w-full">
                {year.experiences.map(experience => {
                  return (
                    <div
                      key={experience.range}
                      onMouseEnter={() => {
                        setRange(experience.range)
                        setColor(experience.color)
                      }}
                      onMouseLeave={() => setRange("")}
                      style={{
                        borderColor: experience.color,
                      }}
                      className="w-full border rounded-xl py-2 px-4 mb-4 shadow"
                    >
                      <div className="flex flex-row justify-between items-center mb-2">
                        <div className="flex flex-row items-center w-full">
                          <img
                            className="rounded-lg h-20 mr-4"
                            src={experience.image}
                            loading="lazy"
                            quality={95}
                            formats={["auto", "webp", "avif"]}
                            alt=""
                          />
                          <div className="flex flex-col w-full">
                            <div className="flex flex-row justify-between">
                              <h2 className="text-xl font-bold">
                                {experience.title}
                              </h2>
                              <p className="my-auto text-right">
                                {experience.months}
                              </p>
                            </div>
                            <p className="text-gray-700">
                              {experience.position}
                            </p>
                          </div>
                        </div>
                      </div>
                      <p>{experience.caption}</p>
                    </div>
                  )
                })}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Experience
