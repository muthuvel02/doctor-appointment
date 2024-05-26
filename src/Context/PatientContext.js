import React, { createContext, useState, useContext } from "react";

const PatientContext = createContext();

export const usePatientContext = () => {
  return useContext(PatientContext);
};

export const PatientProvider = ({ children }) => {
  const [user, setUser] = useState({
    name: "",
    age: "",
  });

  const updatePatient = (userData) => {
    setUser(userData);
  };
  console.log(user);

  const contextValue = {
    user,
    updatePatient,
  };

  return (
    <PatientContext.Provider value={contextValue}>
      {children}
    </PatientContext.Provider>
  );
};
