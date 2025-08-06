import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import SplashScreen from './components/SplashScreen';
import HomePage from './components/HomePage';
import Dashboard from './components/Dashboard';
import TubelightNavbarDemo from './components/TubelightNavbarDemo';
import NewNavigation from './components/NewNavigation';
import CustomCursor from './components/CustomCursor';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsConditions from './components/TermsConditions';

import './App.css';

function App() {
  return (
    <Router>
      <div className="App bg-white min-h-screen w-full overflow-x-hidden">
        {/* <CustomCursor /> */}
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<SplashScreen />} />
            <Route path="/home" element={<>
              <NewNavigation />
              <HomePage />
            </>} />
            <Route path="/dashboard" element={<>
              <NewNavigation />
              <Dashboard />
            </>} />
            <Route path="/tubelight-demo" element={<>
              <NewNavigation />
              <TubelightNavbarDemo />
            </>} />
            <Route path="/privacy-policy" element={<>
              <NewNavigation />
              <PrivacyPolicy />
            </>} />
            <Route path="/terms-conditions" element={<>
              <NewNavigation />
              <TermsConditions />
            </>} />
          </Routes>
        </AnimatePresence>
      </div>
    </Router>
  );
}

export default App;