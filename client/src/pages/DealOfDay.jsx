import './CSS/DealOfDay.scss'
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import React, { useState } from "react";
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

const DealOfDay = ({ inputs, title }) => {
    const [file, setFile] = useState("");
    const [selectedDate, setSelectedDate] = useState(null);

    return (
        <div className="newDeal">
            <Sidebar />
            <div className="dealContainer">
                <Navbar />
                <div className="top">
                    <h1>{title}</h1>
                </div>
                <div className="bottom">
                    <div className="left">
                        <img
                            src={
                                file
                                    ? URL.createObjectURL(file)
                                    : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
                            }
                            alt=""
                        />
                    </div>
                    <div className="right">
                        <form>
                            <div className="formInput">
                                <label htmlFor="file">
                                    Banner: <DriveFolderUploadOutlinedIcon className="icon" />
                                </label>
                                <input
                                    type="file"
                                    id="file"
                                    onChange={(e) => setFile(e.target.files[0])}
                                    style={{ display: "none" }}
                                />
                            </div>

                            {inputs.map((input) => (
                                <div className="formInput" key={input.id}>
                                    <label>{input.label}</label>
                                    <input type={input.type} placeholder={input.placeholder} />
                                </div>
                            ))}
                            <div className="formInput">
                                <label>Select Date</label>
                                <DatePicker
                                    selected={selectedDate}
                                    onChange={date => setSelectedDate(date)}
                                    dateFormat='dd/MM/yyyy'
                                    minDate={new Date()}
                                    showYearDropdown
                                    scrollableMonthYearDropdown
                                    placeholderText = {"dd/mm/yyyy"} />
                            </div>
                            <div className="formInput">
                                <label>Deal Description</label>
                                <textarea
                                    type="text"
                                    style={{ height: '175px', width: '335px' }}
                                    placeholder={"description"}>
                                </textarea>
                            </div>
                            <div className="formInput">
                                <label>T&C</label>
                                <textarea
                                    type="text"
                                    style={{ height: '175px', width: '335px' }}
                                    placeholder={"terms & conditions"}>
                                </textarea>
                            </div>

                            <button>Send</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DealOfDay