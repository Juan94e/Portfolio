import React, { useEffect, useState } from 'react'
import "../src/App.css"
import { Loaded } from './components/loading-page/Loaded';
import { Loading } from './components/loading-page/Loading';

function App() {

        // Loading Status
    const [isLoading, setIsLoading] = useState(true);

    useEffect( () => {
        setTimeout(()=> {
            setIsLoading(false);
        }, 2500);    
    });

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


