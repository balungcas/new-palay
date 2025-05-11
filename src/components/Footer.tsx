import React from 'react';
import { Github, Mail, Globe } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-green-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">About PalayPredict</h3>
            <p className="text-green-100">
              An AI-powered platform for predicting rice production trends in the Philippines,
              helping farmers and policymakers make data-driven decisions.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-green-100 hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="/predictions" className="text-green-100 hover:text-white transition-colors">
                  Predictions
                </a>
              </li>
              <li>
                <a href="/historical-data" className="text-green-100 hover:text-white transition-colors">
                  Historical Data
                </a>
              </li>
              <li>
                <a href="/about" className="text-green-100 hover:text-white transition-colors">
                  About Us
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4 mb-4">
              <a href="https://github.com/balungcas/palay-predict-philippines-future" target="_blank" rel="noopener noreferrer" className="text-green-100 hover:text-white transition-colors">
                <Github size={20} />
              </a>
              <a href="mailto:contact@palaypredict.ph" className="text-green-100 hover:text-white transition-colors">
                <Mail size={20} />
              </a>
              <a href="https://palaypredict.ph" target="_blank" rel="noopener noreferrer" className="text-green-100 hover:text-white transition-colors">
                <Globe size={20} />
              </a>
            </div>
            <p className="text-sm text-green-100">
              © {new Date().getFullYear()} PalayPredict Philippines. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;