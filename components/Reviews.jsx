import React from 'react';
import { Carousel } from "@material-tailwind/react";

const Reviews = () => {
  return (
    <div className="relative min-h-screen overflow-hidden font-spacegrotesk flex flex-col">
      <img
        src="/s3.png"
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="relative text-white m-3 mt-10">
        <div className=" ml-16 flex flex-row space-x-4 items-center gap-6">
          <h1 className="text-6xl font-bold">Reviewed by the Community. Trusted by{' '}<span className="text-[#74D5FF]">Professionals</span>

          </h1>
          
        </div>
        <img src="/raydown.png" alt="" className='relative ml-[230px] -mt-16'/>
      </div>
      <div className="relative flex text-white justify-center mt-16 ml-9 gap-6 h-full">
        <div className="flex-1 flex-col flex p-6 pl-8 pr-8 bg-white/20 max-w-md text-center rounded-[30px]">
            <h1 className="text-white text-md">
            Freelancers love how easy TalentCollab makes it to find the right projects and build teams. Employers trust the platform for its reliable, AI-powered matching system and transparent performance ratings, ensuring they hire only the best for their projects.
            </h1>
            <h1 className='uppercase text-[#E1AB20] font-extrabold text-3xl mt-5'>Taniya Mishra</h1>
            <h1 className=''>Photographer</h1>
        </div>

        <div className="flex-1 flex-col flex p-6 pl-8 pr-8 bg-white/20 max-w-md text-center rounded-[30px]">
            <h1 className="text-white text-md">
            TalentCollab was designed with freelancers in mind, offering tools for growth, collaboration, and mentorship. It{'’'}s also supported by industry professionals, ensuring freelancers have access to top-tier resources and opportunities to continuously enhance their skills.            </h1>
            <h1 className='uppercase text-[#E1AB20] font-extrabold text-3xl mt-5'>Rick Wright</h1>
            <h1 className=''>Model</h1>
        </div>

        <div className="flex-1 flex-col flex p-6 pl-8 pr-8 bg-white/20 max-w-md text-center rounded-[30px]">
            <h1 className="text-white text-md">
            Freelancers appreciate the seamless experience TalentCollab offers, from skill-based team matching to mentorship programs. Employers value the platform’s focus on transparency and quality, knowing they can rely on verified talent with real-time performance feedback.            </h1>
            <h1 className='uppercase text-[#E1AB20] font-extrabold text-3xl mt-5'>KRITI MAHAWAR</h1>
            <h1 className=''>Content Writer</h1>
        </div>
    </div>

        <div className='relative flex flex-row justify-around mt-10'>
            <div className='flex-1 flex justify-center items-center relative'>
                <img src="/s5.png" alt=""  className=''/>
                <button className="absolute inset-0 flex items-center justify-center">
                    <img src="/s6.png" alt="" />
                </button>        
            </div>

            <div className='flex-1 flex justify-center items-center relative'>
                <img src="/s5.png" alt=""  className=''/>
                <button className="absolute inset-0 flex items-center justify-center">
                    <img src="/s7.png" alt="" />
                </button>        
            </div>
            
    </div>

    </div>
  );
};

export default Reviews;
