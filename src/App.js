import React, { useEffect, useState } from 'react'
import "../src/App.css"
import  Loaded  from './components/loading-page/Loaded';
import { Loading } from './components/loading-page/Loading';
import { browserName, browserVersion } from "react-device-detect";


function App() {

        // Loading Status
    const [isLoading, setIsLoading] = useState(true);

    useEffect( () => {
        setTimeout(()=> {
            setIsLoading(false);
        }, 2500);    
    });

    console.log(`${browserName} ${browserVersion}`);

    
    // {browserName==="Safari"?
    //     alert("Safari is not compatible with this website, please use Google Chrome or  Firefox ")
    //     :
    //     console.log("Welcome")
    // }

    if ( browserName==="Safari" || browserName==="Mobile Safari" ){
        alert("Safari is not compatible with this website, please use Google Chrome or  Firefox ")
    }


    return (
        <div className="App" >
            {isLoading==true?
                <Loading />
                :
                <Loaded />
            }
        </div>
    );
}

export default App;