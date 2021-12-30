import React, { useState, useEffect } from 'react'
import { useSpring, animated } from 'react-spring'
import { useInView } from 'react-intersection-observer'
import sciteens from '../images/sciteens.png'
import Github from '../images/Github'
import Link from '../images/Link'

export default function Sciteens(props) {

    const { page } = props

    const [visible, setVisible] = useState(false)

    const transition = useSpring({
        config: { mass: 1, tension: 20, friction: 10 },
        opacity: visible ? 1 : 0,
        transform: visible ? 'translate3d(0, 0, 0)' : 'translate3d(0, 25px, 0)'
    })

    const { ref, inView, entry } = useInView({
        threshold: 0.6
    })

    useEffect(() => {
        if (inView) {
            setVisible(true)
            props.parentCallBack(2)
            document.title = "Projects | Luke Sutor"
        } else if (page <= 1) {
            setVisible(false)
        }
    }, [inView, page])


    return (
        <animated.div ref={ref} style={transition}>
            <div className="image-container">
                <img src={sciteens} alt="" className="image" />
                <div className="overlay">
                    <div className="link-container">
                        <a href="https://github.com/Sci-Teens/sciteens" target="_blank" rel="noreferrer" className="link mr-4 rounded-full border-2 border-white"><Github /></a>
                        <a href="https://sciteens.org" target="_blank" rel="noreferrer" className="link rounded-full border-2 border-white"><Link /></a>
                    </div>
                    <div className="info-container">
                        <em className="info-label text-xl font-bold rounded-full border-2 border-white">i</em>
                        <div className="info">
                            <p className="text-xs md:text-xl text-justify">Sciteens is a nonprofit organization focused on bridging the gap between education and opportunity,
                                particularly for students from low-resource areas who do not have an extensive STEM support network.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-row justify-between">
                <a href="https://sciteens.org" target="_blank" rel="noreferrer" className="text-2xl md:text-4xl font-semibold hover:text-gray-300 whitespace-nowrap">Sciteens</a>
                <p className="my-auto text-base md:text-xl text-gray-400 font-thin">12.2021</p>
            </div>
            <p className="mt-2 text-base md:text-2xl lg:text-xl text-gray-400">Share your scientific work with other students and scholars.</p>
        </animated.div>
    )
}
