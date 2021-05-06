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

      <div className="flex flex-col md:flex-row">
        <div className="flex flex-col w-full text-center">
          <p className="text-xl md:text-2xl font-bold mb-3 md:mb-6 whitespace-nowrap" style={{ color: '#9039ff' }}>Say hello 👋</p>
          {/* Email */}
          <a href="mailto:lukesutor@gmail.com"
            className="email text-base md:text-lg font-semibold text-black text-opacity-60 hover:text-blue-600 mb-6 mx-auto w-min whitespace-nowrap">lukesutor@gmail.com 📧
          <div className="email-underline" /></a>

        </div>
        <div className="flex flex-col w-full text-center">
          <p className="text-xl md:text-2xl font-bold mb-3 md:mb-6 whitespace-nowrap" style={{ color: '#f147f0' }}>See my projects 📋</p>
          {/* Github */}
          <a href="https://github.com/LukeSutor" target="_blank"
            className="github text-base md:text-lg font-semibold mb-6 mx-auto w-min whitespace-nowrap">Github 👨‍💻
            <div className="github-underline" /></a>
        </div>
      </div>
    </div>
  );
}