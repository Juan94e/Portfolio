import React from 'react'
import '../../styles/Projects.css';
// ********** Images Import **********
import licor from '../../assets/images/Capture.PNG';
import flutter from '../../assets/images/lasTres1.jpg';
import portfolio from '../../assets/images/portfolio.PNG';
// ********** Icons Import **********
import html from '../../assets/Icons/html.png';
import css from '../../assets/Icons/css.png';
import javasc from '../../assets/Icons/javasc.png';


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
                            Working on:
                        </p>
                        <ul>
                            <li>
                                Backend
                            </li>
                            <li>
                                Liquor DataBase
                            </li>
                            <li>
                                Liquor Search and Filtering
                            </li>
                            <li>
                                Ecommerce
                            </li>
                        </ul>
                    </div>
                    <div className="manualCard manualBack">
                        <h1> Technologies Used </h1>
                        <div id="edu-icons-container2">
                            <div>
                                <div className="iconTagName">
                                    <img className="icon6" src={html} style={{width:"60px"}} alt="C programming" />
                                </div>
                            </div>
                            <div>
                                <div className="iconTagName">
                                    <img className="icon7" src={css} style={{width:"60px"}} alt="Automation" />
                                </div>
                            </div>
                            <div>
                                <div className="iconTagName">
                                    <img className="icon8" src={javasc} style={{width:"63px"}} alt="Arduino" />
                                </div>
                            </div>
                        </div>
                        <div className="btn-container" >
                            <a href="" className="manualBtn"> Github </a>
                            <a href="" className="manualBtn"> Live Site </a>
                        </div>
                    </div>
                </div>

                <div className="manualContainer">
                    <div className="manualCard manualFront">
                        <img className="card-image" src={portfolio} />
                        <h1>
                            Liquor Store
                        </h1>
                        <p>
                            Working on:
                        </p>
                        <ul>
                            <li>
                                Backend
                            </li>
                            <li>
                                Liquor DataBase
                            </li>
                            <li>
                                Liquor Search and Filtering
                            </li>
                            <li>
                                Ecommerce
                            </li>
                        </ul>
                    </div>
                    <div className="manualCard manualBack">
                        <h1> Technologies Used </h1>
                        <div id="edu-icons-container2">
                            <div>
                                <div className="iconTagName">
                                    <img className="icon6" src={html} style={{width:"60px"}} alt="C programming" />
                                </div>
                            </div>
                            <div>
                                <div className="iconTagName">
                                    <img className="icon7" src={css} style={{width:"60px"}} alt="Automation" />
                                </div>
                            </div>
                            <div>
                                <div className="iconTagName">
                                    <img className="icon8" src={javasc} style={{width:"63px"}} alt="Arduino" />
                                </div>
                            </div>
                        </div>
                        <div className="btn-container" >
                            <a href="" className="manualBtn"> Github </a>
                            <a href="" className="manualBtn"> Live Site </a>
                        </div>
                    </div>
                </div>

                <div className="manualContainer">
                    <div className="manualCard manualFront">
                        <img className="card-image" src={flutter} />
                        <h1>
                            Liquor Store
                        </h1>
                        <p>
                            Working on:
                        </p>
                        <ul>
                            <li>
                                Backend
                            </li>
                            <li>
                                Liquor DataBase
                            </li>
                            <li>
                                Liquor Search and Filtering
                            </li>
                            <li>
                                Ecommerce
                            </li>
                        </ul>
                    </div>
                    <div className="manualCard manualBack">
                        <h1> Technologies Used </h1>
                        <div id="edu-icons-container2">
                            <div>
                                <div className="iconTagName">
                                    <img className="icon6" src={html} style={{width:"60px"}} alt="C programming" />
                                </div>
                            </div>
                            <div>
                                <div className="iconTagName">
                                    <img className="icon7" src={css} style={{width:"60px"}} alt="Automation" />
                                </div>
                            </div>
                            <div>
                                <div className="iconTagName">
                                    <img className="icon8" src={javasc} style={{width:"63px"}} alt="Arduino" />
                                </div>
                            </div>
                        </div>
                        <div className="btn-container" >
                            <a href="" className="manualBtn"> Github </a>
                            <a href="" className="manualBtn"> Live Site </a>
                        </div>
                    </div>
                </div>

            </div>

            
        </div>
    )
}
