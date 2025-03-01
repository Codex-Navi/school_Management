import Image from 'next/image';
import React from 'react';

function DashboardPreview(props) {
    return (
        <div style={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column',marginTop:'50px'}}>
            <img src='/images/dashboard.webp' style={{width:'90%',height:'100%',borderRadius:'10px'}}  alt=''/>
        </div>
    );
}

export default DashboardPreview;