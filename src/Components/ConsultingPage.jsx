import React, { useState } from 'react';
import { useUserContext } from '../Context/DoctorContext';
import PatientsInfo from './PatientsInfo';

const ConsultingPage = () => {
    const { user, availableSlot } = useUserContext();
    const [bookedSlot, setBookedSlot] = useState({});

    const handleBook = (slot) => {
        setBookedSlot((prev) => ({ ...prev, [slot]: true }));
    };

    return (
        <div className='consulting__container'>
            <PatientsInfo />
            <h3>Doctor Availability</h3>
            <div className="doctor__information__container">
                <div className="doctor__information">
                    <h4>{user ? user.name : 'Doctor Name'}</h4>
                    <h5>{user ? user.specialty : 'Specialty'}</h5>
                </div>
                <div className="available__slots">
                    {(Array.isArray(availableSlot) ? availableSlot : []).map((slot, index) => (
                        <div key={index} className='time'>
                            {slot}
                            {bookedSlot[slot] && <p className='confirmation__message'>You have booked the appointment</p>}
                            <button onClick={() => handleBook(slot)}>Book</button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ConsultingPage;
