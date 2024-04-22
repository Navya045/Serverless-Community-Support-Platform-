import React, { useState } from 'react';
// Import the images and Navigation component as you have them in your project structure.
import christmas from './../assets/christmas.png';
import workshop from './../assets/workshop.png';
import paint from './../assets/paint.png';
import ferry from './../assets/ferry.png';
import picnic from './../assets/picnic.png';
import movie from './../assets/movie.png';
import Navigation from '../components/Navigation';
import Sidenav from '../components/Sidenav';
import Adminnav from '../components/Adminnav'

const TagsFilter = ({ tags, selectedTags, onTagToggle }) => {
  return (
    <div className="p-4 border-r-2 h-screen">
      <h2 className="text-lg font-semibold mb-3">Filter by tags:</h2>
      {tags.map((tag, index) => (
        <div key={index} className="mb-2">
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              className="form-checkbox h-5 w-5"
              checked={selectedTags.includes(tag)}
              onChange={() => onTagToggle(tag)}
            />
            <span className="ml-2 text-gray-700">{tag}</span>
          </label>
        </div>
      ))}
    </div>
  );
};

const Events = () => {
  const [events] = useState([
    {
      id: 'event1',
      title: 'Christmas Celebration with our Grandpals!',
      description: 'Nothing will ever give you the heart to face another year, than a Christmas tree in the home and the people you love around it. These silver-haired lovelies deserved both.',
      imageUrl: christmas,
      tags: ['Holiday', 'Family', 'Fun'],
    },
    {
      id: 'event2',
      title: 'Mind & Movement Workshop at GatherCloud',
      description: 'Very often seniors sink away into their homes with no mental or physical stimulation. Goodfellows refuses to accept this and we put together happy activities and games based on that to help keep their mind sharp and fight aging.',
      imageUrl: workshop,
      tags: ['Spirituality', 'Health', 'Fun'],
    },
    {
      id: 'event3',
      title: 'Our Grandpals painted a Wall!',
      description: 'We saw our Silver haired cuties time travel to their childhood painting their heart out on Sassoon Docks Walls in Bloomington.',
      imageUrl: paint,
      tags: ['Art', 'Family', 'Fun'],
    },
    {
      id: 'event4',
      title: 'Ferry Ride with Granpals!',
      description: 'We have left a bottle in the sea with a paper rolled with stories and smiles. This was not just a ferry ride but an emotion that all of us will carry through out our lives.',
      imageUrl: ferry,
      tags: ['Activity', 'Family', 'Fun'],
    },
    {
      id: 'event5',
      title: 'Picnic at the park',
      description: 'A bright, sunny day calls for a picnic with our favorites where we danced, sang and laughed our hearts out!',
      imageUrl: picnic,
      tags: ['Dance', 'Family', 'Fun'],
    },
    {
      id: 'event6',
      title: 'Grandpals Movie Night',
      description: 'Inox helped us curate a special movie night of endless wonder and popcorn, recliner seats and a 3D screening of a Hollywood favorite for our GrandPals!',
      imageUrl: movie,
      tags: ['Movie', 'Family', 'Fun'],
    },
  ]);

  // Calculate all unique tags from events
  const allTags = [...new Set(events.flatMap(event => event.tags))];
  const [selectedTags, setSelectedTags] = useState([]);

  const toggleTag = (tag) => {
    setSelectedTags(prevTags =>
      prevTags.includes(tag) ? prevTags.filter(t => t !== tag) : [...prevTags, tag]
    );
  };

  const filteredEvents = events.filter(event =>
    selectedTags.length === 0 || event.tags.some(tag => selectedTags.includes(tag))
  );
 

  const topPadding = '10px'; // Adjust if necessary

  return (
    <>
  
  <div className='flex w-full'>
      <Sidenav />
    <div className="flex flex-1 flex-col">
      <Adminnav />
      
      <div className="flex flex-1 flex-col md:flex-row p-5 gap-4">
      
      <div className="flex pt-4" style={{ paddingTop: topPadding }}>
        <aside className="w-64" style={{ marginRight: '20px' }}>
          <TagsFilter
            tags={['Community Festival', 'Networking Event', 'Celebration Party', 'Charity Fundraiser']}
            selectedTags={selectedTags}
            onTagToggle={toggleTag}
          />
        </aside>
        <main className="flex-1">
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
            {filteredEvents.map((event) => (
              <div key={event.id} style={{ width: 'calc(33.333% - 20px)', marginBottom: '20px' }}>
                <img src={event.imageUrl} alt={event.title} style={{ width: '100%', height: 'auto' }} />
                <h2>{event.title}</h2>
                <p>{event.description}</p>
                <div>
                  {event.tags.map((tag, index) => (
                    <span key={index} style={{ marginRight: '5px', padding: '5px 10px', backgroundColor: '#f0f0f0', borderRadius: '15px', display: 'inline-block', marginBottom: '5px' }}>
                      {tag}
                    </span>
                  ))}
                </div>
                <button style={{ marginRight: '10px', padding: '10px 20px', backgroundColor: '#0056b3', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>View Details</button>
                <button style={{ padding: '10px 20px', backgroundColor: '#4CAF50', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Register</button>
              </div>
            ))}
          </div>
        </main>
      </div>
        </div>
      </div>
    </div>
     
    </>
  );
};

export default Events;