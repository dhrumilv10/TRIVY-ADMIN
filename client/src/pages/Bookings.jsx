import './CSS/Bookings.scss'
import React from 'react'
import Sidebar from "../components/Sidebar"
import Navbar from "../components/Navbar"
import DatatableBookings from "../components/DatatableBookings"

const Bookings = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <DatatableBookings />
      </div>
    </div>
  )
}

export default Bookings