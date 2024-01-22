import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import StaffForm from './Components/staffform';
import StaffList from './Components/stafflist';
import './App.css'

const App = () => {
  const [staffList, setStaffList] = useState([]);
  const [selectedDay, setSelectedDay] = useState('');
  const [selectedTime, setSelectedTime] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('./data.json');
      const data = await response.json();
      setStaffList(data.staff);
    };

    fetchData();
  }, []);

  const handleAddStaff = (staff) => {
    staff.id = staffList.length + 1;
    setStaffList([...staffList, staff]);
  };

  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/add">Add Staff</Link>
            </li>
          </ul>
        </nav>

        <Route path="/" exact render={() => (
          <div>
            <h1>Shipping System</h1>
            <label>Select Day:</label>
            <input type="text" value={selectedDay} onChange={(e) => setSelectedDay(e.target.value)} />
            <label>Select Time:</label>
            <input type="text" value={selectedTime} onChange={(e) => setSelectedTime(e.target.value)} />
            <StaffList staffList={staffList} selectedDay={selectedDay} selectedTime={selectedTime} />
          </div>
        )} />

        <Route path="/add" render={() => (
          <StaffForm onAddStaff={handleAddStaff} />
        )} />
      </div>
    </Router>
  );
}

export default App;