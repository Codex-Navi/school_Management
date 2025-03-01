import React from 'react';

function AdditinolFeaturs(props) {
    return (
        <div className="container mx-auto p-6">
        <div className="text-center mb-8">
         <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-full mb-4">
          Additional Features
         </button>
         <h1 className="text-3xl font-bold">
          All-in-One School Management Platform
         </h1>
         <p className="text-gray-600 mt-2">
          Streamline your entire school operations with our comprehensive suite of integrated modules designed specifically for modern educational institutions.
         </p>
        </div>
        <div className="flex justify-center space-x-8 mb-8">
         <button className="flex items-center space-x-2 text-blue-600">
          <i className="fas fa-user-graduate">
          </i>
          <span>
           Students
          </span>
         </button>
         <button className="flex items-center space-x-2 text-gray-600">
          <i className="fas fa-book">
          </i>
          <span>
           Academics
          </span>
         </button>
         <button className="flex items-center space-x-2 text-gray-600">
          <i className="fas fa-dollar-sign">
          </i>
          <span>
           Finance
          </span>
         </button>
         <button className="flex items-center space-x-2 text-gray-600">
          <i className="fas fa-chart-line">
          </i>
          <span>
           Analytics
          </span>
         </button>
        </div>
        <div className="flex flex-col lg:flex-row lg:space-x-8">
         <div className="lg:w-2/3">
          <h2 className="text-2xl font-semibold mb-4">
           Student Management
          </h2>
          <p className="text-gray-600 mb-6">
           Comprehensive student information system for managing enrollments, profiles, and academic records with ease
          </p>
          <div className="bg-white p-6 rounded-lg shadow">
           <ol className="list-decimal list-inside space-y-2">
            <li>
             Digital student profiles with complete academic history
            </li>
            <li>
             Automated enrollment and registration process
            </li>
            <li>
             Parent portal access with real-time updates
            </li>
            <li>
             Student performance tracking and analytics
            </li>
            <li>
             Digital document management for student records
            </li>
            <li>
             Custom fields for additional student information
            </li>
            <li>
             Bulk student data import/export capabilities
            </li>
            <li>
             Student behavior and disciplinary record tracking
            </li>
           </ol>
          </div>
          <button className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg">
           Learn more about Student Management
          </button>
         </div>
         <div className="lg:w-1/3 mt-8 lg:mt-0">
          <div className="bg-white rounded-lg shadow overflow-hidden">
           <img alt="A scenic view with a white SUV on a road with hills in the background" className="w-full" height="400" src="https://storage.googleapis.com/a1aa/image/366t0Ds6RHsb72RxlI6BLCrZxtIHPIaXTTKijU0YL50.jpg" width="600"/>
           <div className="p-4">
            <div className="flex items-center space-x-4 mb-4">
             <button className="text-red-600">
              <i className="fas fa-play">
              </i>
             </button>
             <div className="flex-grow">
              <div className="h-1 bg-gray-300 rounded-full">
               <div className="h-1 bg-red-600 rounded-full" style={{width: '20%'}}>
               </div>
              </div>
             </div>
             <span className="text-gray-600 text-sm">
              0:20/2:00
             </span>
             <button className="text-gray-600">
              <i className="fas fa-expand">
              </i>
             </button>
            </div>
            <textarea className="w-full border border-gray-300 rounded-lg p-2" placeholder="Describe what music you would like to generate." rows="2"></textarea>
            <div className="text-right text-gray-600 text-sm mt-2">
             0/200
            </div>
           </div>
          </div>
         </div>
        </div>
       </div>
   
     
    );
}

export default AdditinolFeaturs;