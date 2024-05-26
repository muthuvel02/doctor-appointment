import "./App.css";
import { UserProvider } from "./Context/DoctorContext";
import { PatientProvider } from "./Context/PatientContext";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <UserProvider>
      <PatientProvider>
        <div className='App'>
          <Outlet />
        </div>
      </PatientProvider>
    </UserProvider>
  );
}

export default App;
