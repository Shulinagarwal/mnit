import React from 'react'
import Accordion from "../components/Accordion";
const Page = () => {
  return (
    <div className="relative min-h-screen overflow-hidden font-spacegrotesk flex flex-col">
      <img
        src="/s3.png"
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
      />
        <div className=' relative flex justify-center text-white mt-10'>
            <h1 className='text-6xl font-extrabold'>Got <span className="text-[#74D5FF]">Questions?</span> We’ve Got <span className="text-[#74D5FF]">Answers</span>!</h1>
        </div>

        <div className="relative flex flex-col text-white mt-7 w-full flex-grow font-extrabold text-2xl">
        <div className="  w-full max-w-3xl mx-auto border-spacing-2 m-10">
          <Accordion className="m-10"/>    
        </div>
      </div>
      
      </div>
  )
}

export default Page