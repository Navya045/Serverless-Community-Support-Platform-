import React from 'react';
import { ReactTyped } from "react-typed";
import { useNavigate } from 'react-router-dom';
import bg from './../assets/cs1.jpeg'

const Hero = () => {
  const navigate = useNavigate(); 
  const navigateToSearch = () => {
    navigate('/order'); 
  };
  return (
    <div 
    style={{ backgroundImage: `url(${bg})` }}
    className="bg-cover bg-center h-screen text-black"
  >
      <div className='max-w-[1000px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
        <p className='text-[#785f24] font-bold text-3xl p-2'>
        Connecting Dots, Creating Experiences - GatherCloud. 
        </p>
        
        <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>
        Elevate Your Community Experience.  
        </h1>
        <div className='flex justify-center items-center flex-wrap md:flex-nowrap'>
        <p className='text-5xl font-bold py-4 whitespace-nowrap'>
        Transforming Community Interaction:
        </p>
        <ReactTyped className='text-5xl font-bold pl-4'
          strings={['Inclusivity', 'Engagement', 'Innovation']}
          typeSpeed={120}
          backSpeed={140}
          loop />
        </div>

        <p className='md:text-3xl text-xl font-bold text-gray-500 mt-4 mb-10'>Effortless Connectivity: Uniting Communities, One Event at a Time.</p>
        <button onClick={navigateToSearch} className='bg-[#785f24] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-white'>Get Started</button>
      </div>
    </div>
  );
};

export default Hero;
