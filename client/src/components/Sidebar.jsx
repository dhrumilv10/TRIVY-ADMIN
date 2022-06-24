import React from 'react'
import { Link } from 'react-router-dom'
import './CSS/Sidebar.scss'
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import VillaIcon from '@mui/icons-material/Villa';
import CreditCardIcon from "@mui/icons-material/CreditCard";
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import InsertChartIcon from "@mui/icons-material/InsertChart";
import CategoryIcon from '@mui/icons-material/Category';
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import MoodIcon from '@mui/icons-material/Mood';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { useContext } from 'react';
import { DarkModeContext } from '../context/darkModeContext';

const Sidebar = () => {
  const { dispatch } = useContext(DarkModeContext);

  const logout = () => {
    localStorage.clear();
    window.location.href = 'localhost:3000' + '/login';
  }

  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/dashboard" style={{ textDecoration: "none" }}>
          <span className="logo">TRIVY</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <Link to="/dashboard" style={{ textDecoration: "none" }}>
            <li>
              <DashboardIcon className="icon" />
              <span>Dashboard</span>
            </li>
          </Link>
          <p className="title">LISTS</p>
          <Link to="/users" style={{ textDecoration: "none" }}>
            <li>
              <PersonOutlineIcon className="icon" />
              <span>Users</span>
            </li>
          </Link>
          <Link to="/admins" style={{ textDecoration: "none" }}>
            <li>
              <SupervisedUserCircleIcon className="icon" />
              <span>Admins</span>
            </li>
          </Link>
          <Link to="/offers" style={{ textDecoration: "none" }}>
            <li>
              <LocalOfferIcon className="icon" />
              <span>Offers</span>
            </li>
          </Link>
          <Link to="/bookings" style={{ textDecoration: "none" }}>
            <li>
              <CreditCardIcon className="icon" />
              <span>Bookings</span>
            </li>
          </Link>
          <Link to="/villas" style={{ textDecoration: "none" }}>
            <li>
              <VillaIcon className="icon" />
              <span> Villas</span>
            </li>
          </Link>
          <p className="title">USEFUL</p>
          <Link to="/stats" style={{ textDecoration: "none" }}>
          <li>
            <InsertChartIcon className="icon" />
            <span>Stats</span>
          </li>
          </Link>
          <Link to="/notifications" style={{ textDecoration: "none" }}>
          <li>
            <NotificationsNoneIcon className="icon" />
            <span>Notifications</span>
          </li>
          </Link>
          <p className="title">SERVICE</p>
          <Link to="/mood" style={{ textDecoration: "none" }}>
            <li>
              <MoodIcon className="icon" />
              <span>Mood</span>
            </li>
          </Link>
          <Link to="/deal-of-day" style={{ textDecoration: "none" }}>
            <li>
              <ThumbUpIcon className="icon" />
              <span>Deals of the Day</span>
            </li>
          </Link>
          <Link to="/herosection" style={{ textDecoration: "none" }}>
            <li>
              <InsertPhotoIcon className="icon" />
              <span>Hero-section Images</span>
            </li>
          </Link>
          <Link to="/category" style={{ textDecoration: "none" }}>
          <li>
            <CategoryIcon className="icon" />
            <span>Categories</span>
          </li>
          </Link>
          <p className="title">USER</p>
          <Link to="/profile" style={{ textDecoration: "none" }}>
            <li>
              <AccountCircleOutlinedIcon className="icon" />
              <span>Profile</span>
            </li>
          </Link>
          <Link to = '/login' onClick={logout()} style={{ textDecoration: "none" }}>
            <li>
              <ExitToAppIcon className="icon" />
              <span>Logout</span>
            </li>
          </Link>
        </ul>
      </div>
      <div className="bottom">
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "LIGHT" })}
        ></div>
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "DARK" })}
        ></div>
      </div>
    </div>
  )
}

export default Sidebar