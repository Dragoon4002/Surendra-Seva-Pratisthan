import React from 'react';
import { Route, Routes } from 'react-router-dom'; // Import Routes instead of Switch
import './App.css';
import './style.css';
import HomePage from './pages/HomePage';
import Activities from './pages/Activities'; // Example additional page
import Objective from './pages/Objective';
import Member from './pages/Member';
import Testimonial from './pages/Testimonial';
import Gallery from './pages/Gallery';
import ContactUs from './pages/ContactUs';
import Feedback from './pages/Feedback';
import Donation from './pages/Donation';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/activities" element={<Activities />} />
        <Route path="/objective" element={<Objective />} />
        <Route path="/members" element={<Member />} />
        <Route path="/testimonials" element={<Testimonial />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/activities" element={<Activities />} />
        <Route path="/contactUs" element={<ContactUs/>} />
        <Route path="/feedback" element={<Feedback/>} />1
        <Route path="/donation" element={<Donation/>} />
      </Routes>
    </div>
  );
}

export default App;
