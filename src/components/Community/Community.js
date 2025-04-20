import React from 'react';
import { AiOutlineApple } from "react-icons/ai";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import "./Community.css";

const Community = () => {
  return (
    <section id="community">
    <div className="community__header">
        <h2>Be part of the future</h2>
        <p>Install the app and progress with us</p>
        <div className="community__icons">
    <AiOutlineApple className="icon"></AiOutlineApple>
    <IoLogoGooglePlaystore className="icon"></IoLogoGooglePlaystore>
        </div>
    </div>
    <div className="community__image">
        <img src="/assets/community"></img>
    </div>
      
    </section>
  )
}

export default Community
