'use client'
import React, { useState } from 'react';
import './dashboard.css'
import Sidebar from '@/Components/Deshboard/Sidebar/Sidebar';
import Header from '@/Components/Deshboard/Header/Header';
import Stats from '@/Components/Deshboard/Stats/Stats';
import Charts from '@/Components/Deshboard/Charts/Charts';
import Calendar from '@/Components/Deshboard/Calendar/Calendar';
import TeacherDetails from '@/Components/Deshboard/TeacherDetails/TeacherDetails';
import UnpaidStudents from '@/Components/Deshboard/UnpaidStudents/UnpaidStudents';
import { Drawer } from '@mui/material';
import { MdDashboardCustomize } from "react-icons/md";

function page(props) {

  const [open, setOpen] = React.useState(false);
  const [sideBarOpen,setSideBarOpen]=useState(false)

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  function manageSideBar(){
    setSideBarOpen(!sideBarOpen)
  }

  return (
    <div className="Homecontainer">
      
      
        <Sidebar sideBarOpen={sideBarOpen} />
    
      <div className="main-content">
      <div style={{ display: 'flex', alignItems: 'center', fontSize: '24px', fontWeight: 'bolder' }}>
        <MdDashboardCustomize style={{ marginRight: '10px' }} onClick={manageSideBar}  /> <h1>Dashboard</h1>
      </div>
        <Stats />
        <Charts />
        <Calendar />
        <TeacherDetails />
        <UnpaidStudents />
        <footer className="footer">
          <p>Copyright © Designed & Developed by DesignLab 2025</p>
        </footer>
      </div>
    </div>
  );
}

export default page;