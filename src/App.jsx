import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import HomeContainer from './pages/home_container/HomeContainer';
import Bus from './pages/bus/Bus';
import Detail from './pages/bus/Detail';
import Detail2 from './pages/bus/Detail2';
import Detail3 from './pages/bus/Detail3';
import Checkout from './pages/checkout/Checkout';
import LoginPage from './pages/auth/Login';

function App() {

  return (
    <>
      <Router>
     
        <div className='w-full min-h-screen bg-neutral-50 dark:bg-neutral-950 text-neutral-800 dark:text-neutral-300 flex flex-col overflow-hidden'>
          {/* Navbar */}
          <Navbar />

          {/* Home Content */}
          <Routes>
            <Route path="/home" element={<HomeContainer/>}/>
            <Route path="/" element={<LoginPage/>}/>
            <Route path="/bus" element={<Bus/>}/>
            <Route path="/bus/bus-details" element={<Detail/>}/>
            <Route path="/bus/bus-details2" element={<Detail2/>}/>
            <Route path="/bus/bus-details3" element={<Detail3/>}/>
            <Route path="/bus/bus-details/checkout" element={<Checkout/>}/>
          </Routes>

          {/* Footer */}
          <Footer/>
        </div>
      </Router>
    </>
  )
}

export default App
