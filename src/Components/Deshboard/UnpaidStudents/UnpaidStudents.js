import React from 'react';
import './unpaidStudent.css'
function UnpaidStudents(props) {
    return (
        <div className="unpaid-students">
      <div className="header">
        <h2>Unpaid Student Intuition</h2>
      </div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>ID</th>
            <th>Class</th>
            <th>Fee</th>
            <th>Rank</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="flex items-center">
              <img src="/images/profile1.jpg" alt="Profile picture of Jordan Mico" />
              Jordan Mico
            </td>
            <td>ID 1234567891</td>
            <td><span className="bg-red-500 text-white rounded-full px-2 py-1 text-xs">Class 7A</span></td>
            <td>$ 12.03</td>
            <td>First</td>
            <td><i className="fas fa-ellipsis-h text-gray-600"></i></td>
          </tr>
          <tr>
            <td className="flex items-center">
              <img src="/images/profile2.jpg" alt="Profile picture of Karen Hope" />
              Karen Hope
            </td>
            <td>ID 1234567891</td>
            <td><span className="bg-orange-500 text-white rounded-full px-2 py-1 text-xs">Class 7B</span></td>
            <td>$ 11.05</td>
            <td>Second</td>
            <td><i className="fas fa-ellipsis-h text-gray-600"></i></td>
          </tr>
          <tr>
            <td className="flex items-center">
              <img src="/images/profile3.jpg" alt="Profile picture of Nadila Adja" />
              Nadila Adja
            </td>
            <td>ID 1234567891</td>
            <td><span className="bg-red-500 text-white rounded-full px-2 py-1 text-xs">Class 7A</span></td>
            <td>$ 9.20</td>
            <td>Third</td>
            <td><i className="fas fa-ellipsis-h text-gray-600"></i></td>
          </tr>
          <tr>
            <td className="flex items-center">
              <img src="/images/profile4.jpg" alt="Profile picture of Jamei Brown" />
              Jamei Brown
            </td>
            <td>ID 1234567891</td>
            <td><span className="bg-orange-500 text-white rounded-full px-2 py-1 text-xs">Class 7B</span></td>
            <td>$ 10.00</td>
            <td>Second</td>
            <td><i className="fas fa-ellipsis-h text-gray-600"></i></td>
          </tr>
          <tr>
            <td className="flex items-center">
              <img src="/images/profile5.jpg" alt="Profile picture of Derek Warner" />
              Derek Warner
            </td>
            <td>ID 1234567891</td>
            <td><span className="bg-red-500 text-white rounded-full px-2 py-1 text-xs">Class 7A</span></td>
            <td>$ 12.00</td>
            <td>First</td>
            <td><i className="fas fa-ellipsis-h text-gray-600"></i></td>
          </tr>
        </tbody>
      </table>
    </div>
    );
}

export default UnpaidStudents;