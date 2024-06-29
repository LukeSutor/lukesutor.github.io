import * as React from 'react'


const years = [
    {
        "year": 2024,
        "experiences": [
            {
                "title": "Gaming Analytics Inc",
                "position": "Software Engineer Intern (Data Science)",
                "months": "Mar - Aug",
                "caption": "At gaming analytics, I trained transformer-based NER models ",
                "color": "#1cbcff",
                "offset": "65%",
                "range": "2024/5-2024/8"
            }
        ]
    },
    {
        "year": 2023,
        "experiences": [
            {
                "title": "William Ryan Group",
                "position": "Software Engineer Intern (Data Science)",
                "months": "Mar - Aug",
                "caption": "At gaming analytics, I trained transformer-based NER models ",
                "color": "#073e6f",
                "offset": "57%",
                "range": "2023/6-2023/8"
            }
        ]
    },
    {
        "year": 2022,
        "experiences": [

        ]
    },
    {
        "year": 2021,
        "experiences": [

        ]
    }
]


function Experience() {
    const [color, setColor] = React.useState("black")
    const [range, setRange] = React.useState("")

    function handleRangeChange() {
        if(range == "") {
            // Reset values
            for(let year = 2019; year <= 2024; year++) {
                let bar = document.getElementById("bar-"+year.toString())
                if(bar != null) {
                    bar.style.backgroundColor = "transparent"
                    let dot = document.getElementById("dot-"+year.toString())
                    dot.style.backgroundColor = "rgb(107 114 128)"
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
        if(y1 == y2) {
            let bar = document.getElementById("bar-"+y1.toString())
            bar.style.backgroundColor = color
            bar.style.bottom = Math.max((100*((m1-1)/11)), 0).toString()+"%"
            bar.style.top = Math.max((100*(11-m2)/11), 0).toString()+"%"

            if(m1 == 12 || m2 == 12) {
                let dot = document.getElementById("dot-"+y1.toString())
                dot.style.backgroundColor = color
            }
            return
        }

        // Set first year with proper month range
        let bar = document.getElementById("bar-"+y1.toString())
        bar.style.backgroundColor = color
        bar.style.bottom = Math.max((100*((m1-1)/11)), 0).toString()+"%"

        if(m1 <= 12) {
            let dot = document.getElementById("dot-"+y1.toString())
            dot.style.backgroundColor = color
        }


        // Set colors for middle years
        for(let year = y1+1; year < y2; year++) {
            bar = document.getElementById("bar-"+year.toString())
            bar.style.backgroundColor = color
            // bar.style.top = 0
            // bar.style.bottom = 0
            let dot = document.getElementById("dot-"+year.toString())
            dot.style.backgroundColor = color
        }

        // Set second year with proper month range
        bar = document.getElementById("bar-"+y2.toString())
        bar.style.backgroundColor = color
        bar.style.top = Math.max((100*(11-m2)/11), 0).toString()+"%"

        if(m2 == 12) {
            let dot = document.getElementById("dot-"+y2.toString())
            dot.style.backgroundColor = color
        }
    }

    React.useEffect(() => {
        handleRangeChange()
    }, [range])

    return (
        <div>
            <h1 id="experience" className="text-5xl font-bold mb-12">Experience</h1>
            <div className="grid grid-cols-1 mx-auto w-full max-w-3xl">
                {years.map((year) => {
                    return (
                        <div key={year.year} className="flex flex-row min-h-72 ">
                            <div className="flex flex-row justify-between w-32">
                                <p className="text-lg">{year.year}</p>
                                <div className="flex flex-col items-center mx-8">
                                    <div id={`dot-${year.year}`} className="h-3 aspect-square bg-gray-500 rounded-full my-2">
                                        <div className="" />
                                    </div>
                                    <div className="relative h-full w-0.5 bg-gray-500">
                                        <div id={`bar-${year.year}`}  className='absolute top-0 bottom-0 w-full bg-transparent' />
                                    </div>
                                </div>
                            </div>
                            <div className="w-full relative">
                                {year.experiences.map((experience) => {
                                    return (
                                        <div
                                        key={experience.range}
                                        onMouseEnter={() => {setRange(experience.range);setColor(experience.color)}}
                                        onMouseLeave={() => setRange("")}
                                        style={{top: experience.offset, borderColor: experience.color}} 
                                        className="absolute transform -translate-y-full w-full border rounded-xl py-2 px-4 shadow">
                                            <div className='flex flex-row justify-between items-center'>
                                                <h2 className='text-lg font-bold'>{experience.title}<span className='text-base font-normal text-gray-700'>{' '}&middot; {experience.position}</span></h2>
                                                <p>{experience.months}</p>
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