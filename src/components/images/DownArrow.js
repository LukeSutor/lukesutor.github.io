import React from 'react'

function DownArrow() {
  return (
    <svg height="10vh" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384.928 384.928" className="absolute bottom-0 right-8">
      <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="20%" stopColor="#9039ff" />
        <stop offset="50%" stopColor="#f147f0" />
        <stop offset="80%" stopColor="#ff6e6b" />
      </linearGradient>
      <path id="Arrow_Download" d="M321.339,245.334c-4.74-4.692-12.439-4.704-17.179,0l-99.551,98.564V12.03
		c0-6.641-5.438-12.03-12.151-12.03s-12.151,5.39-12.151,12.03v331.868l-99.551-98.552c-4.74-4.704-12.439-4.704-17.179,0
		s-4.74,12.319,0,17.011l120.291,119.088c4.692,4.644,12.499,4.644,17.191,0l120.291-119.088
		C326.091,257.653,326.091,250.038,321.339,245.334C316.599,240.642,326.091,250.038,321.339,245.334z" fill="url(#grad1)" />
    </svg>
  );
}

export default DownArrow