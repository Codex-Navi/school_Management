import React from 'react';

function TeacherDetails(props) {
    return (
        <div className="teacher-details">
        <div className="header">
          <h2>Teacher Details</h2>
        </div>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Subject</th>
              <th>Qualification</th>
              <th>Fee</th>
              <th>Performance</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Vatsa Sharma</td>
              <td>Programming</td>
              <td>M.Tech</td>
              <td>$172.0</td>
              <td className="text-green-500">Good</td>
            </tr>
            <tr>
              <td>Hoshi Chang</td>
              <td>Music Algorithm</td>
              <td>B.A</td>
              <td>$125.0</td>
              <td className="text-green-500">Good</td>
            </tr>
            <tr>
              <td>Jordan Mico</td>
              <td>English</td>
              <td>B.A</td>
              <td>$210.0</td>
              <td className="text-green-500">Good</td>
            </tr>
            <tr>
              <td>Nadila Adja</td>
              <td>History</td>
              <td>M.A</td>
              <td>$210.0</td>
              <td className="text-green-500">Good</td>
            </tr>
            <tr>
              <td>Jamei Brown</td>
              <td>Commerce</td>
              <td>B.Com</td>
              <td>$210.0</td>
              <td className="text-green-500">Good</td>
            </tr>
            <tr>
              <td>Jack John</td>
              <td>Software Logic</td>
              <td>B.Tech</td>
              <td>$210.0</td>
              <td className="text-green-500">Good</td>
            </tr>
            <tr>
              <td>Lucy Hope</td>
              <td>IT Logic</td>
              <td>B.Tech</td>
              <td>$210.0</td>
              <td className="text-green-500">Good</td>
            </tr>
            <tr>
              <td>Vatsa Sharma</td>
              <td>Programming</td>
              <td>M.Tech</td>
              <td>$172.0</td>
              <td className="text-green-500">Good</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
}

export default TeacherDetails;