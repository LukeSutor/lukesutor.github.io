import React from 'react'
import './css/footer.css'

export default function Footer() {

  return (
    <div className="relative w-full h-full overflow-hidden py-12 bg-white text-black">
      {/* Designed by button */}
      <p className="absolute left-4 md:left-8 bottom-4 text-xs text-gray-500">Designed by Luke Sutor, 2021</p>

      {/* Back to top button */}
      <button onClick={() => window.scrollTo(0, 0)}
        className="absolute right-4 md:right-8 bottom-4 text-xs md:text-base text-gray-500 hover:text-black focus:outline-none">Back to top</button>

      <div className="w-min md:w-full flex flex-col md:flex-row justify-around mx-auto">
        {/* Email */}
        <a href="mailto:lukesutor@gmail.com" className="email w-min mx-auto md:mx-0 text-xl md:text-2xl font-bold mb-6 md:mb-6 whitespace-nowrap" style={{ color: '#9039ff' }}>Say hello 👋<div className="email-underline" /></a>

        {/* Github */}
        <a href="https://github.com/LukeSutor" target="_blank" className="github w-min text-xl md:text-2xl font-bold mb-3 md:mb-6 whitespace-nowrap" style={{ color: '#f147f0' }}>See my projects 👨‍💻<div className="github-underline" /></a>
      </div>
    </div>
  );
}