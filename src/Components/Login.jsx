import React from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate = useNavigate()
    const handlePatient = () => {
        navigate("/patient-registration")
    }
    const handleDoctor = () => {
        navigate( "/doctor-registration")
    }
    return (
        <div className='Login__container'>
            <button onClick={handlePatient}> Patient Login</button>
            <button onClick={handleDoctor}> Doctor Login</button>

        </div>
    )
}

export default Login