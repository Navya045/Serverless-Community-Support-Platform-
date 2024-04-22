import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const DatePickerComponent = ({ label }) => {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <div className="flex flex-col gap-2">
      <label className="text-black dark:text-white">{label}</label>
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        className="form-input w-full rounded border border-gray-300 p-2"
      />
    </div>
  );
};
export default DatePickerComponent;
