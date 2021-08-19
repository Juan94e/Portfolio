import React from 'react'
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

export const Loading = () => {
    return (
        <div>
             <Loader
                type="Circles"
                color="#305260"
                height={100}
                width={100}
                timeout={5000} //3 secs
            />
        </div>
    )
}
