import React from 'react'
import "./CSS/List.scss"
import Sidebar from "../components/Sidebar"
import Navbar from "../components/Navbar"
import DatatableAdmin from "../components/DatatableAdmin"

const ListAdmin = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <DatatableAdmin/>
      </div>
    </div>
  )
}

export default ListAdmin