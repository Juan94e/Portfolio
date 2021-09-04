import React from 'react'
import '../../styles/Loading.css';
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

export const Loading = () => {
    return (
        <div className="loading-container"> 
            <div className="loading-container-child" >
                <Loader
                    type="Puff"
                    color="white"
                    height={350}
                    width={350}
                    timeout={2500} //3 secs
                />
            </div>
        </div>
    )
}
