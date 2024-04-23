import React from 'react';
import Breadcrumb from '../components/Breadcrumbs/Breadcrumb';
import SidenavVolunteer from '../components/SidenavVolunteer';
import AdminnavVolunteer from '../components/AdminnavVolunteer';

const documents = [
  { name: 'Government ID Proof', status: 'Submitted' },
  { name: 'Background Check Consent', status: 'Pending' },
  { name: 'Address Proof', status: 'Submitted' },
  { name: 'Health Safety Agreement', status: 'Pending' },
  // ... add other document requirements as needed
];

const DocumentsVolunteer = () => {
  
  const handleDocumentSubmit = (documentName) => {
    // Handle the document submit action here
    alert(`Submit document for: ${documentName}`);
    // You would typically handle file upload here or redirect to a form to submit the document
  };
  
  return (
    <div className='flex w-full bg-gray-100'>
      <SidenavVolunteer />
      <div className="flex flex-1 flex-col">
        <AdminnavVolunteer />
        <Breadcrumb pageName="Volunteer Documents" />
        <div className="p-4">
          <h1 className="text-xl font-semibold mb-4">Required Documents</h1>
          <div className="space-y-4">
            {documents.map((doc, index) => (
              <div key={index} className="border-b pb-2 flex justify-between items-center">
                <span className="text-gray-700">{doc.name}</span>
                <div>
                  <span className={`font-semibold ${doc.status === 'Pending' ? 'text-red-500' : 'text-green-500'}`}>
                    {doc.status}
                  </span>
                  {doc.status === 'Pending' && (
                    <button
                      onClick={() => handleDocumentSubmit(doc.name)}
                      className="ml-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    >
                      Submit
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DocumentsVolunteer;