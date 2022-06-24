import React from 'react';
import './CSS/Stats.scss'
import CountUp from 'react-countup';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';

const Stats = () => {
    return (
        <div className="newStat">
            <Sidebar />
            <div className="statContainer">
                <Navbar />
                <div className="top">
                    <h1>Statistics</h1>
                </div>
                <div className="bottom" style={{paddingLeft: "27%" }}>
                    <div className="counter">
                        <CountUp className='count' end={6} duration={2} />
                        <h2 className='h2'>Users</h2>
                    </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <div className="counter">
                        <CountUp className='count' end={4} duration={2} />
                        <h2 className='h2'>Bookings</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Stats