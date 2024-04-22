import React, { useState } from 'react';
import christmas from './../assets/christmas.png';
import workshop from './../assets/workshop.png';
import paint from './../assets/paint.png';
import ferry from './../assets/ferry.png';
import picnic from './../assets/picnic.png';
import movie from './../assets/movie.png';
import techStartup from './../assets/techStartup.webp';
import HoosierCosmic from './../assets/HoosierCosmic.png';
import Little500 from './../assets/Little500.webp';
import kaneBrown from './../assets/kaneBrown.webp';
import Fashion from './../assets/Fashion.webp';
import Navigation from '../components/Navigation';
import Sidenav from '../components/Sidenav';
import Adminnav from '../components/Adminnav';

const TagsFilter = ({ tags, selectedTags, onTagToggle }) => {
  return (
    <div className="p-4 border-r-2 h-screen">
      <h2 className="text-lg font-semibold mb-3">Filter by Events Type:</h2>
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
      tags: ['Community Festival', 'Family', 'Fun'],
    },
    {
      id: 'event2',
      title: 'Little 500',
      description: 'This event is an iconic annual bike race featuring teams of students competing in a relay-style competition on a track, celebrated for its high energy and community spirit.',
      imageUrl: Little500,
      tags: ['Sports'],
    },
    {
      id: 'event3',
      title: 'Our Grandpals painted a Wall!',
      description: 'We saw our Silver haired cuties time travel to their childhood painting their heart out on Sassoon Docks Walls in Bloomington.',
      imageUrl: paint,
      tags: ['Art', 'Family', 'Networking Event'],
    },
    {
      id: 'event4',
      title: 'Hoosier Cosmic Celebration Party',
      description: 'The "Hoosier Cosmic Celebration" is a festive event in Indiana where residents gather to witness and celebrate the rare spectacle of a total solar eclipse.',
      imageUrl: HoosierCosmic,
      tags: ['Activity', 'Family', 'Celebration Party'],
    },
    {
      id: 'event5',
      title: 'Picnic at the park',
      description: 'A bright, sunny day calls for a picnic with our favorites where we danced, sang and laughed our hearts out!',
      imageUrl: picnic,
      tags: ['Dance', 'Family', 'Charity Fundraiser'],
    },
    {
      id: 'event6',
      title: 'Grandpals Movie Night',
      description: 'Inox helped us curate a special movie night of endless wonder and popcorn, recliner seats and a 3D screening of a Hollywood favorite for our GrandPals!',
      imageUrl: movie,
      tags: ['Movie', 'Family', 'Celebration Party'],
    },
    {
        id: 'event7',
        title: 'Kane Concert',
        description: 'Country star Kane Brown electrifies Indiana University Bloomington with a vibrant live concert performance.',
        imageUrl: kaneBrown,
        tags: ['Concert', 'Family'],
      },
      {
        id: 'event8',
        title: 'Anatomy Fashion Show',
        description: 'This fashion event in Indiana Bloomington is a vibrant community gathering showcasing local designers and trends, celebrated with runway shows and creative workshops!',
        imageUrl: Fashion,
        tags: ['Fashion', 'Family', ' Community Festival'],
      },
      {
        id: 'event9',
        title: 'Tech startup week in Bloomington',
        description: 'Techstars Startup Week in Bloomington ignites entrepreneurial spirits with a showcase of innovation and networking.',
        imageUrl: techStartup,
        tags: ['Technical Event', 'Networking Event'],
      }
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

  return (
    <>
    <div className='flex w-full fixed top-0'></div>
      <div className='flex w-full'>
        <Sidenav />
        <div className="flex flex-1 flex-col">
          <Adminnav />
          
          <div className="flex flex-1 flex-col md:flex-row p-5 gap-4">
            <aside className="sticky top-0 w-64" style={{ height: 'calc(100vh - 80px)', overflowY: 'auto', marginRight: '20px' }}>
              <TagsFilter
                tags={['Community Festival', 'Networking Event', 'Celebration Party', 'Charity Fundraiser', 'Sports', 'Technical Event', 'Concert', 'Arts Event']}
                selectedTags={selectedTags}
                onTagToggle={toggleTag}
              />
            </aside>
            <main className="flex-1 overflow-auto">
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
                {filteredEvents.map((event) => (
                  <div key={event.id} className="event-card" style={{ width: 'calc(33.333% - 20px)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}>
                    <img src={event.imageUrl} alt={event.title} style={{ width: '100%', marginBottom: '10px' }} />
                    <div className="flex flex-col justify-between flex-grow">
                      <div>
                        <h2 style={{ fontWeight: 'bold', marginBottom: '10px' }}>{event.title}</h2>
                        <p style={{ marginBottom: '10px' }}>{event.description}</p>
                        <div style={{ marginBottom: '10px' }}>
                          {event.tags.map((tag, index) => (
                            <span key={index} style={{ marginRight: '5px', padding: '5px 10px', backgroundColor: '#f0f0f0', borderRadius: '15px', display: 'inline-block', marginBottom: '5px' }}>
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div style={{ marginTop: '10px' }}>
                        <button style={{ marginRight: '10px', padding: '10px 20px', backgroundColor: '#0056b3', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>View Details</button>
                        <button style={{ padding: '10px 20px', backgroundColor: '#4CAF50', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Register</button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </main>
          </div>
        </div>
      </div>
    </>
  );
};

export default Events;


