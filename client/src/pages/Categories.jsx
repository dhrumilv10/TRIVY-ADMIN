import './CSS/Categories.scss'
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import React, { useState } from 'react';
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";

const Categories = ({ }) => {
    const [file, setFile] = useState("");

    return (
        <div className="newCategory">
            <Sidebar />
            <div className="categoryContainer">
                <Navbar />
                <div className="top">
                    <h1>New Categories</h1>
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
                                    Categories Photo: <DriveFolderUploadOutlinedIcon className="icon" />
                                </label>
                                <input
                                    type="file"
                                    id="file"
                                    onChange={(e) => setFile(e.target.files[0])}
                                    style={{ display: "none" }}
                                />
                            </div>
                            <div className="formInput">
                                <label>Categories Name</label>
                                <input 
                                type="text"
                                placeholder='Soul Soothing' />
                            </div>
                            <div className="formInput">
                                <label>Categories Description</label>
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
                                    placeholder={"information"}>
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

export default Categories