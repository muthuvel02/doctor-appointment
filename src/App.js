import './App.css';
import DoctorPage from './Components/DoctorPage';
import DoctorRegistration from './Components/DoctorRegistration';
import PatientRegistration from './Components/PatientRegistration';
import { UserProvider } from './Context/DoctorContext';
import { PatientProvider } from './Context/PatientContext';

function App() {
  return (
    <UserProvider>
      <PatientProvider>
        <div className='App'>
          {/* <Router>
            <Switch>
              <Route exact path='/' component={DoctorRegistration} />
              <Route path='/doctor-page' component={DoctorPage} />
            </Switch>
          </Router> */}
          <DoctorRegistration />
          {/* <PatientRegistration /> */}
        </div>
      </PatientProvider>
    </UserProvider>
  );
}

export default App;
