import React from 'react'
import { motion } from "framer-motion"
import '../../styles/About.css';
import aboutImg from '../../assets/images/aboutImg.jpg';

export const About = () => {
    return (
        <div id="about" className="manualAbout-container">  

            <div className="manualAbout-desc">
                <h3 className="prub1" >Let me tell you something about me</h3>
                <p>Electronic Engineer with an emphasis on embedded systems. Hands-on Engineer. Willing to learn as well as to utilize my knowledge and expertise for optimal Engineer-ing results. </p>
            </div>

            <div  className="about-img">
                <img 
                    src={aboutImg}
                    alt="About"
                    className="imagen"
                />
            </div>
        </div>
        
    )
}
