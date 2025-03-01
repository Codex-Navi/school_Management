import React from 'react';
import './stats.css'

function Stats(props) {
    return (
        <div className="stats">
        <div className="stat">
          <div className="icon bg-blue-500">
            <i className="fas fa-user-graduate"></i>
          </div>
          <div>
            <h2>Students</h2>
            <p>93K</p>
          </div>
        </div>
        <div className="stat">
          <div className="icon bg-orange-500">
            <i className="fas fa-chalkboard-teacher"></i>
          </div>
          <div>
            <h2>Teachers</h2>
            <p>74K</p>
          </div>
        </div>
        <div className="stat">
          <div className="icon bg-red-500">
            <i className="fas fa-users"></i>
          </div>
          <div>
            <h2>Parents</h2>
            <p>40K</p>
          </div>
        </div>
      </div>
    );
}

export default Stats;