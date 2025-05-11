import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Dashboard from './pages/Dashboard';
import Predictions from './pages/Predictions';
import HistoricalData from './pages/HistoricalData';
import About from './pages/About';
import './App.css';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-neutral-50">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/predictions" element={<Predictions />} />
            <Route path="/historical-data" element={<HistoricalData />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;