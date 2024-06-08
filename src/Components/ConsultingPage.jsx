import React, { useState } from 'react';
import { useDoctorContext } from '../Context/DoctorContext'; // Removed unnecessary import
import PatientsInfo from './PatientsInfo';

const ConsultingPage = () => {
    const { doctors } = useDoctorContext();
    const [bookedSlots, setBookedSlots] = useState({});
    const [canceledSlots, setCanceledSlots] = useState({});

    const handleBook = (doctorName, slot) => {
        setBookedSlots((prev) => ({
            ...prev,
            [doctorName]: {
                ...prev[doctorName],
                [slot]: true
            }
        }));
        setCanceledSlots((prev) => ({
            ...prev,
            [doctorName]: {
                ...prev[doctorName],
                [slot]: false
            }
        }));
    };

    const handleCancel = (doctorName, slot) => {
        setBookedSlots((prev) => ({
            ...prev,
            [doctorName]: {
                ...prev[doctorName],
                [slot]: false
            }
        }));
        setCanceledSlots((prev) => ({
            ...prev,
            [doctorName]: {
                ...prev[doctorName],
                [slot]: true
            }
        }));
    };

    return (
        <div className='consulting__container'>
            <PatientsInfo />
            <h3>Doctors Availability</h3>
            {doctors.map((doctor, doctorIndex) => (
                <div key={doctorIndex} className="doctor__information__container">
                    <div className="doctor__information">
                        <h4>{doctor.name}</h4>
                        <h5>{doctor.specialty}</h5>
                    </div>
                    <div className="available__slots">
                        {(Array.isArray(doctor.availableSlots) ? doctor.availableSlots : []).map((slot, slotIndex) => (
                            <div key={slotIndex} className='time'>
                                {slot}
                                {bookedSlots[doctor.name]?.[slot] && <p className='confirmation__message'>Booked</p>}
                                {canceledSlots[doctor.name]?.[slot] && <p className='cancel__message'>Canceled</p>}
                                <div className="buttons">
                                    <button onClick={() => handleBook(doctor.name, slot)}>Book</button>
                                    <button
                                        onClick={() => handleCancel(doctor.name, slot)}
                                        disabled={!bookedSlots[doctor.name]?.[slot]}
                                    >Cancel</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}
export default ConsultingPage