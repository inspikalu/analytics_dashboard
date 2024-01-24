import {useState} from "react";
import './styles/App.css'

import SideBar from "./pages/SideBar.jsx";
import Header from "./pages/Header.jsx";
import Body from "./pages/Body.jsx";

function App() {

    const [lightMode, setLightMode] = useState(true)

    const toggleLightMode = function(){
        setLightMode(prevState=> !prevState)
    }
    return (
        <>
            <div className="app">
                <SideBar lightMode={lightMode} toggleLightMode={toggleLightMode}/>
                <Header/>
                <Body/>
            </div>
        </>
    )
}

export default App
