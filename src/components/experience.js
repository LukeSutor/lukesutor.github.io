import * as React from "react"

// Images
import gaming_analytics from "../images/gaming_analytics.jpg"
import william_ryan from "../images/william_ryan.jpg"
import ai_scholars from "../images/ai_scholars.jpg"
import pilot_media from "../images/pilot_media.jpg"
import uf from "../images/uf.png"

const years = [2025, 2024, 2023, 2022, 2021]

const date = new Date();
const month = date.getMonth() + 1;
const year = date.getFullYear();

const experiences = [
  {
    title: "Gaming Analytics Inc.",
    position: "Software Engineer Intern (Data Science)",
    months: "May '24 - Present",
    image: gaming_analytics,
    caption:
      "As I intern at <a style='text-decoration: underline; font-weight: 500' href='https://gaminganalytics.ai/'>Gaming Analytics</a>, I'm training NER models through HuggingFace to improve the internal NLP system. These models are serving as the backbone for the text-to-database-query pipeline that I'm improving. I'm currently working on deploying this system to production using AWS services including SageMaker, Lambda, and S3.",
    color: "#1cbcff",
    range: `2024/5-${year}/${month}`,
  },
  {
    title: "William Ryan Group",
    position: "Software Engineer Intern",
    months: "Jun '23 - Aug '23",
    image: william_ryan,
    caption:
      "At William Ryan Group, I created a realtime data visualization interface using Python, VBA, and excel spreadsheets. This dashboard provided casino managers with instant data insights which they could filter by parameters such as customer tier levels and employee response times, allowing for data-driven decision making.",
    color: "#073e6f",
    range: "2023/6-2023/8",
  },
  {
    title: "Artificial Intelligence Scholars Program",
    position: "Undergraduate Researcher",
    months: "Jun '23 - Apr '25", // Apr '25'
    image: ai_scholars,
    caption:
      "I am a two-time recipient of this award, working under the mentorship of Professor Amelia Winger-Bearskin. With my $3,500 in grant funding, I am focusing on deep learning research utilizing the University's <a style='text-decoration: underline; font-weight: 500' href='https://www.rc.ufl.edu/about/hipergator/'>HiPerGator AI</a> supercomputer.",
    color: "#0021a5",
    range: "2023/4-2025/4",
  },
  {
    title: "University of Florida",
    position: "BSc in Computer Science; Minor in Statistics",
    months: "Jul '22 - May '26", // May '26"
    image: uf,
    caption:
      "I'm currently enrolled in the <a style='text-decoration: underline; font-weight: 500' href='https://www.eng.ufl.edu/'>Herbert Wertheim College of Engineering</a> pursuing a major in Computer Science with a minor in Statistics. Some of my relevant coursework includes Operating Systems, Data Structures and Algorithms, and Algorithm Abstraction and Design.",
    color: "#fa4616",
    range: "2022/7-2026/5",
  },
  {
    title: "Pilot Media AI",
    position: "Software Engineer",
    months: "Dec '21 - Jul '22",
    image: pilot_media,
    caption:
      "While working at Pilot Media AI, I collaborated to create a workflow for extracting data from PDF documents using custom machine learning models and AWS services including S3, Lambda, SQS, SNS, and Textract.",
    color: "#00a99d",
    range: "2021/12-2022/7",
  },
]

