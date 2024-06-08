import React, { createContext, useState, useContext, useEffect } from "react";

const DoctorContext = createContext();

export const useDoctorContext = () => {
  return useContext(DoctorContext);
};

export const DoctorProvider = ({ children }) => {
  const [doctors, setDoctors] = useState([]);

  // Load data from localStorage when the component mounts
  useEffect(() => {
    const storedDoctors = localStorage.getItem("doctors");
    if (storedDoctors) {
      setDoctors(JSON.parse(storedDoctors));
      console.log("storedDoctors", storedDoctors);
    }
  }, []); // This should run only once when the component mounts, so the dependency array is empty.

  // Save data to localStorage whenever the doctors state changes
  useEffect(() => {
    localStorage.setItem("doctors", JSON.stringify(doctors));
  }, [doctors]);

  // Add doctor
  const addDoctor = (doctorData) => {
    setDoctors((prevDoctors) => [...prevDoctors, doctorData]);
  };

  // Update doctor slots
  const updateDoctorSlots = (name, slots) => {
    setDoctors((prevDoctors) =>
      prevDoctors.map((doctor) =>
        doctor.name === name ? { ...doctor, availableSlots: slots } : doctor
      )
    );
  };
  console.log("updateDoctorSlot", doctors);

  const contextValue = {
    doctors,
    addDoctor,
    updateDoctorSlots,
  };

  return (
    <DoctorContext.Provider value={contextValue}>
      {children}
    </DoctorContext.Provider>
  );
};
