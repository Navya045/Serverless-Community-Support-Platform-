import React, { useState } from 'react';

const Checkbox = ({ text }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = () => setIsChecked(!isChecked);

  return (
    <div className="mb-2">  {/* Each checkbox in its own div */}
      <label className="flex items-center gap-2">
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleToggle}
          className="form-checkbox h-4 w-4 text-primary"
        />
        {text}
      </label>
    </div>
  );
};

export default Checkbox;
