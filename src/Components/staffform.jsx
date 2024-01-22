import React, { useState } from 'react';

const Staffform = ({ onAddStaff }) => {
  const [name, setName] = useState('');
  const [availability, setAvailability] = useState([]);

  const handleAddStaff = () => {
    if (name && availability.length > 0) {
      onAddStaff({ name, availability });
      setName('');
      setAvailability([]);
    }
  };

  return (
    <div>
      <h2>Add Staff</h2>
      <label>Name:</label>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      <label>Availability:</label>
      <input type="text" value={availability} onChange={(e) => setAvailability(e.target.value.split(','))} />
      <button onClick={handleAddStaff}>Add Staff</button>
    </div>
  );
};

export default Staffform;