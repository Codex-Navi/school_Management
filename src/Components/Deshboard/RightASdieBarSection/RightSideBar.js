import  React from "react"
import "./right-sidebar.css"
import RecentMatches from "./RecentMatches"
import Messages from "./Messages"
import CuratedFoodPicks from "./CuratedFoodPicks"


// Sample data
const recentMatches = [
  {
    id: 1,
    name: "Alexander Pierce",
    avatar: "/images/pic1.jpg",
    class:"Class VII A",
    percentage: 85,
  },
  {
    id: 2,
    name: "Clara Lewis",
    avatar: "/images/pic2.jpg",
    class:"Class VII A",
    percentage: 72,
  },
  {
    id: 3,
    name: "Michael Rodriguez",
    avatar: "/images/pic3.jpg",
    class:"Class VII A",
    percentage: 68,
  },
  {
    id: 4,
    name: "Sophia Lee",
    avatar: "/images/pic4.jpg",
    class:"Class VII A",
    percentage: 91,
  },
]

const messages = [
  {
    id: 1,
    user: {
      id: 1,
      name: "Alexander Pierce",
      avatar: "/images/pic1.jpg",
    },
    message: "Hey, how are you doing today?",
    time: "2h ago",
  },
  {
    id: 2,
    user: {
      id: 2,
      name: "Clara Lewis",
      avatar: "/images/pic2.jpg",
    },
    message: "I'd love to try that restaurant you mentioned!",
    time: "5h ago",
  },
  {
    id: 3,
    user: {
      id: 5,
      name: "David Kim",
      avatar: "/images/pic3.jpg",
    },
    message: "Are we still meeting tomorrow?",
    time: "Yesterday",
  },

  {
    id: 4,
    user: {
      id: 5,
      name: "David Kim",
      avatar: "/images/pic3.jpg",
    },
    message: "Are we still meeting tomorrow?",
    time: "Yesterday",
  },
  {
    id: 5,
    user: {
      id: 5,
      name: "David Kim",
      avatar: "/images/pic3.jpg",
    },
    message: "Are we still meeting tomorrow?",
    time: "Yesterday",
  },
]

const foodPicks= [
  {
    id: 1,
    title: "Delicious Beef Noodle Soup",
    image: "/images/food1.jpg",
    description: "Rich broth with tender beef and fresh vegetables",
  },
  {
    id: 2,
    title: "Fluffy Pancake Stack",
    image: "/images/food2.jpg",
    description: "Served with maple syrup and fresh berries",
  },
  {
    id: 3,
    title: "Grilled Salmon Bowl",
    image: "/images/food3.jpg",
    description: "With quinoa, avocado and seasonal vegetables",
  },
]

const RightSideBar = () => {
  return (
    <div className="right-sidebar">
      <RecentMatches matches={recentMatches} />
      <Messages messages={messages} />
      <CuratedFoodPicks foodItems={foodPicks} />
    </div>
  )
}

export default RightSideBar



