import React, { useState } from 'react';
import { useUserContext } from '../Context/DoctorContext';
import { useNavigate } from 'react-router-dom';

const DoctorPage = () => {
  const { user, doctorSlot,
 } = useUserContext();
 const navigate = useNavigate();
  const [selectedSlots, setSelectedSlots] = useState([]);

  const timeSlot = () => {
    const timing = [];
    for (let hours = 10; hours < 22; hours++) {
      timing.push(`${hours}:00 - ${hours}:30`);
      timing.push(`${hours}:30 - ${hours + 1}:00`);
    }
    return timing;
  };

  const TimeSlots = timeSlot();

  const toggleSlotSelection = (slot) => {
    setSelectedSlots(prevSelectedSlots =>
      prevSelectedSlots.includes(slot)
        ? prevSelectedSlots.filter(s => s !== slot)
        : [...prevSelectedSlots, slot]
    );
  };
  const handleSubmit =()=>
    {
    doctorSlot ( selectedSlots ) ;
    navigate("/consulting-page")

    
    }

  return (
    <div className="doctor__page__container">
      <div className="doctor__info">
        <h2>Hello Dr. {user.name}, welcome back..</h2>
      </div>
      <h3>Please select your available slots for today</h3>
      <div className="slot__container">
        {TimeSlots.map((slot, index) => (
          <div
            key={index}
            className={`slot ${selectedSlots.includes(slot) ? 'selected' : ''}`}
            onClick={() => toggleSlotSelection(slot)}
          >
            {slot}
          </div>
        ))}
      </div>
      <div className="available__slot">
        <h2>Selected Slots</h2>
        <ul>
          {selectedSlots.map((slot, index) => (
            <li key={index}>{slot}</li>
          ))}
        </ul>
      </div>
      <button onClick ={handleSubmit}>Submit</button>
    </div>
  );
};

export default DoctorPage;
