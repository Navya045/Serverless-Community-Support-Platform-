import React from 'react';

const OrganizationRegister = () => {
  return (
    <div className="organization-register max-w-4xl mx-auto p-4">
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
        <div className="mt-4">
          <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">Register Event</button>
        </div>
      </form>
    </div>
  );
}

export default OrganizationRegister;
