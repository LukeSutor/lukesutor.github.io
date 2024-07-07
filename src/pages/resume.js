import React, { useEffect } from "react"
import resume from "../images/luke_resume.pdf"

export default function Resume() {
  useEffect(() => {
    document.title = "Resume | Marharyta Krylova"
  }, [])

  return (
    <main className="w-screen h-screen">
      <iframe
        src={resume}
        title="Marharyta Krylova Resume"
        frameborder="0"
        height="100%"
        width="100%"
      ></iframe>
    </main>
  )
}
