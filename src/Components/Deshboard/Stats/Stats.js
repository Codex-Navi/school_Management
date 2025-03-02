import React from 'react';
import './stats.css'

function Stats(props) {
    return (
        <div className="stats">
        <div className="stat" >
          <div className="icon" style={{background:'#4d44b5'}}>
           <img src="/images/gra-student.png" alt='' />
          </div>
          <div>
            <h2 style={{ color: '#6b46c1',fontWeight:'bold'}}>Students</h2>
            <p style={{color:'#6b46c1',fontWeight:'bolder',fontSize:'22px'}}>93K</p>
          </div>
        </div>
        <div className="stat" >
          <div className="icon" style={{background:'#fb7d5b'}}>
          <img src="/images/classroom.png" alt='' />

          </div>
          <div>
            <h2 style={{ color: '#6b46c1',fontWeight:'bold'}}>Teachers</h2>
            <p style={{color:'#6b46c1',fontWeight:'bolder',fontSize:'22px'}}>200</p>
            {/* dlksfgjlkdfgjlkdfgj */}
          </div>
        </div>
        <div className="stat"  >
          <div className="icon" style={{background:'#fcc43e'}}>
          <img src="/images/parent.png" alt='' />

          </div>
          <div>
            <h2 style={{ color: '#6b46c1',fontWeight:'bold'}}>Parents</h2>
            <p style={{color: '#6b46c1',fontWeight:'bolder',fontSize:'22px'}}>40K</p>
          </div>
        </div>
        
        <div className="stat">
          <div className="icon"  style={{background:'#303972'}}>
          <img src="/images/calendar.png" alt='' />

          </div>
          <div>
            <h2 style={{ color:'#6b46c1',fontWeight:'bold'}}>Event</h2>
            <p style={{color:'#6b46c1',fontWeight:'bolder',fontSize:'22px'}}>40</p>
          </div>
        </div>


        <div className="stat">
          <div className="icon"  style={{background:'#fb7d5b'}}>
          <img src="/images/fast-food.png" alt='' />

          </div>
          <div>
            <h2 style={{ color: '#6b46c1',fontWeight:'bold'}}>Food</h2>
            <p style={{color:'#6b46c1',fontWeight:'bolder',fontSize:'22px'}}> 40</p>
          </div>
        </div>




           
      </div>
    );
}

export default Stats;