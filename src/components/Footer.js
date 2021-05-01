import React, { useState } from 'react'
import { useSpring, animated } from 'react-spring'

export default function Footer() {

  const [emailHover, setEmailHover] = useState(false)

  const [githubHover, setGithubHover] = useState(false)

  // Form code
  const [name, setName] = useState("")

  const [emailName, setEmailName] = useState("")

  const [message, setMessage] = useState("")

  function onSubmit(e) {
    e.preventDefault();

    const email = {
      name: name,
      emailName: emailName,
      message: message
    }

    // clear fields
    document.getElementById("name").value = ""
    document.getElementById("email").value = ""
    document.getElementById("message").value = ""


    console.log(email)
  }

  const emailSpring = useSpring({
    marginLeft: 0,
    width: emailHover ? '100%' : '0%',
    backgroundColor: emailHover ? '#9039ff' : '#fff'
  })

  const githubSpring = useSpring({
    marginLeft: 0,
    width: githubHover ? '100%' : '0%',
    backgroundColor: githubHover ? '#f147f0' : '#fff'
  })

  return (
    <div className="relative w-full h-full overflow-hidden py-12 bg-white text-black">
      {/* Designed by button */}
      <p className="absolute left-4 md:left-8 bottom-4 text-xs text-gray-500">Designed by Luke Sutor, 2021</p>

      {/* Back to top button */}
      <button onClick={() => window.scrollTo(0, 0)}
        className="absolute right-4 md:right-8 bottom-4 text-xs md:text-base text-gray-500 hover:text-black focus:outline-none">Back to top</button>

      <div className="flex flex-col md:flex-row">
        <div className="flex flex-col w-full text-center">
          <p className="text-xl md:text-2xl font-bold mb-3 md:mb-6 whitespace-nowrap" style={{ color: '#9039ff' }}>Say hello 👋</p>
          {/* Email */}
          <a href="mailto:lukesutor@gmail.com" onMouseOver={() => setEmailHover(true)} onMouseLeave={() => setEmailHover(false)}
            style={{ color: `${emailHover ? '#9039ff' : ''}` }}
            className="relative flex text-base md:text-lg font-semibold text-black text-opacity-60 hover:text-blue-600 mb-6 mx-auto w-min whitespace-nowrap">lukesutor@gmail.com 📧
          <animated.div style={emailSpring} className="absolute bottom-0 h-0.5 mx-auto bg-white" /></a>

        </div>
        <div className="flex flex-col w-full text-center">
          <p className="text-xl md:text-2xl font-bold mb-3 md:mb-6 whitespace-nowrap" style={{ color: '#f147f0' }}>See my projects 📋</p>
          {/* Github */}
          <a href="https://github.com/LukeSutor" target="_blank" onMouseOver={() => setGithubHover(true)}
            onMouseLeave={() => setGithubHover(false)} style={{ color: `${githubHover ? '#f147f0' : ''}` }}
            className="relative flex text-base md:text-lg font-semibold text-black text-opacity-60 mb-6 mx-auto w-min whitespace-nowrap">Github 👨‍💻
            <animated.div style={githubSpring} className="absolute bottom-0 h-0.5 mx-auto bg-white" /></a>
        </div>
      </div>
    </div>
  );
}