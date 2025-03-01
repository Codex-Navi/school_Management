import React from 'react';
import './navigation.css'
import Link from 'next/link';
import { FaAngleDown } from "react-icons/fa";




const features = [
  { icon: "fas fa-user-graduate", title: "Admissions Management", description: "Streamline the entire admission process with online..." },
  { icon: "fas fa-chart-line", title: "Behavior Tracking", description: "Record student behavior, disciplinary actions, and..." },
  { icon: "fas fa-calendar-alt", title: "Calendar & Scheduling", description: "Create master schedules, class timetables, and manage..." },
  { icon: "fas fa-file-alt", title: "Documentations & Forms", description: "Generate, distribute, and collect digital forms with e..." },
  { icon: "fas fa-clipboard-check", title: "Examinations & Assessments", description: "Create, administer, and grade various assessment types with..." },
  { icon: "fas fa-dollar-sign", title: "Financial Management", description: "Handle budgeting, fee collection, salary..." },
  { icon: "fas fa-graduation-cap", title: "Grading System", description: "Configure custom grading scales, calculate GPAs, and..." },
  { icon: "fas fa-bed", title: "Hostel Management", description: "Manage student accommodations, room..." },
  { icon: "fas fa-info-circle", title: "Information Portal", description: "Centralized knowledge base for policies, announcements..." },
  { icon: "fas fa-route", title: "Journey Tracking", description: "Monitor student progress throughout their academic..." },
  { icon: "fas fa-book", title: "Knowledge Management", description: "Digital resource library with lesson plans, teaching..." },
  { icon: "fas fa-bell", title: "Notifications System", description: "Automated alerts for attendance, grades, events..." },
  { icon: "fas fa-comments", title: "Messaging & Communication", description: "Secure messaging platform connecting administrators..." },
  { icon: "fas fa-chalkboard-teacher", title: "Learning Management", description: "Integrated LMS with course content, assignments, quizzes..." },
  { icon: "fas fa-tools", title: "Operational Management", description: "Manage facilities, maintenance requests..." },
];






function NavigationMenu(props) {
  return (
    <div>

<header>
            <div className="navigationcontainer">
                <div className="logo">
                    <img src="https://storage.googleapis.com/a1aa/image/CEoURG9xnxqswLWaGUDe5Q0FFMaQGe2NmCkGQZL-3k8.jpg" alt="ITHelpdesk School logo" />
                    <span>ITHelpdesk School</span>
                </div>
                <nav>
                    <a href={"/login"}>Home</a>
                    <div className="mega-menu">
                        <Link href={"#"} style={{display:'flex',alignItems:'center'}}>Features <FaAngleDown style={{marginTop:'5px'}}/> </Link>
                        <div className="mega-menu-content">
                            <div className="mega-menu-grid">
                                {features.map((feature, index) => (
                                    <div key={index} className="feature-card">
                                        <div className="flex items-center mb-2">
                                            <i className={`${feature.icon} icon`}></i>
                                            <h2>{feature.title}</h2>
                                        </div>
                                        <p>{feature.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <a href={"/login"}>Learn</a>
                    <a href={"/login"}>Academy</a>
                    <Link href={"/login"}>Log in</Link>
                    <Link href={"/login"} className="signup">Sign up</Link>
                </nav>
            </div>
        </header>
      
    </div>
  );
}

export default NavigationMenu;