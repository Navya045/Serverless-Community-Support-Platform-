import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import LoginNavBar from '../components/LoginNavBar';
import { renderStars } from '../components/utils';
import Sidenav from '../components/Sidenav';
import Adminnav from '../components/Adminnav';
import Breadcrumb from '../components/Breadcrumbs/Breadcrumb';

// Mock function to generate random details
const getRandomDetails = () => {
  const cities = ['Bloomington', 'Indianapolis', 'Carmel', 'Fishers', 'Evansville'];
  const times = ['5:00 PM', '3:00 PM', '6:00 PM'];
  const requirements = ['Bring gifts for elderly', 'Volunteer for setup', 'Provide transportation'];
  const dressCodes = ['Casual festive', 'Formal attire', 'Sports wear'];
  const organizations = ['Community Center', 'Local NGO', 'Sports Club'];

  return {
    city: cities[Math.floor(Math.random() * cities.length)],
    time: `Dec 25, 2021, ${times[Math.floor(Math.random() * times.length)]}`,
    requirements: requirements[Math.floor(Math.random() * requirements.length)],
    dressCode: dressCodes[Math.floor(Math.random() * dressCodes.length)],
    organization: organizations[Math.floor(Math.random() * organizations.length)]
  };
};

const OrderFormC = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const [eventDetails, setEventDetails] = useState(getRandomDetails());

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Registered to the event!');
    
  };

  return (
    <div className='flex w-full bg-grey-100'> {/* Adjusted background color to light grey */}
    <Sidenav />
    <div className="flex flex-1 flex-col bg-white"> {/* Ensured background is always white */}
      <Adminnav />
      <Breadcrumb pageName=" Event Details" />
      <div className="flex flex-wrap justify-center p-20">
        {/* Event Details Section */}
        <div className="bg-white max-w-2xl mx-auto p-8 shadow-lg w-full rounded-2xl">
          <h2 className="text-3xl font-bold text-center text-[#00df9a] mb-6">Community Event Registration</h2>
          <p><strong>Event:</strong> Christmas Celebration with our Grandpals!</p>
          <p><strong>Description:</strong> Nothing will ever give you the heart to face another year, than a Christmas tree in the home and the people you love around it. These silver-haired lovelies deserved both.</p>
          <p><strong>City:</strong> {eventDetails.city}</p>
          <p><strong>Time:</strong> {eventDetails.time}</p>
          <p><strong>Requirements:</strong> {eventDetails.requirements}</p>
          <p><strong>Dress Code:</strong> {eventDetails.dressCode}</p>
          <p><strong>Organization:</strong> {eventDetails.organization}</p>

          {/* Registration Form */}
          <form onSubmit={handleSubmit} className="mt-4">
            <label className="block mb-4">
              <span className="text-gray-700">Your Name:</span>
              <input type="text" placeholder="Enter your name" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm" required />
            </label>
            <button type="submit" className="bg-[#00df9a] hover:bg-[#00b882] text-white font-medium py-2 px-4 rounded">
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
    </div>
  );
};

export default OrderFormC;
