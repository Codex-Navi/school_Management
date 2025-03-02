import "./notification.css"

// Sample data for notifications
const notifications = [
    {
        id: 1,
        type: "doctor",
        avatar: "https://randomuser.me/api/portraits/men/36.jpg",
        message: "Dr sultads Send you Photo",
        date: "29 July 2020 - 02:26 PM",
        initials: "DS",
    },
    {
        id: 2,
        type: "report",
        initials: "KG",
        message: "Resport created successfully",
        date: "29 July 2020 - 02:26 PM",
    },
    {
        id: 3,
        type: "reminder",
        icon: "home",
        message: "Reminder : Treatment Time!",
        date: "29 July 2020 - 02:26 PM",
    },
    {
        id: 4,
        type: "doctor",
        avatar: "https://randomuser.me/api/portraits/men/36.jpg",
        message: "Dr sultads Send you Photo",
        date: "29 July 2020 - 02:26 PM",
        initials: "DS",
    },
    {
        id: 5,
        type: "report",
        initials: "KG",
        message: "Resport created successfully",
        date: "29 July 2020 - 02:26 PM",
    },
]

const Notification = () => {
    // Function to render the appropriate icon based on notification type
    const renderIcon = (notification) => {
        switch (notification.type) {
            case "doctor":
                return (
                    <div className="avatar">
                        {notification.avatar ? (
                            <img src={notification.avatar || "/placeholder.svg"} alt="Doctor" />
                        ) : (
                            <span>{notification.initials}</span>
                        )}
                    </div>
                )
            case "report":
                return (
                    <div className={`initials-avatar ${notification.type}`}>
                        <span>{notification.initials}</span>
                    </div>
                )
            case "reminder":
                return (
                    <div className={`icon-avatar ${notification.type}`}>
                        <i className="home-icon">🏠</i>
                    </div>
                )
            default:
                return (
                    <div className="default-avatar">
                        <span>{notification.initials || "?"}</span>
                    </div>
                )
        }
    }

    return (
        <div className="notification-container">
            <h2 className="notification-header">Notification</h2>
            <div className="notification-list">
                {notifications.map((notification) => (
                    <div key={notification.id} className="notification-item">
                        {renderIcon(notification)}
                        <div className="notification-content">
                            <p className="notification-message">{notification.message}</p>
                            <p className="notification-date">{notification.date}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="notification-footer">
                <p>
                    See all notifications
                </p>
            </div>
        </div>
    )
}

export default Notification

