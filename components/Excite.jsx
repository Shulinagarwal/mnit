import React from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Excite = () => {
    const navigate = useNavigate();

    return (
        <div className="relative min-h-screen overflow-hidden font-spacegrotesk flex flex-col">
            <img
                src="/s3.png"
                alt=""
                className="absolute h-full w-full object-cover"
            />
            <div className='relative flex flex-col items-center justify-center text-white mt-10'>
                <h1 className='text-6xl font-extrabold'>What’s <span className='text-[#74D5FF]'>New & Exciting!</span></h1>
                <br />
                <h1 className='text-xl font-extralight gap-7'>“Get latest updates on the workings of future technology”</h1>
            </div>

            
            <div className="relative flex text-white justify-center mt-16 ml-7 gap-20 h-full">
                <div className="flex-1 flex-col flex max-w-sm text-center rounded-[30px]">
                    <img src="/s10.png" alt="" />
                </div>
                <div className="flex-1 flex-col flex max-w-sm text-center rounded-[30px]">
                    <img src="/s9.png" alt="" />
                </div>
                <div className="flex-1 flex-col flex max-w-sm text-center rounded-[30px]">
                    <img src="/s8.png" alt="" />
                </div>
            </div>

           
            <div className="relative flex text-white justify-center mt-16 ml-9 gap-6 h-full">
                
                <div className="flex-1 flex-col flex p-6 pl-8 pr-8 max-w-md text-center rounded-[30px]">
                    <h1 className='uppercase font-extrabold text-xl mb-5'>AI-Powered Team Assembly Now Live!</h1>
                    <h1 className="text-white text-md">
                        Teamify’s new AI-driven team matching feature is officially live! Say goodbye to the hassle of searching for the right freelancer—our AI now effortlessly assembles the perfect team based on skills, experience. Try it out!
                    </h1>
                    <button className='p-2 bg-[#2D3648] w-[20%] rounded-lg mt-2'>View</button>
                </div>
             
                <div className="flex-1 flex-col flex p-6 pl-8 pr-8 max-w-md text-center rounded-[30px]">
                    <h1 className='uppercase font-extrabold text-xl mb-5'>New Mentorship Program Launched</h1>
                    <h1 className="text-white text-md">
                        Freelancers, you asked, and we delivered! Our new mentorship and skills exchange program is here. Connect with industry experts, grow your skills, and expand your network. The perfect opportunity to level up your freelancing game!
                    </h1>
                    <button className='p-2 bg-[#2D3648] w-[20%] rounded-lg mt-2'>View</button>
                </div>
               
                <div className="flex-1 flex-col flex p-6 pl-8 pr-8 max-w-md text-center rounded-[30px]">
                    <h1 className='uppercase font-extrabold text-xl mb-5'>Real-Time Performance Scores</h1>
                    <h1 className="text-white text-md">
                        Get ready to make smarter hiring decisions with Teamify’s real-time performance scores. Track communication, reliability, and project quality in one place. It’s transparency and trust at your fingertips!
                    </h1>
                    <button className='p-2 bg-[#2D3648] w-[20%] rounded-lg mt-2'>View</button>
                </div>
            </div>

          
            <div className='relative flex flex-col justify-center gap-10 mt-10'>
                <div className='relative text-white flex flex-col items-center'>
                    <h1 className='uppercase text-5xl font-extrabold'>The Fight Begins with you.</h1>
                    <h1 className='text-lg font-bold'>Let your Talent Shine.</h1>
                </div>

                
                <div className='text-black flex justify-center mb-6'>
                    <Link to="/jobs">
                        <button className='p-3 bg-[#4FA9E2] text-white rounded-lg text-lg'>
                            Click here
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Excite;
