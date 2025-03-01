'use client'
import React, { useEffect, useRef, useState } from 'react';
import './sidebar.css'
import Link from 'next/link';
import { FaGraduationCap } from "react-icons/fa6";
import { MdChevronRight } from "react-icons/md";
import { FiChevronDown } from "react-icons/fi";
import { MdDashboardCustomize } from "react-icons/md";
import { GiTeacher } from "react-icons/gi";
import { FaRegNewspaper } from "react-icons/fa";
import { GrUserWorker } from "react-icons/gr";
import { PiStudentBold } from "react-icons/pi";
import { FaSchool } from "react-icons/fa6";
import { TbBus } from "react-icons/tb";
import { LiaMoneyCheckAltSolid } from "react-icons/lia";
import { GrResources } from "react-icons/gr";
import { IoBarChart } from "react-icons/io5";

function Sidebar(props) {

  const SidebarRef=useRef()
  

  const [isStudentMenuOpen, setIsStudentMenuOpen] = useState(false);
  const [isDashboardMenuOpen, setIsDashboardMenuOpen] = useState(false);
  const [isTeacherMenuOpen, setIsTeacherMenuOpen] = useState(false);
  const [isExamMenuOpen, setIsExamMenuOpen] = useState(false);
  const [isStaffMenuOpen, setIsStaffMenuOpen] = useState(false);
  const [isAcadMenuOpen, setIsAcadMenuOpen] = useState(false);
  const [isTransportMenuOpen, setIsTransportMenuOpen] = useState(false);
  const [isFinanceMenuOpen, setIsFinanceMenuOpen] = useState(false);
  const [isResourceMenuOpen, setIsResourceMenuOpen] = useState(false);
  const [isRAnalyticsMenuOpen, setIsRAnalyticsMenuOpen] = useState(false);


  useEffect(()=>{
    if(props.sideBarOpen == true){
      SidebarRef.current.style.width = "300px";
    }
    else{
      SidebarRef.current.style.width='60px'
    }
  },[props.sideBarOpen])
  

  const toggleStudentMenu = () => {
    setIsStudentMenuOpen(!isStudentMenuOpen);
  };

  const toggleDashboardMenu = () => {
    setIsDashboardMenuOpen(!isDashboardMenuOpen);
  };

  const toggleTeacherMenu = () => {
    setIsTeacherMenuOpen(!isTeacherMenuOpen);
  };

  const toggleExamMenu = () => {
    setIsExamMenuOpen(!isExamMenuOpen);
  };

  const toggleStaffMenu = () => {
    setIsStaffMenuOpen(!isStaffMenuOpen);
  };

  const toggleAcadMenu = () => {
    setIsAcadMenuOpen(!isAcadMenuOpen);
  };


  const toggleTransportMenu = () => {
    setIsTransportMenuOpen(!isTransportMenuOpen);
  };

  const toggleFinanceMenu = () => {
    setIsFinanceMenuOpen(!isFinanceMenuOpen);
  };

  const toggleResourceMenu = () => {
    setIsResourceMenuOpen(!isResourceMenuOpen);
  };
  

  const toggleRAnalyticsMenu = () => {
    setIsRAnalyticsMenuOpen(!isRAnalyticsMenuOpen);
  };


  
  

  return (
    <div className="sidebar" ref={SidebarRef}>
     { props.sideBarOpen == true &&<div style={{display:'flex',justifyContent:'space-between',marginBottom:'40px'}}>
        <div className="logo-icon">A</div>
        <span>It Helpdesk</span>
      </div>}

      {props.sideBarOpen == true && <div>
        
        <Image src={''}/>
        </div>}


      <nav className='dashboardsidebar'>
        {props.sideBarOpen == true && <section>
      <ul>
          <li style={{ display: 'flex',justifyContent:'space-between',alignItems:'center' }} onClick={toggleDashboardMenu}>
           <span style={{display:'flex',alignItems:'center'}}> <MdDashboardCustomize style={{marginRight:'10px',fontSize:'22px'}} /> <span className="font-bold" style={{textWrap:'nowrap',wordBreak:'keep-all'}}>Dashboard</span></span>
           <span> {isDashboardMenuOpen ? <FiChevronDown /> : <MdChevronRight />}</span>
          </li>

          {isDashboardMenuOpen && (
            <ul style={{marginLeft:'40px'}}>
              <li>Teacher Dashboard</li>
              <li>Student Dashboard</li>
              <li>Parent Dashboard</li>
            </ul>
          )}
        </ul>


        <ul>
          <li style={{ display: 'flex',justifyContent:'space-between',alignItems:'center' }} onClick={toggleTeacherMenu}>
           <span style={{display:'flex',alignItems:'center'}}> <GiTeacher style={{marginRight:'10px',fontSize:'22px'}} /> <span className="font-bold"  style={{textWrap:'nowrap',wordBreak:'keep-all'}}>Teacher Management</span></span>
           <span> {isTeacherMenuOpen ? <FiChevronDown /> : <MdChevronRight />}</span>
          </li>

          {isTeacherMenuOpen && (
            <ul style={{marginLeft:'40px'}}>
              <li>Teacher Management</li>
              <li>Teacher Management</li>
              <li>Teacher Management</li>
            </ul>
          )}
        </ul>



        
        <ul>
          <li style={{ display: 'flex',justifyContent:'space-between',alignItems:'center' }} onClick={toggleExamMenu}>
           <span style={{display:'flex',alignItems:'center'}}> <FaRegNewspaper style={{marginRight:'10px',fontSize:'22px'}} /> <span className="font-bold"  style={{textWrap:'nowrap',wordBreak:'keep-all'}}>Exam Management</span></span>
           <span> {isExamMenuOpen ? <FiChevronDown /> : <MdChevronRight />}</span>
          </li>

          {isExamMenuOpen && (
            <ul style={{marginLeft:'40px'}}>
              <li>Exam Management</li>
              <li>Exam Management</li>
              <li>Exam Management</li>
            </ul>
          )}
        </ul>
         

        <ul>
          <li style={{ display: 'flex',justifyContent:'space-between',alignItems:'center' }} onClick={toggleStaffMenu}>
           <span style={{display:'flex',alignItems:'center'}}> <GrUserWorker style={{marginRight:'10px',fontSize:'22px'}} /> <span className="font-bold"  style={{textWrap:'nowrap',wordBreak:'keep-all'}}>Staff Management</span></span>
           <span> {isStaffMenuOpen ? <FiChevronDown /> : <MdChevronRight />}</span>
          </li>

          {isStaffMenuOpen && (
            <ul style={{marginLeft:'40px'}}>
              <li>Staff Management</li>
              <li>Staff Management</li>
              <li>Staff Management</li>
            </ul>
          )}
        </ul>


        <ul>
          <li style={{ display: 'flex',justifyContent:'space-between',alignItems:'center' }} onClick={toggleStudentMenu}>
           <span style={{display:'flex',alignItems:'center'}}> <PiStudentBold style={{marginRight:'10px',fontSize:'22px'}} /> <span className="font-bold" style={{textWrap:'nowrap',wordBreak:'keep-all'}}>Student Management</span></span>
           <span> {isStudentMenuOpen ? <FiChevronDown /> : <MdChevronRight />}</span>
          </li>

          {isStudentMenuOpen && (
            <ul style={{marginLeft:'40px'}}>
              <li>Student Management</li>
              <li>Student Management</li>
              <li>Student Management</li>
            </ul>
          )}
        </ul>


        <ul>
          <li style={{ display: 'flex',justifyContent:'space-between',alignItems:'center' }} onClick={toggleAcadMenu}>
           <span style={{display:'flex',alignItems:'center'}}> <FaSchool style={{marginRight:'10px',fontSize:'22px'}} /> <span className="font-bold"  style={{textWrap:'nowrap',wordBreak:'keep-all'}}>Academics</span></span>
           <span> {isAcadMenuOpen ? <FiChevronDown /> : <MdChevronRight />}</span>
          </li>

          {isAcadMenuOpen && (
            <ul style={{marginLeft:'40px'}}>
             <li>Terms</li>
              <li>Class and Subjects</li>
              <li>Departments</li>
              <li>Timetable</li>
              <li>Examinations</li>
              <li>Assignments</li>
              <li>Report Cards</li>
            </ul>
          )}
        </ul>



        <ul>
          <li style={{ display: 'flex',justifyContent:'space-between',alignItems:'center' }} onClick={toggleTransportMenu}>
           <span style={{display:'flex',alignItems:'center'}}> <TbBus style={{marginRight:'10px',fontSize:'22px'}} /> <span className="font-bold"  style={{textWrap:'nowrap',wordBreak:'keep-all'}}>Tranport</span></span>
           <span> {isTransportMenuOpen ? <FiChevronDown /> : <MdChevronRight />}</span>
          </li>

          {isTransportMenuOpen && (
            <ul style={{marginLeft:'40px'}}>
             <li>Tranport</li>
              <li>Tranport</li>
           
            </ul>
          )}
        </ul>
        




        <ul>
          <li style={{ display: 'flex',justifyContent:'space-between',alignItems:'center' }} onClick={toggleFinanceMenu}>
           <span style={{display:'flex',alignItems:'center'}}> <LiaMoneyCheckAltSolid style={{marginRight:'10px',fontSize:'22px'}} /> <span className="font-bold"  style={{textWrap:'nowrap',wordBreak:'keep-all'}}>Finance</span></span>
           <span> {isFinanceMenuOpen ? <FiChevronDown /> : <MdChevronRight />}</span>
          </li>

          {isFinanceMenuOpen && (
            <ul style={{marginLeft:'40px'}}>
             <li>Finance</li>
            
            </ul>
          )}
        </ul>





        <ul>
          <li style={{ display: 'flex',justifyContent:'space-between',alignItems:'center' }} onClick={toggleResourceMenu}>
           <span style={{display:'flex',alignItems:'center'}}> <GrResources style={{marginRight:'10px',fontSize:'22px'}} /> <span className="font-bold"  style={{textWrap:'nowrap',wordBreak:'keep-all'}}>Resource</span></span>
           <span> {isResourceMenuOpen ? <FiChevronDown /> : <MdChevronRight />}</span>
          </li>

          {isResourceMenuOpen && (
            <ul style={{marginLeft:'40px'}}>
             <li>Resource</li>
           
            </ul>
          )}
        </ul>


       <ul>
          <li style={{ display: 'flex',justifyContent:'space-between',alignItems:'center' }} onClick={toggleRAnalyticsMenu}>
           <span style={{display:'flex',alignItems:'center'}}> <IoBarChart style={{marginRight:'10px',fontSize:'22px'}} /> <span className="font-bold"  style={{textWrap:'nowrap',wordBreak:'keep-all'}}>Reports & Analytics</span></span>
           <span> {isRAnalyticsMenuOpen ? <FiChevronDown /> : <MdChevronRight />}</span>
          </li>

          {isRAnalyticsMenuOpen && (
            <ul style={{marginLeft:'40px'}}>
             <li>Reports & Analytics</li>
           
            </ul>
          )}
        </ul>
     
    
       
   
      
        </section> }



        {props.sideBarOpen == false &&<section style={{width:'100%',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
          <Link href={'#'}><MdDashboardCustomize style={{fontSize:'30px'}}/></Link>
          <Link href={'#'}><GiTeacher style={{fontSize:'30px'}}/></Link>
          <Link href={'#'}><FaRegNewspaper style={{fontSize:'30px'}}/></Link>
          <Link href={'#'}><GrUserWorker style={{fontSize:'30px'}}/></Link>
          <Link href={'#'}><PiStudentBold style={{fontSize:'30px'}}/></Link>
          <Link href={'#'}><FaSchool style={{fontSize:'30px'}}/></Link>
          <Link href={'#'}><TbBus style={{fontSize:'30px'}}/></Link>
          <Link href={'#'}><LiaMoneyCheckAltSolid style={{fontSize:'30px'}}/></Link>
          <Link href={'#'}><GrResources style={{fontSize:'30px'}}/></Link>
          <Link href={'#'}><IoBarChart style={{fontSize:'30px'}}/></Link>
         


        </section>}
      

      </nav>
    </div>
  );
}

export default Sidebar;