import React from 'react'
import { usePatientContext } from '../Context/PatientContext'

const PatientsInfo = () => {
    const {user} = usePatientContext()
  return (
      <h2>Hello {user ? user.name : 'User'} ...</h2>
  )
}

export default PatientsInfo