
import React from 'react'


import { useContext } from "react";
import { Link } from "react-router-dom";

import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import StoreIcon from "@mui/icons-material/Store";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import ChatIcon from '@mui/icons-material/Chat';
import ReviewsIcon from '@mui/icons-material/Reviews';

const SidenavVolunteer = () => {
  
  return (
    <div className="flex flex-col border-r border-gray-200 bg-[#29292d] min-h-screen w-60">
      <div className="h-12 flex items-center justify-center p-10">
        <Link to="/Dashboard" className="no-underline">
          <span className="text-2xl font-bold text-[#785f24]">GatherCloud</span>
        </Link>
      </div>
      <hr className="border-t border-gray-200" />
      <div className="flex-grow p-2.5 text-xl">
        <ul className="list-none m-5 p-0">
        <Link to="/Dashboard" style={{ textDecoration: "none" }}>

          {/* <p className="text-xs font-bold text-gray-600 mt-4 mb-2">MAIN</p> */}
          <li className="flex items-center px-1.25 py-1.25 cursor-pointer  mb-7">
            <DashboardIcon className="text-base text-[#785f24]" />
            <span className="text-xl font-semibold text-gray-600 ml-2.5">Dashboard</span>
          </li>
          </Link>
          {/* ... other menu items ... */}

          <Link to="/Events" style={{ textDecoration: "none" }}>
            <li className='flex items-center px-1.25 py-1.25 cursor-pointer mb-7'> 
              <PersonOutlineIcon className="text-base text-[#785f24]" />
              <span className="text-xl font-semibold text-gray-600 ml-2.5">Events</span>
            </li>
          </Link>
          <Link to="/addevents" style={{ textDecoration: "none" }}>
            <li className='flex items-center px-1.25 py-1.25 cursor-pointer  mb-7'>
              <StoreIcon className="text-base text-[#785f24]" />
              <span className="text-xl font-semibold text-gray-600 ml-2.5">Documents</span>
            </li>
          </Link>
          <Link to="/Orders" style={{ textDecoration: "none" }}>

          <li className='flex items-center px-1.25 py-1.25 cursor-pointer mb-7'>
            <CreditCardIcon className="text-base text-[#785f24]" />
            <span className="text-xl font-semibold text-gray-600 ml-2.5">Profile</span>
          </li>
          </Link>
          <Link to="/reviews" style={{ textDecoration: "none" }}>
          <li className='flex items-center px-1.25 py-1.25 cursor-pointer mb-7'>
            <ReviewsIcon className="text-base text-[#785f24]" />
            <span className="text-xl font-semibold text-gray-600 ml-2.5">Applications</span>
          </li> 
          </Link>   
          <Link to="/Home" style={{ textDecoration: "none" }}>        
          <li className='flex items-center px-1.25 py-1.25 cursor-pointer  mb-7'>
            <ExitToAppIcon className="text-base text-[#785f24]" />
            <span className="text-xl font-semibold text-gray-600 ml-2.5">Logout</span>
          </li>
          </Link>
        </ul>
      </div>
      
    </div>
  );
};

export default SidenavVolunteer;
