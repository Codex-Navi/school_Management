
import "./right-sidebar.css"


const CuratedFoodPicks = ({ foodItems }) => {
  return (
    <div className="sidebar-section">
      <h2 className="section-title">Curated Food Picks</h2>
      <div className="food-container">
        {foodItems.map((item) => (
          <div key={item.id} className="food-item">
            <img src={item.image || "/placeholder.svg"} alt={item.title} className="food-image" />
            <div className="food-details">
              <h3 style={{color:'#6b46c1',fontWeight:'bold'}}>{item.title}</h3>
              <p className="food-description">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
      <button className="view-more-btn">View More</button>
    </div>
  )
}

export default CuratedFoodPicks

