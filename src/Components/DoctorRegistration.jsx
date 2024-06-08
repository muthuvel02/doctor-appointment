import React, { useState } from 'react'
import { useDoctorContext, useUserContext } from '../Context/DoctorContext';
import DoctorPage from './DoctorPage';
import { useNavigate } from 'react-router-dom';

const DoctorRegistration = () => {
    const {addDoctor} = useDoctorContext();
    const [name, setName] = useState('');
    const [specialty, setSpecialty] = useState('');

    const navigate = useNavigate();

    const handelNameChange = (e) => {
        setName(e.target.value)
    }

    const handelSpecialtyChange = (e) => {
        setSpecialty(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addDoctor({ name, specialty, availableSlots:[] })
        navigate("/doctor-page")


    }
    return (

        <>
            <div className="container">
                <h2>Doctor Registration </h2>
                <form onSubmit={handleSubmit}>
                    <label>
                        Name:
                        <input type="text" value={name} onChange={handelNameChange} />
                    </label>
                    <label>
                        Specialty:
                        <select name="Specialty" id="Specialty" value={specialty} onChange={handelSpecialtyChange}>
                            <option value="">Select Specialty</option>
                            <option value="Cardiologist">Cardiologist</option>
                            <option value="Dermatologist">Dermatologist</option>
                            <option value="Orthopedic">Orthopedic</option>
                            <option value="General Physician">General Physician</option>
                        </select>
                    </label>
                    <button> Register </button>

                </form>

            </div>
        </>
    )
}

export default DoctorRegistration