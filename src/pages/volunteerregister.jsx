

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function VolunteerRegisterForm() {
  const navigate = useNavigate(); 
    const [currentStep, setCurrentStep] = useState(1);

    const nextStep = () => {
        setCurrentStep(currentStep + 1);
    };

    const prevStep = () => {
        setCurrentStep(currentStep - 1);
    };

    const submitForm = () => {
        // Handle form submission
        alert('Form submitted');
        navigate('/dashboard')
    };

    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-4xl p-5 bg-white shadow-xl rounded-lg">
          <h1 className="text-lg text-[#00df9a] font-bold mb-6 text-center">Register as a Volunteer</h1>
          {/* Progress Bar */}
          <div className="flex items-center justify-center mb-6">
              <div className="flex items-center">
                  <div className={`h-3 w-3 rounded-full ${currentStep === 1 ? 'bg-blue-500' : 'bg-gray-300'}`}></div>
                  <div className="flex-auto border-t-2 transition duration-500 ease-in-out ${currentStep > 1 ? 'border-blue-500' : 'border-gray-300'}"></div>
                  <div className={`h-3 w-3 rounded-full ${currentStep === 2 ? 'bg-blue-500' : 'bg-gray-300'}`}></div>
                  <div className="flex-auto border-t-2 transition duration-500 ease-in-out ${currentStep > 2 ? 'border-blue-500' : 'border-gray-300'}"></div>
                  <div className={`h-3 w-3 rounded-full ${currentStep === 3 ? 'bg-blue-500' : 'bg-gray-300'}`}></div>
              </div>
          </div>
            <form className="grid grid-cols-1 gap-4">
                {currentStep === 1 && (
                    <>
                        <div>
          <label htmlFor="firstName" className="block">First name <span className="text-red-500">*</span></label>
          <input type="text" id="firstName" name="firstName" required className="mt-1 block w-full max-w-lg px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"/>
        </div>
        <div>
          <label htmlFor="lastName" className="block">Last name <span className="text-red-500">*</span></label>
          <input type="text" id="lastName" name="lastName" required className="mt-1 block w-full max-w-lg px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"/>
        </div>
        <div>
          <label htmlFor="email" className="block">Email <span className="text-red-500">*</span></label>
          <input type="text" id="email" name="email" required className="mt-1 block w-full max-w-lg px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"/>
        </div>
        <div>
          <label htmlFor="password" className="block">Password <span className="text-red-500">*</span></label>
          <input type="text" id="password" name="password" required className="mt-1 block w-full max-w-lg px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"/>
        </div>
        <div>
          <label htmlFor="dob" className="block">Date of Birth <span className="text-red-500">*</span></label>
          <input type="date" id="dob" name="dob" required className="mt-1 block w-full max-w-lg px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"/>
        </div>
        <div>
          <label htmlFor="contact" className="block">Contact Information (Phone Number, Email Address) <span className="text-red-500">*</span></label>
          <input type="text" id="contact" name="contact" required className="mt-1 block w-full max-w-lg px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"/>
        </div>
        <div>
          <label htmlFor="idProof" className="block">Government ID Proof <span className="text-red-500">*</span></label>
          <select id="idProof" name="idProof" required className="mt-1 block w-full max-w-lg px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500">
            <option value="">Select an ID Proof</option>
            <option value="ssn">SSN</option>
            <option value="passport">Passport Number</option>
            <option value="stateId">State ID</option>
            <option value="drivingLicense">Driving License</option>
          </select>
        </div>
        <div>
          <label htmlFor="address" className="block">Address <span className="text-red-500">*</span></label>
          <input type="text" id="address" name="address" required className="mt-1 block w-full max-w-lg px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"/>
        </div>
        <div>
          <label htmlFor="hoursPerWeek" className="block">How many hours per week are you available to volunteer?</label>
          <input type="number" id="hoursPerWeek" name="hoursPerWeek" className="mt-1 block w-full max-w-lg px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"/>
        </div>
        <div>
          <label htmlFor="availableTimes" className="block">What days and times are you typically available?</label>
          <textarea id="availableTimes" name="availableTimes" className="mt-1 block w-full max-w-lg px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"></textarea>
        </div>

                    </>
                )}
                {currentStep === 2 && (
                    <>
                      <div>
          <label htmlFor="volunteerExperience" className="block">Do you have any previous volunteer experience? If so, please describe. <span className="text-red-500">*</span></label>
          <textarea id="volunteerExperience" name="volunteerExperience" required className="mt-1 block w-full max-w-lg px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"></textarea>
        </div>
        <div>
          <label htmlFor="seniorCitizenExperience" className="block">Have you ever worked with senior citizens before? Please provide details. <span className="text-red-500">*</span></label>
          <textarea id="seniorCitizenExperience" name="seniorCitizenExperience" required className="mt-1 block w-full max-w-lg px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"></textarea>
        </div>
        <div>
          <label htmlFor="skillsQualifications" className="block">What skills or qualifications do you have that make you a good fit for this role? <span className="text-red-500">*</span></label>
          <textarea id="skillsQualifications" name="skillsQualifications" required className="mt-1 block w-full max-w-lg px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"></textarea>
        </div>
 {/* Motivation and Interest */}
        <div>
          <label htmlFor="motivation" className="block">Why are you interested in volunteering with the Goodfellows? <span className="text-red-500">*</span></label>
          <textarea id="motivation" name="motivation" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"></textarea>
        </div>
        <div>
          <label htmlFor="gainExperience" className="block">What do you hope to gain from your experience as a volunteer? <span className="text-red-500">*</span></label>
          <textarea id="gainExperience" name="gainExperience" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"></textarea>
        </div>
{/* Character and Competence */}
        <div>
          <label htmlFor="workWithDiversePeople" className="block">How would you describe your ability to work with people who have different backgrounds and experiences from your own?</label>
          <textarea id="workWithDiversePeople" name="workWithDiversePeople" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"></textarea>
        </div>
        <div>
          <label htmlFor="empathyExample" className="block">Can you provide an example of a time when you demonstrated empathy and understanding?</label>
          <textarea id="empathyExample" name="empathyExample" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"></textarea>
        </div>
                    </>
                )}
                {currentStep === 3 && (
                    <>
                       {/* Training and Development */}
        <div>
          <label htmlFor="undergoTraining" className="block">Are you willing to undergo training to improve your skills and understanding of the needs of senior citizens? <span className="text-red-500">*</span></label>
          <input type="checkbox" id="undergoTraining" name="undergoTraining" required className="mt-1 block"/>
        </div>
        <div>
          <label htmlFor="areasOfInterest" className="block">Do you have any specific areas of interest or expertise that you would like to develop further?</label>
          <textarea id="areasOfInterest" name="areasOfInterest" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"></textarea>
        </div>
        {/* Health and Safety */}
        <div>
          <label htmlFor="healthConcerns" className="block">Do you have any health-related concerns or conditions that we should be aware of?</label>
          <textarea id="healthConcerns" name="healthConcerns" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"></textarea>
        </div>
        <div>
          <label htmlFor="followHealthSafety" className="block">Are you comfortable following health and safety guidelines to protect yourself and others from COVID-19 and other infectious diseases? <span className="text-red-500">*</span></label>
          <input type="checkbox" id="followHealthSafety" name="followHealthSafety" required className="mt-1 block"/>
        </div>

        {/* References */}
        <div>
          <label htmlFor="references" className="block">Please provide the names and contact information of two references who can speak to your character and qualifications. <span className="text-red-500">*</span></label>
          <textarea id="references" name="references" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"></textarea>
        </div>

        {/* Consent and Commitment */}
        <div>
          <label htmlFor="commitment" className="block">Do you understand the responsibilities involved in being a Goodfellows volunteer and agree to commit to them? <span className="text-red-500">*</span></label>
          <input type="checkbox" id="commitment" name="commitment" required className="mt-1 block"/>
        </div>
        <div>
          <label htmlFor="backgroundCheck" className="block">Do you consent to a background check as part of the volunteer screening process? <span className="text-red-500">*</span></label>
          <input type="checkbox" id="backgroundCheck" name="backgroundCheck" required className="mt-1 block"/>
        </div>
                    </>
                )}

                <div className="mt-4 flex justify-between">
                    {currentStep > 1 && (
                        <button type="button" onClick={prevStep} className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600">Previous</button>
                    )}
                    {currentStep < 3 && (
                        <button type="button" onClick={nextStep} className="px-4 py-2 bg-[#00df9a] text-white rounded-md hover:bg-blue-600">Next</button>
                    )}
                    {currentStep === 3 && (
                        <button type="button" onClick={submitForm} className="px-4 py-2 bg-[#00df9a] text-white rounded-md hover:bg-blue-600">Submit</button>
                    )}
                </div>
            </form>
        </div>
        </div>
    );
}

export default VolunteerRegisterForm;

