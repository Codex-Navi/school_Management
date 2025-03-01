import React from 'react';

function Features(props) {
    return (
        <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
         <img alt="Logo" className="mx-auto mb-4" height="50" src="https://storage.googleapis.com/a1aa/image/42SZNRGdi5L7IIu3rGAVCjQ1UvfUqPv5LqaI1nlKHYY.jpg" width="50"/>
         <h1 className="text-3xl font-semibold">
          All-in-One School Management Platform
         </h1>
         <p className="text-gray-600 mt-2">
          Streamline your entire school operations with our comprehensive suite of integrated modules designed specifically for modern educational institutions.
         </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
         <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">
           Student Information System
          </h2>
          <p className="text-gray-600 mb-4">
           Centralized student data management with digital attendance, profile tracking, and streamlined communication to one central location.
          </p>
          <img alt="Student Information System Image" className="w-full h-48 object-cover rounded-lg mb-4" height="200" src="https://storage.googleapis.com/a1aa/image/dCxqmkkrRZo-0VqYHmeZJaIaoHO6SOgfFzdPxm90NBk.jpg" width="400"/>
          <div className="flex items-center justify-between text-gray-600">
           <i className="fas fa-play-circle">
           </i>
           <p>
            Watch the video to learn more
           </p>
           <i className="fas fa-chevron-right">
           </i>
          </div>
         </div>
         <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">
           Academic Excellence Suite
          </h2>
          <p className="text-gray-600 mb-4">
           Comprehensive tools for curriculum planning, assessments, performance tracking, and grading with student performance analytics.
          </p>
          <img alt="Academic Excellence Suite Image" className="w-full h-48 object-cover rounded-lg mb-4" height="200" src="https://storage.googleapis.com/a1aa/image/DuKPxBMdSiZQ7Nrbi__zqyBpR1BWFRDci6riNOwi6VU.jpg" width="400"/>
          <div className="flex items-center justify-between text-gray-600">
           <i className="fas fa-play-circle">
           </i>
           <p>
            Watch the video to learn more
           </p>
           <i className="fas fa-chevron-right">
           </i>
          </div>
         </div>
         <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">
           Smart Communication Hub
          </h2>
          <p className="text-gray-600 mb-4">
           All-in-one messaging platform for teachers, parents, and students with real-time notifications and updates.
          </p>
          <img alt="Smart Communication Hub Image" className="w-full h-48 object-cover rounded-lg mb-4" height="200" src="https://storage.googleapis.com/a1aa/image/ix6bcvJiak67o3FSsttFrRkxtwiU_zfa9dJRLa_aWE8.jpg" width="400"/>
          <div className="flex items-center justify-between text-gray-600">
           <i className="fas fa-play-circle">
           </i>
           <p>
            Watch the video to learn more
           </p>
           <i className="fas fa-chevron-right">
           </i>
          </div>
         </div>
         <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">
           Financial Management Center
          </h2>
          <p className="text-gray-600 mb-4">
           Streamlined financial reporting with expense management and budgeting tools.
          </p>
          <img alt="Financial Management Center Image" className="w-full h-48 object-cover rounded-lg mb-4" height="200" src="https://storage.googleapis.com/a1aa/image/NT9hsf6KGrwkSaq-BK5SH79nu1HXysF3ea1_44ncZkA.jpg" width="400"/>
          <div className="flex items-center justify-between text-gray-600">
           <i className="fas fa-play-circle">
           </i>
           <p>
            Watch the video to learn more
           </p>
           <i className="fas fa-chevron-right">
           </i>
          </div>
         </div>
        </div>
       </div>
 
     
    );
}

export default Features;