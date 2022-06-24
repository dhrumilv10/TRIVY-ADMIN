import React from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState } from "react";
import './CSS/Villas.scss'
import { hotelInputs } from '../FormSource';

const Villas = ({ }) => {
    const [files, setFiles] = useState("");
    // const [name, setName] = useState("");
    // const [city, setCity] = useState("");
    // const [state, setState] = useState("");
    // const [address, setAddress] = useState("");
    // const [bedroom, setBedroom] = useState("");
    // const [bathroom, setBathroom] = useState("");
    // const [max, setMax] = useState(""); 
    // const [price, setPrice] = useState("");
    // const [about, setAbout] = useState("");
    // const [rules, setRules] = useState("");
    // const [policy, setPolicy] = useState("");
    // const [mood, setMood] = useState("");
    // const [category, setCategory] = useState("");
    // const [checkin, setCheckin] = useState("");
    // const [checkout, setCheckout] = useState("");
    // const [amenity, setAmenity] = useState("");

    const [checked, setChecked] = React.useState(false);

    const handleChange = (e) => {
        
    };

    const handleSelect = (e) => {

    };

    async function registerVilla(event){
        event.preventDefault()

        const response = await fetch('http://localhost:1337/api/villas', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({ 

            })
        })

        const data = await response.json()
        console.log(data)
    }


    return (
        <div className='villa'>
            <Sidebar />
            <div className='villaContainer'>
                <Navbar />
                <div className="top">
                    <h1>Add New Villa</h1>
                </div>
                <div className="bottom">
                    <div className="left">
                        <img
                            src={
                                files
                                    ? URL.createObjectURL(files[0])
                                    : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
                            }
                            alt=""
                        /><br/><br/>
                        <img
                            src={
                                files
                                    ? URL.createObjectURL(files[1])
                                    : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
                            }
                            alt=""
                        /><br/><br/>
                        <img
                            src={
                                files
                                    ? URL.createObjectURL(files[2])
                                    : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
                            }
                            alt=""
                        /><br/><br/>
                        <img
                            src={
                                files
                                    ? URL.createObjectURL(files[3])
                                    : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
                            }
                            alt=""
                        /><br/><br/>
                        <img
                            src={
                                files
                                    ? URL.createObjectURL(files[4])
                                    : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
                            }
                            alt=""
                        /><br/><br/>
                        <img
                            src={
                                files
                                    ? URL.createObjectURL(files[5])
                                    : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
                            }
                            alt=""
                        /><br/><br/>
                    </div>
                    <div className="right">
                        <form onSubmit={registerVilla}>
                            <div className="formInput">
                                <label htmlFor="file">
                                    Image: <DriveFolderUploadOutlinedIcon className="icon" />
                                </label>
                                <input
                                    type="file"
                                    id="file"
                                    multiple
                                    onChange={(e) => setFiles(e.target.files[15])}
                                    style={{ display: "none" }}
                                />
                            </div>

                            {hotelInputs.map((input) => (
                                <div className="formInput" key={input.id}>
                                    <label>{input.label}</label>
                                    <input id={input.id} onChange={handleChange} type={input.type} placeholder={input.placeholder} />
                                </div>
                            ))}
                            <div className="formInput">
                                <label>About Villa</label>
                                <textarea
                                    type="text"
                                    style={{ height: '175px', width: '335px' }}
                                    placeholder={"description"}>
                                </textarea>
                            </div>
                            <div className="formInput">
                                <label>Home Rules</label>
                                <textarea
                                    type="text"
                                    style={{ height: '175px', width: '335px' }}
                                    placeholder={"no smoking, lights out at 10, etc..."}>
                                </textarea>
                            </div>
                            <div className="formInput">
                                <label>Policies</label>
                                <textarea
                                    type="text"
                                    style={{ height: '175px', width: '335px' }}
                                    placeholder={"(in pointers if many)"}>
                                </textarea>
                            </div>
                            <div className="formInput">
                                <label>Mood</label>
                                <select id="mood" onChange={handleChange}>
                                    <option>Summer Villas</option>
                                    <option>Luxury Villas</option>
                                    <option>Quintessential Villas</option>
                                    <option>Corporate Offsite Villas</option>
                                    <option>Pool Villas</option>
                                    <option>Kid-Friendly Villas</option>
                                    <option>Handpicked Villas</option>
                                    <option>Impeccable View Villas</option>
                                    <option>Pet-Friendly Villas</option>
                                    <option>Celebrity Choice Villas</option>
                                    <option>Beach Villas</option>
                                </select>
                            </div>
                            <div className="formInput">
                                <label>Categories</label>
                                <select id="category" onChange={handleChange}>
                                    <option>Beaches</option>
                                    <option>Islands</option>
                                    <option>Caves</option>
                                    <option>Countryside</option>
                                    <option>Snow</option>
                                    <option>Desert</option>
                                    <option>Domes</option>
                                </select>
                            </div>
                            <div className="formInput">
                                <label>Check-In Time</label>
                                <select id="check-in" onChange={handleChange}>
                                    <option>09:00 AM</option>
                                    <option>10:00 AM</option>
                                    <option>11:00 AM</option>
                                    <option>12:00 PM</option>
                                    <option>01:00 PM</option>
                                    <option>02:00 PM</option>
                                    <option>03:00 PM</option>
                                </select>
                            </div>
                            <div className="formInput">
                                <label>Check-Out Time</label>
                                <select id="check-out" onChange={handleChange}>
                                    <option>09:00 AM</option>
                                    <option>10:00 AM</option>
                                    <option>11:00 AM</option>
                                    <option>12:00 PM</option>
                                    <option>01:00 PM</option>
                                    <option>02:00 PM</option>
                                    <option>03:00 PM</option>
                                </select>
                            </div>
                            <div className="selectAmenities form-check custom-checkbox mb-3" onChange={handleSelect}>
                                <label style={{ paddingTop: "15px" }}>Amenities</label><br />
                                <label>
                                    <input type="checkbox"
                                        className='largeCheckbox'
                                        defaultChecked={checked}
                                        onChange={() => setChecked(!checked)}
                                    />
                                    AC
                                </label>&nbsp;&nbsp;&nbsp;
                                <label>
                                    <input type="checkbox"
                                        className='largeCheckbox'
                                        defaultChecked={checked}
                                        onChange={() => setChecked(!checked)}
                                    />
                                    TV
                                </label>&nbsp;&nbsp;&nbsp;
                                <label>
                                    <input type="checkbox"
                                        className='largeCheckbox'
                                        defaultChecked={checked}
                                        onChange={() => setChecked(!checked)}
                                    />
                                    Parking
                                </label>&nbsp;&nbsp;&nbsp;
                                <label>
                                    <input type="checkbox"
                                        className='largeCheckbox'
                                        defaultChecked={checked}
                                        onChange={() => setChecked(!checked)}
                                    />
                                    Pool
                                </label>&nbsp;&nbsp;&nbsp;
                                <label>
                                    <input type="checkbox"
                                        className='largeCheckbox'
                                        defaultChecked={checked}
                                        onChange={() => setChecked(!checked)}
                                    />
                                    Wi-fi
                                </label>&nbsp;&nbsp;&nbsp;
                                <label>
                                    <input type="checkbox"
                                        className='largeCheckbox'
                                        defaultChecked={checked}
                                        onChange={() => setChecked(!checked)}
                                    />
                                    Lawn
                                </label>&nbsp;&nbsp;&nbsp;
                                <label>
                                    <input type="checkbox"
                                        className='largeCheckbox'
                                        defaultChecked={checked}
                                        onChange={() => setChecked(!checked)}
                                    />
                                    Music System
                                </label>&nbsp;&nbsp;&nbsp;
                                <label>
                                    <input type="checkbox"
                                        className='largeCheckbox'
                                        defaultChecked={checked}
                                        onChange={() => setChecked(!checked)}
                                    />
                                    Barbeque
                                </label>&nbsp;&nbsp;&nbsp;
                                <label>
                                    <input type="checkbox"
                                        className='largeCheckbox'
                                        defaultChecked={checked}
                                        onChange={() => setChecked(!checked)}
                                    />
                                    Pets Allowed
                                </label>&nbsp;&nbsp;&nbsp;
                                <label>
                                    <input type="checkbox"
                                        className='largeCheckbox'
                                        defaultChecked={checked}
                                        onChange={() => setChecked(!checked)}
                                    />
                                    Laundry
                                </label>&nbsp;&nbsp;&nbsp;
                                <label>
                                    <input type="checkbox"
                                        className='largeCheckbox'
                                        defaultChecked={checked}
                                        onChange={() => setChecked(!checked)}
                                    />
                                    Pets Allowed
                                </label>&nbsp;&nbsp;&nbsp;
                                <label>
                                    <input type="checkbox"
                                        className='largeCheckbox'
                                        defaultChecked={checked}
                                        onChange={() => setChecked(!checked)}
                                    />
                                    Driver Accomodation
                                </label>&nbsp;&nbsp;&nbsp;
                                <label>
                                    <input type="checkbox"
                                        className='largeCheckbox'
                                        defaultChecked={checked}
                                        onChange={() => setChecked(!checked)}
                                    />
                                    Fitness Centre
                                </label>&nbsp;&nbsp;&nbsp;
                                <label>
                                    <input type="checkbox"
                                        className='largeCheckbox'
                                        defaultChecked={checked}
                                        onChange={() => setChecked(!checked)}
                                    />
                                    Bonfire
                                </label>&nbsp;&nbsp;&nbsp;
                                <label>
                                    <input type="checkbox"
                                        className='largeCheckbox'
                                        defaultChecked={checked}
                                        onChange={() => setChecked(!checked)}
                                    />
                                    Breakfast
                                </label>&nbsp;&nbsp;&nbsp;
                                <label>
                                    <input type="checkbox"
                                        className='largeCheckbox'
                                        defaultChecked={checked}
                                        onChange={() => setChecked(!checked)}
                                    />
                                    Lunch
                                </label>&nbsp;&nbsp;&nbsp;
                                <label>
                                    <input type="checkbox"
                                        className='largeCheckbox'
                                        defaultChecked={checked}
                                        onChange={() => setChecked(!checked)}
                                    />
                                    Dinner
                                </label>&nbsp;&nbsp;&nbsp;
                                <label>
                                    <input type="checkbox"
                                        className='largeCheckbox'
                                        defaultChecked={checked}
                                        onChange={() => setChecked(!checked)}
                                    />
                                    Buffet
                                </label>&nbsp;&nbsp;&nbsp;
                                <label>
                                    <input type="checkbox"
                                        className='largeCheckbox'
                                        defaultChecked={checked}
                                        onChange={() => setChecked(!checked)}
                                    />
                                    Sea View
                                </label>&nbsp;&nbsp;&nbsp;
                                <label>
                                    <input type="checkbox"
                                        className='largeCheckbox'
                                        defaultChecked={checked}
                                        onChange={() => setChecked(!checked)}
                                    />
                                    River View
                                </label>&nbsp;&nbsp;&nbsp;
                                <label>
                                    <input type="checkbox"
                                        className='largeCheckbox'
                                        defaultChecked={checked}
                                        onChange={() => setChecked(!checked)}
                                    />
                                    Mountain View
                                </label>
                            </div>
                            <button>Send</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Villas