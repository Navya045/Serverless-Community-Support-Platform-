import React, { useState, useRef } from 'react';

const MultiSelect = ({ options = [] }) => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  const handleSelect = (option) => {
    const index = selectedOptions.indexOf(option);
    if (index > -1) {
      setSelectedOptions(selectedOptions.filter((_, i) => i !== index));
    } else {
      setSelectedOptions([...selectedOptions, option]);
    }
  };

  return (
    <div className="relative z-50">
      <label className="mb-3 block text-sm font-medium text-black dark:text-white">
        Multiselect Dropdown
      </label>
      <div className="flex flex-col items-center">
        <button onClick={() => setShowDropdown(!showDropdown)} className="mb-2 w-full rounded border border-stroke py-2 pl-3 pr-3 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input">
          {selectedOptions.length > 0 ? selectedOptions.join(", ") : "Select options"}
        </button>
        {showDropdown && (
          <div className="absolute top-full left-0 z-40 w-full mt-1 rounded bg-white shadow dark:bg-form-input">
            {options.map((option, index) => (
              <div key={index} className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700">
                <button onClick={() => handleSelect(option)} className="w-full text-left">
                  {option}
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MultiSelect;
