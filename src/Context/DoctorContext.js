import React, { createContext, useState, useContext } from "react";

const DoctorContext = createContext();

export const useUserContext = () => {
  return useContext(DoctorContext);
};

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    name: "",
    specialty: "",
  });

  const [availableSlot,setAvailableSlot] = useState([])

  const updateUser = (userData) => {
    setUser(userData);
  };

  
const doctorSlot = (slot) => {
  setAvailableSlot(slot);
}
  console.log("availableSlot", availableSlot);


  const contextValue = {
    user,
    updateUser,
    availableSlot,
    doctorSlot,
  };

  return (
    <DoctorContext.Provider value={contextValue}>{children}</DoctorContext.Provider>
  );
};
