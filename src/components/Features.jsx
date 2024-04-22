

import React from 'react';
import Icon from './Icon'; // Adjust the import path to where your Icon component is located

// Define the features data directly in the component
const featuresData = [
  {
    "icon": "faMapMarkerAlt",
    "title": "Personalized Recommendations",
    "text": " GatherCloud’s intelligent recommendation engine tailors event suggestions to individual preferences and historical engagement, ensuring that community members discover activities that resonate with them. This personalized approach increases participation rates and fosters a more connected community."
  },{
    "icon": "faRoute",
    "title": "Live Event Updates Based on Location",
    "text": "Utilizing geolocation technology, GatherCloud provides real-time updates on events happening nearby, alerting users to opportunities for engagement right in their vicinity. This feature enhances the community experience by promoting local events and facilitating spontaneous participation."
  },
  {
    "icon": "faBell",
    "title": "Event Notifications",
    "text": "GatherCloud incorporates a robust notification system that keeps community members informed and engaged with relevant events. This system ensures that individuals receive timely alerts about activities that match their interests and preferences."
  },
  {
    "icon": "faEnvelope",
    "title": "Support Network",
    "text": "GatherCloud acts as a support network, identifying and highlighting opportunities for community members to assist those in need. Whether it's volunteering for local charities, contributing to community drives, or supporting local businesses, GatherCloud makes it easier for individuals to contribute positively to their community."
  }
];

const Features = () => {
  // Determine the maximum number of lines to display in the feature text.
  const maxTextLines = 3;
  const lineHeight = 6; // Tailwind CSS line height class (1.5rem)
  const maxHeight = maxTextLines * lineHeight;
  
  // Adjust this formula based on your line-height
  return(
    <div id="features" className="text-center bg-floralwhite">
      <div className="container mx-auto">
        <div className="w-full md:w-10/12 mx-auto py-12">
          <h2 className="text-4xl font-bold mb-12 text-darktheme">
            Why GatherCloud?
          </h2>
        </div>
        <div className="flex flex-wrap justify-center pb-20 ">
          <p className="leading-relaxed mx-3">GatherCloud empowers communities by streamlining the organization and participation of local events, providing a platform that not only connects individuals but also aids in supporting those in need. With a focus on inclusivity and engagement, GatherCloud serves as a pivotal tool for community development and support, managing hundreds of events and touching thousands of lives annually.</p>
        </div>
        <div className="flex flex-wrap justify-center">
          {featuresData.map((feature, index) => (
            <div key={`${feature.title}-${index}`} className="px-4 w-full sm:w-1/2 md:w-1/4 mb-20"> 
              <div className="text-4xl mx-auto mb-5 w-24 h-24 flex items-center justify-center rounded-full bg-black text-white shadow-md">
                <Icon iconName={feature.icon} />
              </div>
              <h3 className="text-xl font-semibold text-darktheme">
                {feature.title}
              </h3>
              <p className={`mt-2 text-gray-700 overflow-hidden leading-6`}>
                {feature.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};


export default Features;