function Experience() {
  const [color, setColor] = React.useState("black")
  const [range, setRange] = React.useState("")

  const handleRangeChange = React.useCallback(() => {
    // Reset values at first
    for (const year of years) {
      let bar = document.getElementById("bar-" + year.toString())
      if (bar != null) {
        bar.style.backgroundColor = "transparent"
        bar.style.top = 0
        bar.style.bottom = 0
        bar.style.boxShadow = `0px 0px 0px 0`
      }
      let dot = document.getElementById("dot-" + year.toString())
      if (dot != null) {
        dot.style.backgroundColor = "rgb(107 114 128)"
        dot.style.boxShadow = `0px 0px 0px 0`
      }
    }

    // If no actual range simply return after resetting
    if (range === "") {
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
    if (y1 === y2) {
      let bar = document.getElementById("bar-" + y1.toString())
      if (bar != null) {
        bar.style.backgroundColor = color
        bar.style.bottom = Math.max(100 * ((m1 - 1) / 11), 0).toString() + "%"
        bar.style.top = Math.max((100 * (11 - m2)) / 11, 0).toString() + "%"
        bar.style.boxShadow = `0px 0px 5px ${color}B3`

        if (m1 === 1 || m2 === 1) {
          let dot = document.getElementById("dot-" + y1.toString())
          dot.style.backgroundColor = color
          dot.style.boxShadow = `0px 0px 5px ${color}B3`
        }
      }
      return
    }

    // Set first year with proper month range
    let bar = document.getElementById("bar-" + y1.toString())
    if (bar != null) {
      bar.style.backgroundColor = color
      bar.style.bottom = Math.max(100 * ((m1 - 1) / 12), 0).toString() + "%"
      bar.style.boxShadow = `0px 0px 5px ${color}B3`
    }

    if (m1 === 1) {
      let dot = document.getElementById("dot-" + y1.toString())
      if (dot != null) {
        dot.style.backgroundColor = color
        dot.style.boxShadow = `0px 0px 5px ${color}B3`
      }
    }

    // Set colors for middle years
    for (let year = y1 + 1; year < y2; year++) {
      bar = document.getElementById("bar-" + year.toString())
      if (bar != null) {
        bar.style.backgroundColor = color
        bar.style.boxShadow = `0px 0px 5px ${color}B3`
      }

      let dot = document.getElementById("dot-" + year.toString())
      if (dot != null) {
        dot.style.backgroundColor = color
        dot.style.boxShadow = `0px 0px 5px ${color}B3`
      }
    }

    // Set second year with proper month range
    bar = document.getElementById("bar-" + y2.toString())
    if (bar != null) {
      bar.style.backgroundColor = color
      bar.style.top = Math.max((100 * (11 - m2)) / 11, 0).toString() + "%"
      bar.style.boxShadow = `0px 0px 5px ${color}B3`
    }

    if (m2 >= 1) {
      let dot = document.getElementById("dot-" + y2.toString())
      if (dot != null) {
        dot.style.backgroundColor = color
        dot.style.boxShadow = `0px 0px 5px ${color}B3`
      }
    }
  }, [color, range])

  React.useEffect(() => {
    // Reset range on scroll to avoid bug with displaying multiple timeranges at once
    window.addEventListener("scroll", () => setRange(""))

    return window.removeEventListener("scroll", () => setRange(""))
  }, [])

  React.useEffect(() => {
    handleRangeChange()
  }, [range, handleRangeChange])

  return (
    <div>
      <h1 id="experience" className="text-3xl lg:text-5xl font-bold mb-12">
        Experience
      </h1>
      <div className="relative flex flex-row mx-auto w-full max-w-5xl h-full">
        <div className="hidden lg:flex sticky top-[calc(50vh-30%)] flex-col max-h-[60vh]">
          {years.map(year => {
            var isFirst = year === years[0]
            return (
              <div
                key={year}
                className={`flex flex-row ${isFirst ? "h-min" : "h-full"}`}
              >
                <div className="flex flex-row justify-between w-28 mr-16">
                  <p className="text-lg mt-auto">{year}</p>
                  <div className="flex flex-col items-center mx-8">
                    {!isFirst && (
                      <div className="relative h-full w-0.5 bg-gray-500">
                        <div
                          id={`bar-${year}`}
                          className="absolute top-0 bottom-0 -left-[1px] -right-[1px] rounded-full bg-transparent transition-all duration-200 ease-in-out"
                        />
                      </div>
                    )}
                    <div
                      id={`dot-${year}`}
                      className="h-3 aspect-square bg-gray-500 rounded-full my-2"
                    ></div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
        <div className="flex flex-col w-full">
          {experiences.map(experience => {
            return (
              <div
                key={experience.range}
                role="presentation"
                onMouseEnter={() => {
                  setRange(experience.range)
                  setColor(experience.color)
                }}
                onMouseLeave={() => setRange("")}
                style={{
                  borderColor: experience.color,
                }}
                className="w-full border rounded-xl py-2 px-4 mb-8 hover:scale-[100.5%] transition-all duration-200 ease-in-out"
              >
                <div className="flex flex-row justify-between items-center mb-2">
                  <div className="flex flex-row items-center w-full">
                    <img
                      className="rounded-lg h-16 lg:h-20 max-w-20 lg:max-w-96 mr-4 object-contain"
                      src={experience.image}
                      loading="lazy"
                      quality={95}
                      formats={["auto", "webp", "avif"]}
                      alt=""
                    />
                    <div className="flex flex-col w-full">
                      <div className="flex flex-row justify-between">
                        <h2 className="text-base lg:text-xl font-bold">
                          {experience.title}
                        </h2>
                        <p className="text-sm lg:text-base my-auto text-right">
                          {experience.months}
                        </p>
                      </div>
                      <p className="text-sm lg:text-base text-gray-700">{experience.position}</p>
                    </div>
                  </div>
                </div>
                <p className="text-sm lg:text-base" dangerouslySetInnerHTML={{ __html: experience.caption }}></p>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Experience
