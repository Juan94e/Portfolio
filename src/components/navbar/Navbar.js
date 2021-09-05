import React from 'react'
import '../../styles/Navbar.css';


export const Navbar = ({isScrolling}) => {

    // const toTheTop = () => {
    //     window.scrollTo({ top: 0, left: 0, behavior: "smooth"  });
    // }
    
    // const nav = document.querySelector('nav');
    // window.addEventListener('scroll', function (){ 
    //     if (window.pageYOffset > 100) {
    //         nav.classList.add('bg-dark', 'shadow');
    //     } else {
    //         nav.classList.remove('bg-dark', 'shadow');
    //     }
    // });



    return (
        <nav   className= { `navbar fixed-top navbar-expand-lg navbar-dark p-md-3 ${ isScrolling > 600 ? "bg-dark shadow" : null } ` }  >
            <div className="container">

                <a href="#home" className="navbar-brand" >Juan Espinosa</a>
                <button
                type="button"
                className="navbar-toggler"
                data-bs-target="#navbarNav"
                data-bs-toggle="collapse"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <div className="mx-auto"></div>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link text-white" href="#home">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white" href="#about">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white" href="#projects">Projects</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white" href="#">contact</a>
                        </li>
                    </ul>

                </div>
            </div>
        </nav>
    )
}


{/* <nav className={ `navbar manualNavbar ${ isScrolling > 20 ? "scrolling" : null } ` } >
            <div classNameName=" container-fluid navbar-logo"  >
                <a onClick={toTheTop} >Juan Espinosa </a>
            </div> 

        </nav > */}