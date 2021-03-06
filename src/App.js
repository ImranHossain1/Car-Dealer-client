import logo from './logo.svg';
import './App.css';
import Navbar from './Pages/Shared/Navbar';
import Footer from './Pages/Shared/Footer';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';

import RequireAuth from './Pages/Login/RequireAuth';
import Dashboard from './Pages/Dashboard/Dashboard';
import Register from './Pages/Login/Register';
import Users from './Pages/Dashboard/Users';
import Profile from './Pages/Dashboard/Profile';
import AddViechels from './Pages/Dashboard/AddVehicle';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Vehicles from './Pages/Shop/Vehicles';
import Dashboard2 from './Pages/Dashboard/Dashboard2';
import { createTheme, ThemeProvider } from '@mui/material';
import Gallery from './Pages/Shop/Gallery';
import VehicleBooking from './Pages/Shop/VehicleBooking';
import ConfirmVehicle from './Pages/Shop/ConfirmVehicle';

const theme = createTheme({
  zIndex: {
    // appBar: 1251,
    // modal: 1250
  }
});
function App() {
  return (
        <>
        <ThemeProvider theme={theme}>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/home' element={<Home/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/registration' element={<Register/>}/>
            <Route path='/vehicles' element={<Vehicles/>}/>
            <Route path='/vehicle/:id' element={<VehicleBooking/>}/>
            <Route path='/confirmVehicle/:id' element={<RequireAuth><ConfirmVehicle/></RequireAuth> }/>
            <Route path='/gallery' element={<Gallery/>}/>
            {/* <Route path='/dashboard2' element={<Dashboard2/>}/> */}
            <Route path='/vehicles/:cons' element={<Vehicles/>}/>
            <Route path='dashboard' element={<RequireAuth><Dashboard/></RequireAuth>}>
              <Route index element={<Profile></Profile>}></Route>
              <Route path='users' element={<Users></Users>}></Route>
              <Route path='addvhicle' element={<AddViechels></AddViechels>}></Route>
            </Route>
           
          </Routes>
          </ThemeProvider>
          <Footer></Footer>
          <ToastContainer/>
        </>
  );
}

export default App;
