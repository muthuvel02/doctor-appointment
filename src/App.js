import "./App.css";
import { DoctorProvider, UserProvider } from "./Context/DoctorContext";
import { PatientProvider } from "./Context/PatientContext";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <DoctorProvider>
      <PatientProvider>
        <div className='App'>
          <Outlet />
        </div>
      </PatientProvider>
    </DoctorProvider>
  );
}

export default App;
