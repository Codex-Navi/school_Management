import React from 'react';
import { Carousel, Form, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Checkbox, TextField } from '@mui/material';
import './login.css'
import Link from 'next/link';
import { FaGraduationCap } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";


const Login = () => {
  return (
    <div className='loginMainCont'>
      <section className='loginfromSecton'>
        <section style={{padding:'20px'}}>
        <Link href={"/"} className="flex items-center space-x-2 " style={{textDecoration:'none'}}>
          <div className="bg-blue-500 rounded-full p-1">
            <span className="text-white font-bold text-xl "><FaGraduationCap/></span>
          </div>
          <span style={{marginLeft:'10px'}} className="font-bold text-xl">ITHelpdesk School</span>
        </Link>

        </section>
        <section className='loginfrom'>
          <div className='loginfromCont'>
          <h2>Login To Your Account</h2>
       
        <TextField id="outlined-basic" label="User Email" variant="outlined" style={{width:'80%',marginBottom:'30px'}} />
   

        
        <TextField id="outlined-basic" label="Password" variant="outlined" style={{width:'80%',marginBottom:'10px'}} />
        
        <div style={{display:'flex',justifyContent:'end',width:'80%',marginBottom:'10px'}}>
          <Link href={"#"} style={{textDecoration:'none'}}>Forgot password?</Link>
        </div>

        <div style={{width:'80%'}}>
           <h6 style={{display:'flex',alignItems:'center',justifyContent:'center',fontSize:'14px'}}><Checkbox style={{marginBottom:'20px'}} /> <p>By continuing, you agree to ItHelpdesk School <Link href={'#'}> Conditions of Use</Link> and <Link href={'#'}>Privacy Notice</Link>.</p></h6>
        </div>

        <div style={{width:'80%',marginBottom:'30px'}}>
        <Button variant="contained" style={{width:'100%'}}>Login</Button>
        </div>
          
          <div className='googlebtnwrap'>
            <Button className='googlebtn'><span className='googleicon'><FcGoogle style={{width:'90%',height:'90%'}} /></span> <span>Continue with Google</span></Button>
          </div>

        </div>
        </section>
      </section>
      <section className='carouslSection'>
      <Carousel style={{height:'100vh'}}>
            <Carousel.Item>
              <img
                style={{height:'100vh'}}
                src="/images/student1.jpg"
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
               style={{height:'100vh'}}
                src="/images/student2.jpg"
                alt="Second slide"
              />
          
            </Carousel.Item>
            <Carousel.Item>
              <img
                style={{height:'100vh'}}
                src="/images/student3.jpg"
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>
      </section>
    </div>
  );
};

export default Login;