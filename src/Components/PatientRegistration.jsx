import React, { useState } from 'react'
import { usePatientContext } from '../Context/PatientContext';

const PatientRegistration = () => {
    const {updatePatient} = usePatientContext();
    const [name, setName] = useState('');
    const [age, setAge] = useState('');

    const handelNameChange = (e) => {
        setName(e.target.value)
    }

    const handelAgeChange = (e) => {
        setAge(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        updatePatient({ name, age })



    }
    return (

        <>
            <div className="container">
                <h2>Patient Registration </h2>
                <form onSubmit={handleSubmit}>
                    <label>
                        Name:
                        <input type="text" value={name} onChange={handelNameChange} />
                    </label>
                    <label>
                        Age:
                        <input type="text" value={age} onChange={handelAgeChange} />
                    </label>
                    <button> Register </button>
                </form>
            </div>
        </>
    )
}

export default PatientRegistration