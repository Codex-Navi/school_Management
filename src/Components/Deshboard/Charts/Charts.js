import React from 'react';
import './chart.css'

function Charts(props) {
    return (
        <div className="charts">
      <div className="chart">
        <h2>School Performance</h2>
        <img src="/images/chart1.jpg" alt="Line chart showing school performance" />
      </div>
      <div className="chart">
        <h2>School Overview</h2>
        <img src="/images/chart2.jpg" alt="Bar chart showing school overview" />
      </div>
    </div>
    );
}

export default Charts;