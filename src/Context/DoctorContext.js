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

  const updateUser = (userData) => {
    setUser(userData);
  };
  console.log(user);

  const contextValue = {
    user,
    updateUser,
  };

  return (
    <DoctorContext.Provider value={contextValue}>{children}</DoctorContext.Provider>
  );
};
