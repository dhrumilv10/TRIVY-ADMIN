import "./CSS/HeroSection.scss";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import React, { useState } from "react";

const HeroSection = ({ }) => {
    const [file, setFile] = useState("");

    return (
        <div className="newHero">
            <Sidebar />
            <div className="newHeroSection">
                <Navbar />
                <div className="up">
                    <h1>Hero-Section Images/Text Input</h1>
                </div>
                <div className="down">
                    <form>
                        <div className="wrapper">
                            <img
                                src={
                                    file
                                        ? URL.createObjectURL(file)
                                        : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
                                }
                                alt=""
                            /><br /><br />
                            <div className="formInput">
                                <label htmlFor="file">
                                    Image One: <DriveFolderUploadOutlinedIcon className="icon" />
                                </label>
                                <input
                                    type="file"
                                    id="file"
                                    onChange={(e) => setFile(e.target.file)}
                                    style={{ display: "none" }}
                                />
                                <label>Text One: </label>
                                <input />
                            </div>
                        </div>
                        <div className="wrapper">
                            <img
                                src={
                                    file
                                        ? URL.createObjectURL(file)
                                        : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
                                }
                                alt=""
                            /><br /><br />
                            <div className="formInput">
                                <label htmlFor="file">
                                    Image Two: <DriveFolderUploadOutlinedIcon className="icon" />
                                </label>
                                <input
                                    type="file"
                                    id="file"
                                    onChange={(e) => setFile(e.target.file)}
                                    style={{ display: "none" }}
                                />
                                <label>Text Two: </label>
                                <input />
                            </div>
                        </div><br />
                        <div className="wrapper">
                            <img
                                src={
                                    file
                                        ? URL.createObjectURL(file)
                                        : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
                                }
                                alt=""
                            /><br /><br />
                            <div className="formInput">
                                <label htmlFor="file">
                                    Image Three: <DriveFolderUploadOutlinedIcon className="icon" />
                                </label>
                                <input
                                    type="file"
                                    id="file"
                                    onChange={(e) => setFile(e.target.file)}
                                    style={{ display: "none" }}
                                />
                                <label>Text Three: </label>
                                <input />
                            </div>
                        </div>
                        <div className="wrapper">
                            <img
                                src={
                                    file
                                        ? URL.createObjectURL(file)
                                        : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
                                }
                                alt=""
                            /><br /><br />
                            <div className="formInput">
                                <label htmlFor="file">
                                    Image Four: <DriveFolderUploadOutlinedIcon className="icon" />
                                </label>
                                <input
                                    type="file"
                                    id="file"
                                    onChange={(e) => setFile(e.target.file)}
                                    style={{ display: "none" }}
                                />
                                <label>Text Four: </label>
                                <input />
                            </div>
                            <button>Send</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;