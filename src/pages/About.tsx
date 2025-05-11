import React from 'react';
import { Brain, Database, Users, TrendingUp } from 'lucide-react';

const About = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <section className="mb-12 animate-fade-in">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">About PalayPredict</h1>
          <p className="text-gray-600 max-w-3xl mx-auto">
            We're dedicated to revolutionizing rice production forecasting in the Philippines through
            advanced data analytics and machine learning technologies.
          </p>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-semibold text-green-800 mb-6">Our Mission</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            PalayPredict aims to empower Filipino farmers, agricultural policymakers, and stakeholders 
            with accurate, data-driven predictions of rice production. By providing reliable forecasts, 
            we help optimize resource allocation, improve food security planning, and enhance the 
            resilience of the Philippine agricultural sector.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex">
              <div className="mr-4 mt-1">
                <Brain className="h-10 w-10 text-green-600" />
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-800 mb-2">Intelligent Predictions</h3>
                <p className="text-gray-600">
                  Our advanced machine learning algorithms analyze multiple data points to generate 
                  highly accurate rice production forecasts for regions across the Philippines.
                </p>
              </div>
            </div>
            
            <div className="flex">
              <div className="mr-4 mt-1">
                <Database className="h-10 w-10 text-blue-600" />
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-800 mb-2">Comprehensive Data</h3>
                <p className="text-gray-600">
                  We integrate historical production records, weather patterns, soil conditions, 
                  and agricultural practices to create a holistic view of rice farming conditions.
                </p>
              </div>
            </div>
            
            <div className="flex">
              <div className="mr-4 mt-1">
                <Users className="h-10 w-10 text-purple-600" />
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-800 mb-2">Stakeholder Support</h3>
                <p className="text-gray-600">
                  From individual farmers to government agencies, we provide actionable insights 
                  tailored to the needs of different agricultural stakeholders.
                </p>
              </div>
            </div>
            
            <div className="flex">
              <div className="mr-4 mt-1">
                <TrendingUp className="h-10 w-10 text-amber-600" />
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-800 mb-2">Continuous Improvement</h3>
                <p className="text-gray-600">
                  Our models continuously learn and adapt, incorporating new data and refining 
                  predictions to achieve ever-higher levels of accuracy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="mb-12 animate-fade-in" style={{animationDelay: '0.2s'}}>
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-semibold text-green-800 mb-6">Our Technology</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="p-6 border border-gray-200 rounded-lg hover:border-green-300 transition-colors">
              <h3 className="text-lg font-medium text-gray-800 mb-3">Data Collection</h3>
              <p className="text-gray-600">
                We gather data from multiple sources including government databases, 
                weather stations, satellite imagery, and farmer reports to create a 
                comprehensive picture of rice production conditions.
              </p>
            </div>
            
            <div className="p-6 border border-gray-200 rounded-lg hover:border-green-300 transition-colors">
              <h3 className="text-lg font-medium text-gray-800 mb-3">AI Models</h3>
              <p className="text-gray-600">
                Our prediction engine uses ensemble machine learning techniques, 
                combining multiple models to generate forecasts with the highest 
                possible accuracy and reliability.
              </p>
            </div>
            
            <div className="p-6 border border-gray-200 rounded-lg hover:border-green-300 transition-colors">
              <h3 className="text-lg font-medium text-gray-800 mb-3">Visualization</h3>
              <p className="text-gray-600">
                Interactive dashboards and intuitive visualizations make our data 
                and predictions accessible and actionable for users with varying 
                levels of technical expertise.
              </p>
            </div>
          </div>
          
          <div className="bg-green-50 rounded-lg p-6 border border-green-200">
            <h3 className="text-lg font-medium text-green-800 mb-3">Continuous Development</h3>
            <p className="text-gray-700 mb-4">
              Our platform is constantly evolving. Recent and upcoming improvements include:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>Integration of high-resolution satellite imagery for more precise field assessment</li>
              <li>Enhanced regional models tailored to specific growing conditions</li>
              <li>Mobile applications for farmers to access predictions in the field</li>
              <li>API services for integration with other agricultural technology platforms</li>
              <li>Climate change impact projections for long-term agricultural planning</li>
            </ul>
          </div>
        </div>
      </section>
      
      <section className="mb-8 animate-fade-in" style={{animationDelay: '0.3s'}}>
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-semibold text-green-800 mb-6">Our Team</h2>
          <p className="text-gray-700 mb-8">
            PalayPredict brings together experts in agricultural science, data analytics, 
            machine learning, and software development, all committed to improving the 
            future of rice production in the Philippines.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-gray-200 rounded-full w-32 h-32 mx-auto mb-4 flex items-center justify-center">
                <p className="text-gray-500">Team Member Photo</p>
              </div>
              <h3 className="text-lg font-medium text-gray-800">Dr. Maria Santos</h3>
              <p className="text-gray-600">Agricultural Scientist</p>
            </div>
            
            <div className="text-center">
              <div className="bg-gray-200 rounded-full w-32 h-32 mx-auto mb-4 flex items-center justify-center">
                <p className="text-gray-500">Team Member Photo</p>
              </div>
              <h3 className="text-lg font-medium text-gray-800">Eng. Paulo Reyes</h3>
              <p className="text-gray-600">Data Science Lead</p>
            </div>
            
            <div className="text-center">
              <div className="bg-gray-200 rounded-full w-32 h-32 mx-auto mb-4 flex items-center justify-center">
                <p className="text-gray-500">Team Member Photo</p>
              </div>
              <h3 className="text-lg font-medium text-gray-800">Ana Lim</h3>
              <p className="text-gray-600">Software Engineer</p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="animate-fade-in" style={{animationDelay: '0.4s'}}>
        <div className="bg-green-50 rounded-lg p-8 border border-green-200">
          <h2 className="text-2xl font-semibold text-green-800 mb-6">Contact Us</h2>
          <p className="text-gray-700 mb-6">
            We're always looking to collaborate with organizations and individuals who share our 
            commitment to improving agricultural outcomes in the Philippines.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-3">Get in Touch</h3>
              <ul className="space-y-3 text-gray-600">
                <li>Email: info@palaypredict.ph</li>
                <li>Phone: +63 (2) 8123 4567</li>
                <li>Address: Quezon City, Metro Manila, Philippines</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-3">Follow Us</h3>
              <p className="text-gray-600 mb-4">
                Stay updated with our latest predictions, research, and development.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-green-700 hover:text-green-800 transition-colors">
                  Twitter
                </a>
                <a href="#" className="text-green-700 hover:text-green-800 transition-colors">
                  Facebook
                </a>
                <a href="#" className="text-green-700 hover:text-green-800 transition-colors">
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;