
import React, { useState, useEffect } from 'react';
import SidenavVolunteer from '../components/SidenavVolunteer';
import Orders from './Orders';
import MapView from './MapView';
import AdminnavVolunteer from '../components/AdminnavVolunteer';

const DashboardV = () => {
  const [totalOrders, setTotalEvents] = useState(0);
  const [orderLocationsCount, setOrderLocationsCount] = useState(0);
  const [orderParticipation, setorderParticipation] = useState(0);
  const [orderRegistered, setorderRegistered] = useState(0);

  useEffect(() => {
    // Fetch or calculate the total number of orders and locations
    // ...

    setTotalEvents(12); // Simulated total orders
    setOrderLocationsCount(5); // Simulated order locations count
    setorderParticipation(2);
    setorderRegistered(5)

  }, []);

  // Define card style
  const cardStyle = "bg-white p-4 rounded-lg shadow-md flex flex-col items-center justify-center w-full";

  return (
    <div className='flex w-full'>
      <SidenavVolunteer />
    <div className="flex flex-1 flex-col">
      <AdminnavVolunteer />
      
      <div className="flex flex-1 flex-col md:flex-row p-5 gap-4">
      
        {/* Left column for widgets */}
        <div className="md:w-1/4 flex flex-col gap-4">
          {/* Total Orders Widget */}
          <div className={cardStyle}>
            <h3 className="font-semibold text-md">Total Events</h3>
            <p className="text-xl">{totalOrders}</p>
          </div>
          
          {/* Order Locations Count Widget */}
          <div className={cardStyle}>
            <h3 className="font-semibold text-md">Event Locations</h3>
            <p className="text-xl">{orderLocationsCount}</p>
          </div>
          
          <div className={cardStyle}>
            <h3 className="font-semibold text-md">Event Participated</h3>
            <p className="text-xl">{orderParticipation}</p>
          </div>

          <div className={cardStyle}>
            <h3 className="font-semibold text-md">Event Registered</h3>
            <p className="text-xl">{orderRegistered}</p>
          </div>
          {/* ... Add more widgets as needed */}
        </div>

        


        {/* Right column for map and latest orders */}
        <div className="md:w-3/4 flex flex-col gap-4">
          {/* Order Locations Map */}
          <div>
            <h3 className="font-semibold text-lg text-gray-500 mb-4">Event Locations</h3>
            <div className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center justify-center">
              {/* Map Component */}
              <MapView />
            </div>
          </div>

         
         
        </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardV;

