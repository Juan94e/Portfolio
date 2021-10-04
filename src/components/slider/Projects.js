import React from 'react'
import '../../styles/Projects.css';
// ********** Images Import **********
import licor from '../../assets/images/Capture.PNG';
import flutterApp from '../../assets/images/lasTres1.jpg';
import portfolio from '../../assets/images/portfolio.PNG';
import gifapp from '../../assets/images/gifappdark.PNG';
// ********** Icons Import **********
import html from '../../assets/Icons/html.png';
import css from '../../assets/Icons/css.png';
import javasc from '../../assets/Icons/javasc.png';
import react from '../../assets/Icons/react.png';
import flutter from '../../assets/Icons/flutter.png';
import dart from '../../assets/Icons/dart.png';
import firebase from '../../assets/Icons/firebase.png';



export const Projects = () => {
    return (
        <div id="projects" className="projects-body"> 
            
            <h2 className="manualProjects-title">My Projects</h2>
            
            <div className="manualFlex-container">

                <div className="manualContainer">
                    <div className="manualCard manualFront">
                        <img className="card-image" src={licor} />
                        <h1>
                            Liquor Store
                        </h1>
                        <p>
                            This Website contains a liquor store, you can see all liquors like
                            wine, whisky, champagne, tequila and more. Actually not finished yet. working on
                            Backend, DataBase and an Ecommerce.
                        </p>
                    </div>
                    <div className="manualCard manualBack">
                        <h1> Used Technologies </h1>
                        <div id="projects-icons-container">
                            <div>
                                <div className="iconTagName">
                                    <img className="icon6" src={html} style={{width:"60px"}} alt="HTML" />
                                </div>
                            </div>
                            <div>
                                <div className="iconTagName">
                                    <img className="icon7" src={css} style={{width:"60px"}} alt="CSS" />
                                </div>
                            </div>
                            <div>
                                <div className="iconTagName">
                                    <img className="icon8" src={javasc} style={{width:"63px"}} alt="JavaScript" />
                                </div>
                            </div>
                        </div>
                        <div className="btn-container" >
                            <a href="https://github.com/Juan94e/Liquor_Store" target="_blank" className="manualBtn"> Github </a>
                            <a href="https://joao-sitee.web.app/" target="_blank" className="manualBtn"> Live Site </a>
                        </div>
                    </div>
                </div>

                <div className="manualContainer">
                    <div className="manualCard manualFront">
                        <img className="card-image" src={gifapp} />
                        <h1>
                            Gif App
                        </h1>
                        <p>
                            This application was made with an API to get the gifs, it also has light and dark mode
                            {/* This is my own Website, here you can find info about me,  such as my education, knowledge, skills, languages and more. Get in touch... */}
                        </p>
                    </div>
                    <div className="manualCard manualBack">
                        <h1> Used Technologies </h1>
                        <div id="projects-icons-container">
                            <div>
                                <div className="iconTagName">
                                    <img className="icon6" src={html} style={{width:"60px"}} alt="HTML" />
                                </div>
                            </div>
                            <div>
                                <div className="iconTagName">
                                    <img className="icon7" src={css} style={{width:"60px"}} alt="CSS" />
                                </div>
                            </div>
                            <div>
                                <div className="iconTagName">
                                    <img className="icon8" src={javasc} style={{width:"63px"}} alt="JavaScript" />
                                </div>
                            </div>
                            <div>
                                <div className="react-icon-container">
                                    <img className="react-icon" src={react} style={{width:"60px"}} alt="React" />
                                </div>
                            </div>
                        </div>
                        <div className="btn-container" >
                            <a href="https://github.com/Juan94e/Gif-App" target="_blank" className="manualBtn"> Github </a>
                            <a href="https://find-ur-gif.firebaseapp.com/" target="_blank" className="manualBtn"> Live Site </a>
                        </div>
                    </div>
                </div>

                <div className="manualContainer">
                    <div className="manualCard manualFront">
                        <img className="card-image" src={flutterApp} />
                        <h1>
                            Flutter App
                        </h1>
                        <p>
                            This is a mini application with email and google authentication. It is not completely finished yet, I am currently working on it
                        </p>
                    </div>
                    <div className="manualCard manualBack">
                        <h1> Used Technologies </h1>
                        <div id="projects-icons-container">
                            <div>
                                <div className="iconTagName">
                                    <img className="icon6" src={dart} style={{width:"60px"}} alt="Dart" />
                                </div>
                            </div>
                            <div>
                                <div className="iconTagName">
                                    <img className="icon7" src={flutter} style={{width:"60px"}} alt="Flutter" />
                                </div>
                            </div>
                            <div>
                                <div className="iconTagName">
                                    <img className="icon8" src={firebase} style={{width:"63px"}} alt="FireBase" />
                                </div>
                            </div>
                        </div>
                        <div className="btn-container" >
                            <a href="https://github.com/Juan94e/FlutterApp" target="_blank" className="manualBtn"> Github </a>
                        </div>
                    </div>
                </div>

            </div>

            
        </div>
    )
}
