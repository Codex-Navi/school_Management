
import "./right-sidebar.css"
import { MdOutlineAddCircle } from "react-icons/md";
import { MdMail } from "react-icons/md";


const RecentMatches = ({ matches }) => {
  return (
    <div className="sidebar-section">
      <h2 className="section-title" style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}><span> Recent Students <br/><span style={{fontSize:'12px',color:'#b5b2b8',fontWeight:'bold'}}>You have 500 Students</span></span> <span style={{color:'#6b46c1',fontSize:'40px'}}><MdOutlineAddCircle /></span>   </h2>
      <div className="matches-container">
        {matches.map((match) => (
          <div key={match.id} className="match-item">
            <div className="avatar-container" style={{display:'flex'}}>
              <img src={match.avatar || "/placeholder.svg"} alt={match.name} className="avatar" style={{marginRight:'15px'}} />
              <div>
              <p style={{color:'#6b46c1',fontSize:'14px'}}>{match.name}</p>
              <p style={{fontSize:'11px',color:'#b5b2b8',fontWeight:'bold'}}>{match.class}</p>
            
              </div>
             
            </div>
           
            <div style={{border:'2px solid #A098AE',width:'40px',height:'40px',borderRadius:'50%',display:'flex',justifyContent:'center',alignItems:'center',color:' #A098AE',fontSize:'22px'}}>
              <span ><MdMail /></span>
            </div>
          </div>
        ))}
      </div>
      <button className="view-more-btn">View More</button>
    </div>
  )
}

export default RecentMatches

