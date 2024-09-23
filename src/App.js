// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainPage from './components/MainPage';
import MirroredNavbar from './components/Navbar';
import ProgressWithInput from './components/Progress';
import InputVerification from './components/InputVerification';
import PasswordGenerator from './components/PasswordGenerator';
import Timer from './components/Timer';
import RickAndMortyQueries from './components/RickAndMortyQueries';

function App() {
  return (
    <Router>
      <Routes>
        {/* Main Page Route */}
        <Route path="/" element={<MainPage />} />

        {/* Routes for Each Component */}
        <Route path="/navbar" element={<MirroredNavbar />} />
        <Route path="/progress" element={<ProgressWithInput />} />
        <Route path="/verification" element={<InputVerification />} />
        <Route path="/password-generator" element={<PasswordGenerator />} />
        <Route path="/timer" element={<Timer />} />
        <Route path="/rick-and-morty" element={<RickAndMortyQueries />} />
      </Routes>
    </Router>
  );
}

export default App;
