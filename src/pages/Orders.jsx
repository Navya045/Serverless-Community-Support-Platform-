import React from 'react';

import Breadcrumb from '../components/Breadcrumbs/Breadcrumb';
import userThree from '../images/user/user-03.png';
import Sidenav from '../components/Sidenav';
import Adminnav from '../components/Adminnav';

const Orders = () => {
  return (
    <div className='flex w-full bg-gray-100'> {/* Background color for overall page */}
      <Sidenav />
      <div className="flex flex-1 flex-col">
        <Adminnav />
        <div className="mx-auto max-w-7xl"> {/* Adjusted for a maximum width */}
          <Breadcrumb pageName="Settings"  />

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            <div className="md:col-span-3">
              <div className="rounded-sm border border-gray-300 bg-white shadow-sm">
                <div className="border-b border-gray-200 py-4 px-7">
                  <h3 className="font-medium text-black">
                    Personal Information
                  </h3>
                </div>
                <div className="p-7">
                  <form action="#">
                    <div className="mb-6 flex flex-col gap-6 sm:flex-row">
                      <div className="flex-1">
                        <label className="mb-3 block text-sm font-medium text-black" htmlFor="fullName">
                          Full Name
                        </label>
                        <input
                          className="w-full rounded-lg border border-gray-300 bg-white py-3 px-4 text-black focus:border-blue-500"
                          type="text"
                          name="fullName"
                          id="fullName"
                          placeholder="Enter your full name"
                          defaultValue="Devid Jhon"
                        />
                      </div>

                      <div className="flex-1">
                        <label className="mb-3 block text-sm font-medium text-black" htmlFor="phoneNumber">
                          Phone Number
                        </label>
                        <input
                          className="w-full rounded-lg border border-gray-300 bg-white py-3 px-4 text-black focus:border-blue-500"
                          type="text"
                          name="phoneNumber"
                          id="phoneNumber"
                          placeholder="Enter your phone number"
                          defaultValue="+990 3343 7865"
                        />
                      </div>
                    </div>

                    <div className="mb-6">
                      <label className="mb-3 block text-sm font-medium text-black" htmlFor="emailAddress">
                        Email Address
                      </label>
                      <input
                        className="w-full rounded-lg border border-gray-300 bg-white py-3 px-4 text-black focus:border-blue-500"
                        type="email"
                        name="emailAddress"
                        id="emailAddress"
                        placeholder="Enter your email address"
                        defaultValue="devidjond45@gmail.com"
                      />
                    </div>

                    <div className="mb-6">
                      <label className="mb-3 block text-sm font-medium text-black" htmlFor="Username">
                        Username
                      </label>
                      <input
                        className="w-full rounded-lg border border-gray-300 bg-white py-3 px-4 text-black focus:border-blue-500"
                        type="text"
                        name="Username"
                        id="Username"
                        placeholder="Choose a username"
                        defaultValue="devidjhon24"
                      />
                    </div>

                    <div className="flex justify-end gap-4">
                      <button
                        className="rounded-md border border-gray-300 py-2 px-6 text-black hover:bg-gray-100"
                        type="button"  // Changed to "button" to prevent form submission on cancel
                      >
                        Cancel
                      </button>
                      <button
                        className="rounded-md bg-blue-500 py-2 px-6 text-white hover:bg-blue-600"
                        type="submit"
                      >
                        Save
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            <div className="md:col-span-2">
              <div className="rounded-sm border border-gray-300 bg-white shadow-sm">
                <div className="border-b border-gray-200 py-4 px-7">
                  <h3 className="font-medium text-black">
                    Your Photo
                  </h3>
                </div>
                <div className="p-7">
                  <form action="#">
                    <div className="mb-4 flex items-center gap-3">
                      <div className="h-14 w-14 rounded-full">
                        <img src={userThree} alt="User" />
                      </div>
                      <div>
                        <span className="mb-1.5 text-black">
                          Edit your photo
                        </span>
                        <span className="flex gap-2.5">
                          <button className="text-sm hover:text-blue-500">
                            Delete
                          </button>
                          <button className="text-sm hover:text-blue-500">
                            Update
                          </button>
                        </span>
                      </div>
                    </div>

                    <div className="relative mb-6 block w-full cursor-pointer rounded border-dashed border-2 border-blue-500 bg-white py-4 px-4 text-center">
                      <input
                        type="file"
                        accept="image/*"
                        className="absolute inset-0 z-50 m-0 h-full w-full cursor-pointer p-0 opacity-0 outline-none"
                      />
                      <div className="flex flex-col items-center justify-center space-y-2">
                        <span className="text-blue-500">Click to upload</span> or drag and drop
                        <p className="text-sm">SVG, PNG, JPG or GIF (max. 800x800px)</p>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Orders;
