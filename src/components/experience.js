import * as React from 'react'


const years = [
    {
        "year": 2024,
        "experiences": [
            {
                "title": "GA.ai",
                "offset": "30%"
            },
            {
                "title": "funstuff",
                "offset": "81%"
            }
        ]
    },
    {
        "year": 2023,
        "experiences": [

        ]
    }
]

const Experience = () => (
    <div>
        <h1 id="experience" className="text-5xl font-bold mb-8">Experience</h1>
        <div className="flex flex-col">
            {years.map((year) => {
                return (
                    <div className="flex flex-row h-96">
                        <div className="flex flex-row justify-between w-32">
                            <p className="text-lg">{year.year}</p>
                            <div className="flex flex-col items-center mx-8 mt-1">
                                <div className="flex justify-center items-center h-6 aspect-square bg-white rounded-full mb-1">
                                    <div className="h-3 aspect-square bg-gray-500 rounded-full" />
                                </div>
                                <div className="h-full w-0.5 bg-gray-500" />
                            </div>
                        </div>
                        <div className="w-full relative">
                            {year.experiences.map((experience) => {
                                return (
                                    <div style={{top: experience.offset}} className="absolute">
                                        <p>{experience.title}</p>
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

export default Experience