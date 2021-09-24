import React, { Suspense } from 'react'
import "../src/App.css"
// import { Loaded } from './components/loading-page/Loaded';

const Loaded = React.lazy( () => import ( './components/loading-page/Loaded' ) )

function App() {

    return (
        <div className="App" >
            <Suspense fallback={<div>Loading...</div>} >
                <Loaded />
            </Suspense>
        </div>
    );
}

export default App;


