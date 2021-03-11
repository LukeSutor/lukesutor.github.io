import React, { useState } from 'react'
import { useSpring, animated } from 'react-spring'

function Footer() {

  const [instagramHover, setInstagramHover] = useState(false)

  const [githubHover, setGithubHover] = useState(false)

  const [htmlHover, setHTMLHover] = useState(false)

  const [sqlHover, setSQLHover] = useState(false)

  // Form code

  const [emailName, setEmailName] = useState("")

  const [message, setMessage] = useState("")

  function onSubmit(e) {
    e.preventDefault();

    const email = {
      emailName: emailName,
      message: message
    }

    // clear fields
    document.getElementById("email").value = ""
    document.getElementById("message").value = ""


    console.log(email)
  }

  const instagramSpring = useSpring({
    marginLeft: 0,
    width: instagramHover ? '100%' : '0%',
    backgroundColor: instagramHover ? '#2563eb' : '#fff'
  })

  const githubSpring = useSpring({
    marginLeft: 0,
    width: githubHover ? '100%' : '0%',
    backgroundColor: githubHover ? '#2563eb' : '#fff'
  })

  const htmlSpring = useSpring({
    marginLeft: 0,
    width: htmlHover ? '100%' : '0%',
    backgroundColor: htmlHover ? '#2563eb' : '#fff'
  })

  const sqlSpring = useSpring({
    marginLeft: 0,
    width: sqlHover ? '100%' : '0%',
    backgroundColor: sqlHover ? '#2563eb' : '#fff'
  })

  return (
    <div className="relative w-full h-full overflow-hidden py-12 bg-white text-black">
      {/* Designed by button */}
      <p className="absolute left-8 bottom-4 text-xs text-gray-500">Designed by Luke Sutor, 2021</p>

      {/* Back to top button */}
      <button onClick={() => window.scrollTo(0, 0)} 
      className="absolute bottom-4 right-8 text-gray-500 hover:text-black focus:outline-none">Back to top</button>

      <div className="flex flex-row justify-around w-11/12 mx-auto">
        <div className="flex flex-col w-1/5">
          <p className="text-2xl font-bold mb-6 whitespace-nowrap" style={{ color: '#9039FF' }}>Networks 📱</p>

          {/* Instagram */}
          <a href="https://www.instagram.com/luke.sutor/" target="_blank" onMouseOver={() => setInstagramHover(true)} 
          onMouseLeave={() => setInstagramHover(false)} 
          className="relative flex text-lg font-semibold text-gray-500 hover:text-blue-600 mb-6 w-min">Instagram
          <animated.div style={instagramSpring} className="absolute bottom-0 h-0.5 mx-auto bg-white" /></a>

          {/* Github */}
          <a href="https://github.com/LukeSutor" target="_blank" onMouseOver={() => setGithubHover(true)} 
          onMouseLeave={() => setGithubHover(false)}
            className="relative flex text-lg font-semibold text-gray-500 hover:text-blue-600 w-min">Github
            <animated.div style={githubSpring} className="absolute bottom-0 h-0.5 mx-auto bg-white" /></a>
        </div>
        <div className="flex flex-col w-64">
          <p className="text-2xl font-bold mb-6 whitespace-nowrap" style={{ color: '#F147F0' }}>Say Hello  👋</p> 
          {/* Contact Me 📧 */}

          {/* Email form */}
          <form onSubmit={onSubmit} >
            <label for="email" className="text-sm text-gray-500 font-semibold">Email</label>
            <input required={true} onChange={(e) => setEmailName(e.target.value)} type="email" id="email" 
            className="w-full mb-4 border-2 border-gray-500 focus:border-black rounded-md focus:outline-none" />
            <label for="message" className="text-sm text-gray-500 font-semibold">Message</label>
            <textarea required={true} onChange={(e) => setMessage(e.target.value)} rows={3} id="message" 
            className="border-2 border-gray-500 focus:border-black rounded-md focus:outline-none resize-none w-full" />
            <button className="flex justify-center mx-auto px-4 py-0.5 bg-blue-600 hover:bg-blue-700 rounded-md 
            text-sm text-white font-semibold focus:outline-none">Send</button>
          </form>
        </div>
        <div className="flex flex-col w-1/5">
          <p className="text-2xl font-bold mb-6 whitespace-nowrap" style={{ color: '#FF6E6B' }}>Certifications 📜</p>
          {/* HTML Certificate */}
          <a href="" target="_blank" onMouseOver={() => setHTMLHover(true)} onMouseLeave={() => setHTMLHover(false)}
            className="relative flex text-lg font-semibold text-gray-500 hover:text-blue-600 mb-6 w-min whitespace-nowrap">
              HTML Certificate<animated.div style={htmlSpring} className="absolute bottom-0 h-0.5 mx-auto bg-white" /></a>

          {/* SQL Certificate */}
          <a href="" target="_blank" onMouseOver={() => setSQLHover(true)} onMouseLeave={() => setSQLHover(false)}
            className="relative flex text-lg font-semibold text-gray-500 hover:text-blue-600 mb-6 w-min whitespace-nowrap">
              SQL Certificate<animated.div style={sqlSpring} className="absolute bottom-0 h-0.5 mx-auto bg-white" /></a>
        </div>
      </div>

    </div>
  );
}

export default Footer