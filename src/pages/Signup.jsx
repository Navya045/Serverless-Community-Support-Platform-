import React from 'react';
import { Link } from 'react-router-dom';
import volunteerIcon from './../assets/vol.jpeg';
import organizeIcon from './../assets/organize.webp';

const Register = () => {
  // Inline style for uniform image size
  const imageSize = { width: '400px', height: '400px' };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
      <h1 className="text-2xl font-bold mb-6">Register</h1>
      <div className="flex flex-wrap justify-center gap-5">
        <Link to="/register/volunteer" className="flex flex-col items-center">
          <img src={volunteerIcon} alt="Volunteer" style={imageSize} />
          <span className="mt-2">Register as a Volunteer</span>
        </Link>
        <Link to="/register/organize" className="flex flex-col items-center">
          <img src={organizeIcon} alt="Organize" style={imageSize} />
          <span className="mt-2">Register to Organize</span>
        </Link>
      </div>
    </div>
  );
}

export default Register;