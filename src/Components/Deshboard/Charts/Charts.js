"use client"

import { useState } from "react"
import ReactApexChart from "react-apexcharts"
import "./chart.css"
import { Cog, Droplet } from "lucide-react"

const Charts = () => {
  const [overviewPeriod, setOverviewPeriod] = useState("Week")

  // School Performance Chart Data
  const performanceOptions = {
    chart: {
      type: "area",
      height: 350,
      toolbar: {
        show: false,
      },
      fontFamily: "Inter, sans-serif",
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
      width: 3,
    },
    colors: ["#6366F1", "#F97316"],
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.3,
        opacityTo: 0.1,
        stops: [0, 100],
      },
    },
    grid: {
      borderColor: "#f1f1f1",
      row: {
        colors: ["transparent"],
        opacity: 0.5,
      },
    },
    xaxis: {
      categories: ["Week 01", "Week 02", "Week 03", "Week 04", "Week 05", "Week 06"],
      labels: {
        style: {
          colors: "#64748b",
          fontSize: "12px",
        },
      },
    },
    yaxis: {
      min: 160,
      max: 560,
      tickAmount: 5,
      labels: {
        formatter: (value) => `${value}k`,
        style: {
          colors: "#64748b",
          fontSize: "12px",
        },
      },
    },
    legend: {
      show: false,
    },
    tooltip: {
      x: {
        show: false,
      },
    },
  }

  const performanceSeries = [
    {
      name: "This Week",
      data: [180, 390, 320, 390, 200, 390],
    },
    {
      name: "Last Week",
      data: [480, 300, 390, 200, 480, 200],
    },
  ]

  // School Overview Chart Data
  const overviewOptions = {
    chart: {
      type: "bar",
      height: 350,
      toolbar: {
        show: false,
      },
      fontFamily: "Inter, sans-serif",
    },
    plotOptions: {
      bar: {
        borderRadius: 4,
        columnWidth: "30%",
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      width: [0, 3, 3],
      curve: "smooth",
    },
    colors: ["#6366F1", "#22C55E", "#F97316"],
    fill: {
      opacity: [1, 1, 1],
    },
    grid: {
      borderColor: "#f1f1f1",
      row: {
        colors: ["transparent"],
        opacity: 0.5,
      },
    },
    markers: {
      size: 0,
    },
    xaxis: {
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      labels: {
        style: {
          colors: "#64748b",
          fontSize: "12px",
        },
      },
    },
    yaxis: {
      min: 0,
      max: 100,
      tickAmount: 4,
      labels: {
        style: {
          colors: "#64748b",
          fontSize: "12px",
        },
      },
    },
    legend: {
      show: false,
    },
    tooltip: {
      shared: true,
      intersect: false,
    },
  }

  const overviewSeries = [
    {
      name: "Number of Projects",
      type: "column",
      data: [75, 80, 70, 95, 45, 95, 75, 75, 90, 70, 30, 95],
    },
    {
      name: "Revenue",
      type: "line",
      data: [60, 65, 55, 70, 45, 65, 55, 70, 65, 45, 50, 45],
    },
    {
      name: "Active Projects",
      type: "line",
      data: [25, 35, 30, 25, 25, 20, 25, 20, 30, 25, 20, 15],
      dashArray: 5,
    },
  ]

  return (
    <div className="chart-container">
      <div className="chart-card">
        <div className="chart-header">
          <h2 style={{color: '#6b46c1'}}>School Performance</h2>
          <div className="metrics">
            <div className="metric">
              <div className="metric-dot this-week"></div>
              <span>This Week</span>
              <span className="metric-value">1.245</span>
            </div>
            <div className="metric">
              <div className="metric-dot last-week"></div>
              <span>Last Week</span>
              <span className="metric-value">1.356</span>
            </div>
          </div>
        </div>
        <div className="chart-body">
          <ReactApexChart options={performanceOptions} series={performanceSeries} type="area" height={300} />
        </div>
      </div>

      <div className="chart-card">
        <div className="chart-header">
          <h2 style={{color: '#6b46c1'}}>School Overview</h2>
          <div className="period-selector">
            {["Week", "Month", "Year", "All"].map((period) => (
              <button
                key={period}
                className={`period-btn ${overviewPeriod === period ? "active" : ""}`}
                onClick={() => setOverviewPeriod(period)}
              >
                {period}
              </button>
            ))}
          </div>
        </div>
        <div className="chart-body">
          <ReactApexChart options={overviewOptions} series={overviewSeries} type="line" height={300} />
        </div>
        <div className="chart-legend">
          <div className="legend-item">
            <div className="legend-dot projects"></div>
            <span>Number of Projects</span>
          </div>
          <div className="legend-item">
            <div className="legend-dot revenue"></div>
            <span>Revenue</span>
          </div>
          <div className="legend-item">
            <div className="legend-dot active"></div>
            <span>Active Projects</span>
          </div>
        </div>
      </div>

      <div className="action-buttons">
        <button className="action-btn settings">
          <Cog size={20} />
        </button>
        <button className="action-btn theme">
          <Droplet size={20} />
        </button>
      </div>
    </div>
  )
}

export default Charts

