
import "./right-sidebar.css"



const Messages = ({ messages }) => {
  return (
    <div className="sidebar-section">
      <h2 className="section-title">Messages</h2>
      <div className="messages-container">
        {messages.map((message) => (
          <div key={message.id} className="message-item">
            <div className="avatar-container">
              <img src={message.user.avatar || "/placeholder.svg"} alt={message.user.name} className="avatar" />
            </div>
            <div className="message-content">
              <p style={{color:'#6b46c1',fontSize:'14px'}}>{message.user.name}</p>
              <p style={{color:'#b5b2b8',fontSize:'12px'}}>{message.message}</p>
            </div>
            <span className="message-time">{message.time}</span>
          </div>
        ))}
      </div>
      <button className="view-more-btn">View More</button>
    </div>
  )
}

export default Messages

