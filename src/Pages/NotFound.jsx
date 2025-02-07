import React from 'react'
import { Link } from 'react-router'

const NotFound = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 w-[50%] ">
      <h1 className="text-4xl font-extrabold text-[var(--main-color)] hover:text-[var(--main2-color)]">Sorry! Page Not Found</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur expedita ullam modi, voluptatibus aliquid ratione dignissimos, non neque et corporis adipisci esse! Explicabo eos quo ut! Iure sit nemo minima.</p>
      <button >
        <Link to="/home" className="text-sm font-semibold text-[var(--main-color)] hover:text-[var(--main2-color)]">
        Back to Home
        </Link>
      </button>
     
    </div>
  </div>
  )
}

export default NotFound