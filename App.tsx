
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import LandingPage from './components/LandingPage';
import Home from './components/Home';
import Viewpoints from './components/Viewpoints';
import Tickets from './components/Tickets';
import History from './components/History';
import Profile from './components/Profile';

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/dashboard" element={<Home />} />
          <Route path="/viewpoints" element={<Viewpoints />} />
          <Route path="/viewpoints/:id" element={<Viewpoints />} />
          <Route path="/tickets" element={<Tickets />} />
          <Route path="/history" element={<History />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
