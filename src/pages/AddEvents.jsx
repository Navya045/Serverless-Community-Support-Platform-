import { Link } from 'react-router-dom';

import Breadcrumb from '../components/Breadcrumbs/Breadcrumb';
import Sidenav from '../components/Sidenav';
import Adminnav from '../components/Adminnav';
import DatePickerComponent from '../components/DatePickerComponent';
import SelectGroupTwo from '../components/Forms/SelectGroup/SelectGroupTwo'
import Checkbox from '../components/Forms/SelectGroup/SelectGroupOne'; // Adjust this import if it's incorrect

const Addevents = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Implementation for form submission
  };

  const eventTypes = [
    "Community Festival", "Networking Event", "Celebration Party", "Charity Fundraiser",
    "Sports", "Technical Event", "Concert", "Arts Event"
  ];

  return (
    <div className='flex w-full bg-grey-100'> {/* Adjusted background color to light grey */}
      <Sidenav />
      <div className="flex flex-1 flex-col bg-white"> {/* Ensured background is always white */}
        <Adminnav />
        <Breadcrumb pageName="Organize Event" />
        <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="flex flex-col gap-4">
            <div className="rounded-sm border border-gray-200 bg-white shadow-sm">
              <div className="border-b border-gray-200 py-4 px-4">
                <h3 className="font-medium text-black">
                  Organize Event
                </h3>
              </div>
              <div className="flex flex-col gap-4 p-4">
                <div>
                  <label className="mb-2 block text-black">
                    Event Title
                  </label>
                  <input
                    type="text"
                    placeholder="Enter event title"
                    className="w-full rounded-lg border border-gray-300 bg-transparent py-2 px-3 text-black outline-none focus:border-blue-500 active:border-blue-500"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-black">
                    Event Description
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Describe the event"
                    className="w-full rounded-lg border border-gray-300 bg-transparent py-2 px-3 text-black outline-none focus:border-blue-500 active:border-blue-500"
                  ></textarea>
                </div>

                <div>
                  <label className="mb-2 block text-black">
                    Event Type
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {eventTypes.map(type => (
                      <Checkbox key={type} text={type} />
                    ))}
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-black">
                    Event Image
                  </label>
                  <input
                    type="file"
                    className="w-full cursor-pointer rounded-lg border border-gray-300 bg-transparent outline-none transition hover:bg-blue-100 focus:border-blue-500 active:border-blue-500"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="rounded-sm border border-gray-200 bg-white shadow-sm">
              <div className="border-b border-gray-200 py-4 px-4">
                <h3 className="font-medium text-black">
                  Event Availability
                </h3>
              </div>
              <div className="flex flex-col gap-4 p-4">
                <SelectGroupTwo label="Select Country" options={['Country 1', 'Country 2', 'Country 3']} />
                <DatePickerComponent label="From" />
                <DatePickerComponent label="To" />
              </div>
            </div>
            <div className="flex justify-end p-4">
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-primary py-3 px-8 text-center font-medium text-white hover:bg-opacity-90"
              >
                Organize Event
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Addevents;
