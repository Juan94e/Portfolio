import React from 'react'
import '../../styles/AboutEdu.css';
import anim from '../../assets/gif/git.gif';
import grado from '../../assets/Icons/graduation.png';
import devp from '../../assets/Icons/development.png';
import languages from '../../assets/Icons/languages.png';

export const AboutEdu = () => {
    return (
        <section id="about" className="contenedor-principal">
            <div className="conten1" >
                <img src={grado} style={{width:"70px", height:"70px"}} /> 
                <br/>
                <p>Electronic Engineer with an emphasis on embedded systems. Hands-on Engineer. Willing to learn as well as to utilize my knowledge and expertise for optimal Engineer-ing results. </p>
            </div>
            <div className="conten2" >
                <img src={devp} style={{width:"70px", height:"70px"}} />
                
            </div>
            <div className="conten3" >
                <img src={languages} style={{width:"70px", height:"70px"}} />
            </div>
        </section>
    )
}
