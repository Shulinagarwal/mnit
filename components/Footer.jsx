import React from 'react'

const Footer = () => {
  return (
    <div className="relative h-[460px] overflow-hidden font-spacegrotesk flex flex-col">
        <img
                src="/s12.png"
                alt=""
                className="absolute inset-0 w-full h-full object-cover"
            />


        <div className='relative flex flex-row '>

            <div className='flex-1 flex flex-col text-white'>
                <div className='flex justify-start ml-20 opacity-75'>
                    <img src="/s13.png" alt="" />
                </div>

                <div className='flex flex-1 flex-col justify-start ml-20 gap-16'>
                        <h1 className='text-2xl font-bold w-[50%]'>Contact us at 23ucs711@lnmiit.ac.in</h1>
                        <h1 className='text-xl font-medium'>TeamName : Teamify</h1>
                </div>
            </div>
            <div className='flex-1 flex flex-col '>
            <div className='flex-1 flex flex-row text-white'>
                        <div className='flex-1 flex flex-col gap-6'> {/* Fixed column styling */}
                                <h1 className='text-3xl font-bold'>Customer Care</h1>
                                <h1 className='text-sm font-light text-neutral-600'>Faq</h1>
                                <h1 className='text-sm font-light text-neutral-600'>Shipping & Returns</h1>
                                <h1 className='text-sm font-light text-neutral-600'>Store Policy</h1>
                        </div>

                        <div className='flex-1 flex  flex-col gap-6 ml-16'> {/* Fixed column styling */}
                                <h1 className='text-3xl font-bold'>Connect</h1>
                                <h1 className='text-sm font-light text-neutral-600'>Instagram</h1>
                                <h1 className='text-sm font-light text-neutral-600'>Facebook</h1>
                                <h1 className='text-sm font-light text-neutral-600'>LinkedIn</h1>
                                <h1 className='text-sm font-light text-neutral-600'>Contact</h1>
                        </div>

                        <div className='flex-1 flex flex-col gap-6'> {/* Fixed column styling */}
                                <h1 className='text-3xl font-bold'>The Company</h1>
                                <h1 className='text-sm font-light text-neutral-600'>About</h1>
                                <h1 className='text-sm font-light text-neutral-600'>Sustainability</h1>
                                <h1 className='text-sm font-light text-neutral-600'>Accessibility</h1>
                                <h1 className='text-sm font-light text-neutral-600'>Store Locator</h1>
                        </div>
                </div>

                <div className='flex-1 flex flex-col text-white mt-10'>
                    <div className='flex'>
                    <h1 className='font-normal text-2xl w-[50%]'>Join our newsletter to stay up to date on our new game releases.</h1>

                    </div>
                    <br />
                    <div className='flex flex-row'>
                    <input type="email" placeholder='Email' className='w-[50%] p-4 bg-[#404040] opacity-40 rounded-lg' />
                        <button className='bg-black ml-4 p-4 rounded-lg'>Sign Up</button>
                    </div>
                </div>
            </div>


        </div>

        <div className=' relative flex justify-center text-white mt-7'>

            <h1>@2024 All Rights Reserved</h1>

        </div>
    </div>
  )
}

export default Footer