import React from 'react'
import './CSS/Notifications.scss'
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';

const Notifications = ({ }) => {

    return (
        <div className="newNotification">
            <Sidebar />
            <div className="notificationContainer">
                <Navbar />
                <div className="top">
                    <h1>Send Push Notifications</h1>
                </div>
                <div className="bottom">
                        <form>
                            <div className="formInput">
                                <label>Notification Title</label><br />
                                <input 
                                type="text"
                                placeholder='Soul Soothing' />
                            </div>
                            <div className="formInput">
                                <label>Notification Message</label><br />
                                <textarea
                                    type="text"
                                    style={{ height: '175px', width: '335px' }}
                                    placeholder={"description"}>
                                </textarea>
                            </div>
                            <div className="centered">
                                <button>Send</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
    )
}

export default Notifications