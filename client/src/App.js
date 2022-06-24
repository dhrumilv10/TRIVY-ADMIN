import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Routes, Route } from 'react-router'
import Login from './pages/Login'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
import Villas from './pages/Villas'
import List from './pages/List'
import ListAdmin from './pages/ListAdmin'
import SingleUser from './pages/SingleUser'
import NewAdmin from './pages/NewAdmin'
import { adminInputs, dealInputs, offerInputs, profileInputs } from './FormSource'
import Bookings from './pages/Bookings'
import Offers from './pages/Offers'
import HeroSection from './pages/HeroSection'
import Profile from './pages/Profile'
import './style/dark.scss'
import { useContext } from 'react'
import { DarkModeContext } from './context/darkModeContext'
import DealOfDay from './pages/DealOfDay'
import Mood from './pages/Mood'
import Categories from './pages/Categories'
import Notifications from './pages/Notifications'
import Stats from './pages/Stats'

const App = () => {
    const { darkMode } = useContext(DarkModeContext);

    return (<div className={darkMode ? "app dark" : "app"}>
        <BrowserRouter>
            <Routes>
                <Route path="/login" exact element={<Login />} />
                <Route path="/register" exact element={<Register />} />
                <Route path="/dashboard" exact element={<Dashboard />} />
                <Route path="/notifications" exact element={<Notifications />} />
                <Route path="/stats" exact element={<Stats />} />                                
                <Route path='/offers' exact element={<Offers inputs={offerInputs} title="Add New Offer" />} />
                <Route path='/deal-of-day' exact element={<DealOfDay inputs={dealInputs} title="Add New Deal Of The Day" />} />
                <Route path="/category" exact element={<Categories />} />
                <Route path="/mood" exact element={<Mood />} />
                <Route path="/herosection" exact element={<HeroSection />} />
                <Route path="/villas" exact element={<Villas />} />
                <Route path="/bookings" exact element={<Bookings />} />
                <Route path='/profile' exact element={<Profile inputs={profileInputs} title="User Profile" />} />
                <Route path='/users'>
                    <Route index element={<List />} />
                    <Route path=":userId" element={<SingleUser />} />
                </Route>
                <Route path='/admins'>
                    <Route index element={<ListAdmin />} />
                    <Route path=":userId" element={<SingleUser />} />
                    <Route
                        path="newadmin"
                        element={<NewAdmin inputs={adminInputs} title="Add New Admin" />}
                    />
                </Route>
            </Routes>
        </BrowserRouter>
    </div>
    )
}

export default App