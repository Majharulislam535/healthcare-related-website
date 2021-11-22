import './index.css';
import Navbar from './components/Header/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import Service from './components/Service/Service';
import Doctor from './components/Doctor/Doctor';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Login from './components/Login/Login';
import NotFound from './components/NotFound/NotFound';
import Registration from './components/Registration/Registration';
import ServiceDetails from './components/ServiceDeatils/ServiceDetails';
import AuthContext from './components/AuthContext/AuthContext';
import PrivetRoute from './components/PrivetRoute/PrivetRoute';

function App() {
  return (
    <>
      <AuthContext>
        <BrowserRouter>
          <Navbar></Navbar>
          <Routes>
            <Route path='/' element={<Home />}>
            </Route>
            <Route path='/home' element={<Home />}>
            </Route>
            <Route path='/about' element={<About />}>
            </Route>

            <Route path='/service' element={<PrivetRoute>
              <Service />
            </PrivetRoute>}>
            </Route>
            <Route path='/service/details:id' element={<ServiceDetails />}>
            </Route>
            <Route path='/doctor' element={
              <PrivetRoute>
                <Doctor />
              </PrivetRoute>
            }>
            </Route>
            <Route path='/contact' element={<Contact />}>
            </Route>
            <Route path='/login' element={<Login />}></Route>
            <Route path='/registration' element={<Registration />}> </Route>
            <Route path="*" element={<NotFound />}></Route>
          </Routes>
          <Footer></Footer>
        </BrowserRouter >
      </AuthContext>
    </>
  );
}

export default App;
