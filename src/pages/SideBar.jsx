import logo from "../images/Logo.svg"
import category from "../images/category.svg"
import trendUp from "../images/trend-up.svg"
import community from "../images/community.svg"
import box from '../images/Box.svg'
import divideSymbol from '../images/Divide Symbol.svg'
import infoCircle from '../images/info-circle.svg'

import star from '../images/star uncolored.svg'
import moon from '../images/moon.svg'

function SideBar({lightMode, toggleLightMode}) {
    console.log(lightMode)
    return (
        <>
            <section className="sideBar">
                <div className="sideBar__topIcons">
                    <img src={logo} alt="Logo"/>
                    <img src={category} alt="category" className={'navBtn'}/>
                    <img src={trendUp} alt="Up Tred" className="navBtn"/>
                    <img src={community} alt="Community" className="navBtn"/>
                    <img src={box} alt="Box" className="navBtn"/>
                    <img src={divideSymbol} alt="Divide Symbol" className="navBtn"/>
                    <img src={infoCircle} alt="Info Circle" className="navBtn"/>

                    <div className="sideBar__topIcons__changeModes">
                        <div onClick={toggleLightMode} className={`backgroundHandler ${lightMode ? "light" : ""}`}>
                            <img src={star} alt="" className="navBtn"/>
                        </div>

                        <div onClick={toggleLightMode} className={`backgroundHandler ${!lightMode ? 'dark' : ''}`}>
                            <img src={moon} alt="" className="navBtn"/>
                        </div>
                    </div>
                </div>
                <div className="sideBar__bottomIcons"></div>
            </section>
        </>
    );
}

export default SideBar;