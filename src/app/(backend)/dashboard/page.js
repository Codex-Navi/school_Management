'use client'
import React, { useState } from 'react';
import './dashboard.css'
import Sidebar from '@/Components/Deshboard/Sidebar/Sidebar';
import Header from '@/Components/Deshboard/Header/Header';
import Stats from '@/Components/Deshboard/Stats/Stats';
import Charts from '@/Components/Deshboard/Charts/Charts';
import Calendar from '@/Components/Deshboard/Calendar/Calendar';
import UnpaidStudents from '@/Components/Deshboard/UnpaidStudents/UnpaidStudents';
import { Avatar, Drawer } from '@mui/material';
import { MdDashboardCustomize } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import { BsFillMenuButtonWideFill } from "react-icons/bs";
import { LuMoonStar } from "react-icons/lu";
import { FiSun } from "react-icons/fi";
import { FaLeftLong } from "react-icons/fa6";
import { FaRightLong } from "react-icons/fa6";
import { MdOutlineMessage } from "react-icons/md";
import { IoNotifications } from "react-icons/io5";
import { IoSettings } from "react-icons/io5";
import RightSideBar from '@/Components/Deshboard/RightASdieBarSection/RightSideBar';

function page(props) {

  const [open, setOpen] = React.useState(false);
  const [sideBarOpen, setSideBarOpen] = useState(false)
  const [darkmode, setDarkMode] = useState(false)
  const [rightSideBar,setRightSideBar]=useState(false)



  function manageSideBar() {
    setSideBarOpen(!sideBarOpen)
  }

  function handleDrakMode() {

    setDarkMode(!darkmode)

  }

  function handleRightSdieDrawer(){
    setRightSideBar(!rightSideBar)
  }

  return (
    <div className="Homecontainer">


      <Sidebar sideBarOpen={sideBarOpen} />

      <div className="main-content">
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '24px', fontWeight: 'bolder', backgroundColor: '#6366f1', padding: "10px 20px " }}>

          <section style={{ display: 'flex', alignItems: 'center', color: "white" }}> {sideBarOpen == true ? <FaLeftLong style={{ cursor: 'pointer', marginRight: '10px' }} onClick={manageSideBar} /> : <FaRightLong style={{ cursor: 'pointer', marginRight: '10px' }} onClick={manageSideBar} />} <h1>Dashboard</h1></section>

          <section style={{ color: 'white', display: 'flex', alignItems: 'center' }}>

            <FaSearch style={{ marginRight: '20px' }} />
            <BsFillMenuButtonWideFill style={{ marginRight: '20px' }} onClick={handleRightSdieDrawer} />
            <div style={{ marginRight: '20px', cursor: 'pointer' }}>{darkmode == false ? <LuMoonStar onClick={handleDrakMode} /> : <FiSun onClick={handleDrakMode} />}</div>
            <MdOutlineMessage style={{ marginRight: '20px' }} />
            <IoNotifications style={{ marginRight: '20px' }} />
            <IoSettings style={{ marginRight: '20px' }} />
            <Avatar alt="Remy Sharp" src="/images/2.jpg" style={{ marginRight: '20px' }} />

            <div className='ExtraWraper'>

              <Drawer anchor='right' open={rightSideBar}>
                <button style={{display:'flex',justifyContent:'flex-start'}}> <span  onClick={handleRightSdieDrawer} style={{background:'red',width:'50px',textAlign:'center',color:'white',fontWeight:'bolder',padding:'10px',cursor:'pointer'}}>X</span></button>
                <RightSideBar/>
              </Drawer>


            </div>





          </section>




        </div>
        <Stats />
        <Charts />
        <Calendar />
        <UnpaidStudents />
        
        
        <footer className="footer">
          <p>Copyright © Designed & Developed by DesignLab 2025</p>
        </footer>
      </div>
    </div>
  );
}

export default page;