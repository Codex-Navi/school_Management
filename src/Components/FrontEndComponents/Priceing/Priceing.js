import React from 'react';

function Priceing(props) {
    return (
        <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
            <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-full mb-4">
                <i className="fas fa-cogs"></i> Pricing
            </button>
            <h1 className="text-3xl font-bold mb-2">Transparent, Per-Student Pricing</h1>
            <p className="text-gray-600 mb-4">Simple, predictable pricing that grows with your institution. All features included, no hidden fees. Special discounts available for large institutions.</p>
            <div className="inline-flex rounded-md shadow-sm" role="group">
                <button className="bg-blue-600 text-white px-4 py-2 rounded-l-md">Monthly</button>
                <button className="bg-white text-blue-600 border border-blue-600 px-4 py-2 rounded-r-md">Annually (Save 17%)</button>
            </div>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-start md:space-x-8">
            <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6 md:mb-0 md:w-1/2">
                <h2 className="text-xl font-semibold mb-4">Monthly School License</h2>
                <p className="text-gray-600 mb-4">Get complete access to our comprehensive school management system with all features included. Perfect for schools of any size with flexible scaling options.</p>
                <h3 className="text-lg font-semibold text-blue-600 mb-4">Everything you need included</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Complete Student Management System</li>
                    <li>Parent-Teacher Communication Platform</li>
                    <li>Attendance Tracking System</li>
                    <li>24/7 Customer Support</li>
                    <li>Academic & Examination Tools</li>
                    <li>Basic Financial Management</li>
                    <li>Real-time Notifications</li>
                    <li>Regular System Updates</li>
                </ul>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6 md:w-1/3">
                <h2 className="text-xl font-semibold mb-4">Simple per-student pricing</h2>
                <p className="text-4xl font-bold text-gray-800 mb-4">$4 <span className="text-lg font-normal">USD /student/month</span></p>
                <button className="bg-blue-600 text-white px-6 py-2 rounded-md mb-4">Start Free Trial</button>
                <p className="text-gray-600 text-sm">14-day free trial • No credit card required • Volume discounts available</p>
            </div>
        </div>
    </div>


    );
}

export default Priceing;