import React from 'react';

const Stafflist = ({ staffList, selectedDay, selectedTime }) => {
  const filteredStaff = staffList.filter((staff) => {
    const availability = staff.availability.find((slot) => slot.day === selectedDay && slot.time === selectedTime);
    return availability;
  });

  return (
    <div>
      <h2>Available Staff</h2>
      <ul>
        {filteredStaff.map((staff) => (
          <li key={staff.id}>{staff.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Stafflist;
