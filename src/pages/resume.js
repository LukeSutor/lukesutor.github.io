import React, { useEffect } from "react"
import resume from "../images/luke_resume.pdf"

export default function Resume() {
  useEffect(() => {
    document.title = "Resume | Luke Sutor"
  }, [])

  return (
    <main className="w-screen h-screen">
      <iframe
        src={resume}
        title="Luke Sutor Resume"
        frameborder="0"
        height="100%"
        width="100%"
      ></iframe>
    </main>
  )
}
