import React from 'react';
import organizeIcon from './../assets/organize.webp';
import { useNavigate } from 'react-router-dom';

const OrganizationRegister = () => {
  const navigate = useNavigate(); 
  return (
    <section className="bg-gray-10 min-h-screen flex items-center justify-center">
    <div className="max-w-7xl mx-auto flex items-start justify-between p-4 w-full">
      <div className="organization-register w-1/2">
        <h1 className="text-lg font-bold mb-4">Register to Organize an Event</h1>
        <form className="grid grid-cols-1 gap-4">
          {/* Organization Information */}
          <div>
            <label htmlFor="orgName" className="block">Organization Name <span className="text-red-500">*</span></label>
            <input type="text" id="orgName" name="orgName" required className="mt-1 block w-full max-w-lg px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"/>
          </div>
          <div>
            <label htmlFor="orgType" className="block">Type of Organization <span className="text-red-500">*</span></label>
            <select id="orgType" name="orgType" required className="mt-1 block w-full max-w-lg px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500">
              <option value="">Select Type</option>
              <option value="nonProfit">Non-Profit</option>
              <option value="corporate">Corporate</option>
              <option value="educational">Educational Institution</option>
              <option value="community">Community Group</option>
            </select>
          </div>
          <div>
            <label htmlFor="contactName" className="block">Contact Name <span className="text-red-500">*</span></label>
            <input type="text" id="contactName" name="contactName" required className="mt-1 block w-full max-w-lg px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"/>
          </div>
          <div>
            <label htmlFor="Email" className="block">Email <span className="text-red-500">*</span></label>
            <input type="email" id="Email" name="Email" required className="mt-1 block w-full max-w-lg px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"/>
          </div>
          <div>
            <label htmlFor="password" className="block">Password <span className="text-red-500">*</span></label>
            <input type="password" id="password" name="password" required className="mt-1 block w-full max-w-lg px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"/>
          </div>
          {/* Submission */}
          <div className="mt-4 flex justify-start gap-4">
  <button type="submit" onClick={() => navigate('/dashboard')} className="px-4 py-2 bg-[#00df9a] text-white rounded-md hover:bg-blue-600">Register Event</button>
  <button type="button" onClick={() => navigate('/')} className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600">Cancel</button>
</div>

        </form>
      </div>
      <div className="w-1/2 pl-5">
        <img className="rounded-2xl" src={organizeIcon} alt="Login" />
      </div>
    </div>
</section>

  );
}

export default OrganizationRegister;
