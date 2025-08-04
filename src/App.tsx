import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import SplashScreen from './components/SplashScreen';
import HomePage from './components/HomePage';
import Dashboard from './components/Dashboard';
import TubelightNavbarDemo from './components/TubelightNavbarDemo';
import NewNavigation from './components/NewNavigation';
import CustomCursor from './components/CustomCursor';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <CustomCursor />
        <NewNavigation />
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<SplashScreen />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/tubelight-demo" element={<TubelightNavbarDemo />} />
          </Routes>
        </AnimatePresence>
      </div>
    </Router>
  );
}

export default App;