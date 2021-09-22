import React from 'react'
import '../../styles/AboutEdu.css';
// import anim from '../../assets/gif/git.gif';
import grado from '../../assets/Icons/graduation.png';
import devp from '../../assets/Icons/development.png';
import languages from '../../assets/Icons/languages.png';
// import arduino from '../../assets/Icons/arduino.png';
import embedded  from '../../assets/Icons/embedded2.png';
import networking  from '../../assets/Icons/networking.png';
import automation  from '../../assets/Icons/automation.png';
// import cpr from '../../assets/Icons/Cprogramming.png';
import html from '../../assets/Icons/html.png';
import css from '../../assets/Icons/css.png';
import javasc from '../../assets/Icons/javasc.png';
import mysql from '../../assets/Icons/mysql.png';
import react from '../../assets/Icons/react.png';
import flutter from '../../assets/Icons/flutter.png';
import english from '../../assets/Icons/english.png';
import spanish from '../../assets/Icons/spanish.png';
import french from '../../assets/Icons/french.png';

export const AboutEdu = () => {
    return (
        <section id="about" className="contenedor-principal">
            <div className="conten1" >
                <img className="icon1" src={grado} style={{width:"70px", height:"70px"}} title="Education" /> 
                {/* <br/> */}
                <p><span>Bachelor´s Degree in Electronic Engineering.</span> With an emphasis on embedded systems. University of San Buenaventura Cali. <a href="https://www.usbcali.edu.co/" >https://www.usbcali.edu.co</a>
                </p>
                <div id="edu-icons-container">
                    <div>
                        <div className="iconTagName">
                                <img className="icon2" src={embedded} style={{width:"70px"}} alt="C programming" />
                                <p className="manualText-size">EMBBEDED SYSTEMS</p>
                        </div>
                    </div>
                    <div>
                        <div className="iconTagName">
                                <img className="icon3" src={networking } style={{width:"70px"}} alt="Automation" />
                                <p className="manualText-size">COMPUTER NETWORKING</p>
                        </div>
                    </div>
                    <div>
                        <div className="iconTagName">
                            <img className="icon4" src={automation} style={{width:"90px"}} alt="Arduino" />
                            <p className="manualText-size">AUTOMATION</p>
                        </div>
                    </div>
                    {/* <div>
                        <div className="iconTagName">
                            <img className="icon4" src={arduino} style={{width:"90px"}} alt="Arduino" />
                            <p>HTML</p>
                        </div>
                    </div>
                    <div>
                        <div className="iconTagName">
                            <img className="icon4" src={arduino} style={{width:"90px"}} alt="Arduino" />
                            <p>HTML</p>
                        </div>
                    </div>
                    <div>
                        <div className="iconTagName">
                            <img className="icon4" src={arduino} style={{width:"90px"}} alt="Arduino" />
                            <p>HTML</p>
                        </div>
                    </div> */}
                </div>
            </div>
            <div className="clsVertical"></div>
            <div className="conten2" >
                <img id="icon5" src={devp} style={{width:"70px", height:"70px"}} title="Knowledge and Skills" />
                <div id="edu-icons-container">
                    <div>
                        <div className="iconTagName">
                            <img className="icon6" src={html} style={{width:"70px"}} alt="C programming" />
                            <p>HTML</p>
                        </div>
                    </div>
                    <div>
                        <div className="iconTagName">
                            <img className="icon7" src={css} style={{width:"70px"}} alt="Automation" />
                            <p>CSS</p>
                        </div>
                    </div>
                    <div>
                        <div className="iconTagName">
                            <img className="icon8" src={javasc} style={{width:"77px"}} alt="Arduino" />
                            <p>JAVASCRIPT</p>
                        </div>
                    </div>
                </div>
                <div id="edu-icons-container">
                    <div>
                        <div className="iconTagName">
                            <img className="icon9" src={react} style={{width:"70px"}} alt="C programming" />    
                            <p>REACT JS</p>
                        </div>
                    </div>
                    <div>
                        <div className="iconTagName">
                            <img className="icon10" src={mysql} style={{width:"70px"}} alt="Automation" />
                            <p>MYSQL</p>     
                        </div>
                    </div>
                    <div>
                        <div className="iconTagName">
                        <img className="icon11" src={flutter} style={{width:"70px"}} alt="Arduino" />
                        <p>FLUTTER</p>
                        </div>
                    </div>
                </div>
                
            </div>
            <di className="clsVertical"></di>
            <div className="conten3" >
                <img id="icon12" src={languages} style={{width:"70px", height:"70px"}} title="Languages" />
                <div id="lan-icons-container">
                    <div>
                        <div className="iconTagName7">
                            <img className="icon13" src={spanish} style={{width:"70px"}} alt="Spanish" title="Spanish" />
                            <p>100%</p>
                        </div>
                    </div>
                    <div>
                        <div className="iconTagName8">
                            <img className="icon14" src={english} style={{width:"77px"}} alt="English" title="English" />
                            <p>75%</p>
                        </div>
                    </div>
                    <div>
                        <div className="iconTagName9">
                            <img className="icon15" src={french} style={{width:"74px"}} alt="French" title="French" />
                            <p>Learning</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
