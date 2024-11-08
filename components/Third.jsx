import React from 'react';

const Third = () => {
  return (
    <div className="relative min-h-screen overflow-hidden font-spacegrotesk flex flex-col">
      <img
        src="/s3.png" 
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
      />
      
      <div className="relative flex flex-col lg:flex-row text-white mt-16 px-4 lg:px-0">
        
        <div className="flex-1 flex justify-center lg:justify-end">
          <img src="/s14.png" alt="" className="w-[80%] lg:w-full" />
        </div>

        <div className="flex-1 flex flex-col items-start mt-10 lg:mt-28 w-full lg:w-[80%]">
          <h1 className="text-4xl lg:text-7xl font-medium ml-4 lg:ml-8 underline underline-offset-4 decoration-4">
            OUR MISSION
          </h1>
          <p className="ml-4 lg:ml-10 text-lg lg:text-xl mt-10 lg:mt-20 w-full lg:w-[80%]">
            <b className="font-medium text-2xl lg:text-4xl">TEAMIFY’s</b> mission is to create a Freelancing Opportunities Platform for India. Our mission is to bridge the gap between talented freelancers and forward-thinking employers across India. We aim to create an innovative, trustworthy, and user-friendly marketplace where gig workers and project-based professionals can discover meaningful work and thrive, and businesses can easily access skilled talent tailored to their unique needs.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Third;
