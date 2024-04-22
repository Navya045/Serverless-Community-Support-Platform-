import React from 'react';

import { Link , useNavigate } from 'react-router-dom';
import volunteerIcon from './../assets/vol.jpeg';
import organizeIcon from './../assets/organize.webp';

const Register = () => {
  // Inline style for uniform image size
  const imageSize = { width: '400px', height: '400px' };
  const navigate = useNavigate(); 
  const navigateToSearch = () => {
    navigate('/Login'); 
  };

  return (
    <section className="bg-gray-10 min-h-screen flex flex-col items-center justify-center">
    <div className=" flex flex-col items-center">
      <h1 className="text-2xl font-bold my-6">Register</h1>
      <div className="flex flex-wrap justify-center gap-5">
        <Link to="/register/volunteer" className="flex flex-col items-center">
          <img src={volunteerIcon} alt="Volunteer" style={{ width: '300px', height: '300px' }} />
          <span className="mt-2">Register as a Volunteer</span>
        </Link>
        <Link to="/register/organize" className="flex flex-col items-center">
          <img src={organizeIcon} alt="Organize" style={{ width: '300px', height: '300px' }} />
          <span className="mt-2">Register to Organize</span>
        </Link>
      </div>
    </div>
    <div className="mt-3 text-l flex justify-center items-center w-full text-[#00df9a]">
        <p>Already have an account?</p>
        <button onClick={navigateToSearch} className="ml-2 py-2 px-5 bg-white border rounded-xl hover:scale-110 duration-300">Login</button>
    </div>
</section>

  );
}

export default Register;