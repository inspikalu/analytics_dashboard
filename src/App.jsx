import {useState} from "react";
import './styles/App.css'

import SideBar from "./pages/SideBar.jsx";
import Header from "./pages/Header.jsx";
import Body from "./pages/Body.jsx";

function App() {

    const [lightMode, setLightMode] = useState(true)

    const toggleLightMode = function () {
        setLightMode(prevState => !prevState)
    }

    console.log(window)

/*    if (lightMode){
        root.setProperty('--color-grey','#f0f0f0');
        root.setProperty('--color-white','#fff');
        root.setProperty('--color-border-bottom','#cacccc');
        root.setProperty('--color-dashboard','#a6a8ab');
        root.setProperty('--color-text-green','#34CAA5');
        root.setProperty('--color-text-red','#ED544E');
    }else{
        root.setProperty('--color-grey','#363636');
        root.setProperty('--color-white','#171313');
        root.setProperty('--color-border-bottom','#cacccc');
        root.setProperty('--color-dashboard','#a6a8ab');
        root.setProperty('--color-text-green','#34CAA5');
        root.setProperty('--color-text-red','#ED544E');
    } */

    console.log(root)
    return (
        <>
            <div className={`app ${lightMode ? 'light' : 'dark'}`}>
                <SideBar lightMode={lightMode} toggleLightMode={toggleLightMode}/>
                <Header/>
                <Body/>
            </div>
        </>
    )
}

export default App
