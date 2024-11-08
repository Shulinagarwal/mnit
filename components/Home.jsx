import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="relative min-h-screen overflow-hidden font-spacegrotesk">
        <img
          src="/s11.png"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        /> 
        <div className="relative z-10 flex flex-row justify-between items-center p-6 text-white">
          <div className="m-5 ml-16 flex flex-row space-x-4 items-center gap-6">
            <img src="/s2.png" alt="" className="bg-[#C7C7C7] pr-4 pl-4 rounded-lg opacity-60" />
            <h1 className="text-xl font-semibold ">HOME</h1>
            <Link to='/choose'><button className="text-xl font-semibold capitalize">TEAMIFY</button>
            </Link>
            </div>

          <div className="flex flex-row gap-6 text-spacegrotesk">
            <h1 className="text-xl font-semibold capitalize">LOGIN</h1>
            <button className="px-3 py-1 mr-4 bg-[#C7C7C7] text-black rounded-lg opacity-60 -mt-1">SIGN UP</button>
          </div>
        </div>

        <div className="absolute bottom-16 left-14 text-white flex flex-col items-start space-y-4 z-10">
          <h1 className="text-8xl font-normal"><b className="font-bold">TEAMIFY</b> PROTOCOL</h1>
          <p className="text-3xl w-[80%]">Join India's Smart Freelance Team Marketplace – Powered by AI & Community!</p>
          <button className="px-4 py-2 mt-2 bg-black rounded-lg text-white font-semibold">GET STARTED</button>
        </div>
      </div>
  )
}

export default Home