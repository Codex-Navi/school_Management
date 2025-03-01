import React from 'react';

function Footer(props) {
    return (
        <footer className="bg-blue-600 text-white py-10">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between">
         <div className="mb-6 md:mb-0">
          <div className="flex items-center mb-4">
           <img alt="School Pro logo" className="mr-2" height="40" src="https://storage.googleapis.com/a1aa/image/BHRHZhrxhTfElQyNE-z7KFohifF8QcyjouEAtTd1IE8.jpg" width="40"/>
           <span className="text-2xl font-bold">
            School
            <span className="text-blue-300">
             Pro
            </span>
           </span>
          </div>
          <p className="max-w-xs">
           From admissions to academics, simplify every aspect of school administration with our comprehensive and user-friendly platform.
          </p>
          <div className="flex mt-4 space-x-4">
           <a className="text-white" href="#">
            <i className="fab fa-twitter">
            </i>
           </a>
           <a className="text-white" href="#">
            <i className="fab fa-facebook-f">
            </i>
           </a>
           <a className="text-white" href="#">
            <i className="fab fa-instagram">
            </i>
           </a>
           <a className="text-white" href="#">
            <i className="fab fa-linkedin-in">
            </i>
           </a>
          </div>
         </div>
         <div className="mb-6 md:mb-0">
          <h3 className="font-bold mb-2">
           Get In Touch
          </h3>
          <p>
           support@pagedone.com
          </p>
          <p>
           +91 946 658 3256
          </p>
          <p>
           61-A, Elm street, Gujarat, India.
          </p>
         </div>
         <div className="mb-6 md:mb-0">
          <h3 className="font-bold mb-2">
           Quick Links
          </h3>
          <ul>
           <li>
            <a className="hover:underline" href="#">
             Home
            </a>
           </li>
           <li>
            <a className="hover:underline" href="#">
             FAQs
            </a>
           </li>
           <li>
            <a className="hover:underline" href="#">
             Price Plan
            </a>
           </li>
           <li>
            <a className="hover:underline" href="#">
             Admin
            </a>
           </li>
           <li>
            <a className="hover:underline" href="#">
             Careers
            </a>
           </li>
           <li>
            <a className="hover:underline" href="#">
             About
            </a>
           </li>
           <li>
            <a className="hover:underline" href="#">
             Contact
            </a>
           </li>
           <li>
            <a className="hover:underline" href="#">
             Products
            </a>
           </li>
          </ul>
         </div>
         <div>
          <h3 className="font-bold mb-2">
           Newsletter
          </h3>
          <form className="flex flex-col">
           <input className="p-2 mb-2 rounded text-black" placeholder="Enter email.." type="email"/>
           <button className="bg-blue-500 text-white py-2 px-4 rounded flex items-center justify-center">
            Subscribe
            <i className="fas fa-arrow-right ml-2">
            </i>
           </button>
          </form>
         </div>
        </div>
        <div className="text-center mt-10">
         <p>
          Copyright ©2025 All Right Reserved Pagedone.
         </p>
        </div>
       </footer>
    
     
    );
}

export default Footer;