import React from 'react';
import { AiOutlineApple } from "react-icons/ai";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import "./Download.css";

const Download = () => {
  return (
    <section id="download">
    <div className="download__header" data-aos="fade-down">
        <h2>Be Part of the Future</h2>
        <p>Install the app and progress with us</p>
        <div className="download__icons">
    <AiOutlineApple className="icon"></AiOutlineApple>
    <IoLogoGooglePlaystore className="icon"></IoLogoGooglePlaystore>
        </div>
    </div>
    <div className="download__image">
    </div>
      
    </section>
  )
}

export default Download
