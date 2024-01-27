import logo from "../images/Logo.svg"
import category from "../images/category.svg"
import trendUp from "../images/trend-up.svg"
import community from "../images/community.svg"
import box from '../images/Box.svg'
import divideSymbol from '../images/Divide Symbol.svg'
import infoCircle from '../images/info-circle.svg'

import star from '../images/star uncolored.svg'
import starWhite from '../images/star white.svg'
import moon from '../images/moon.svg'
import moonWhite from '../images/moon white.svg'

import back from "../images/back.svg"
import gear from "../images/gear.svg"
import logout from "../images/Logout.svg"

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
                        <div onClick={!lightMode ? toggleLightMode : () => {
                        }}
                             className={`backgroundHandler ${lightMode ? "light" : ""}`}>
                            <img src={lightMode ? starWhite : star} alt="" className="navBtn"/>
                        </div>

                        <div onClick={lightMode ? toggleLightMode : () => {
                        }}
                             className={`backgroundHandler ${!lightMode ? 'dark' : ''}`}>
                            <img src={lightMode ? moon : moonWhite} alt="" className="navBtn"/>
                        </div>
                    </div>
                </div>
                <div className="sideBar__bottomIcons">
                    <img src={back} alt="Back Button" className="navBtn"/>
                    <img src={gear} alt="Settings" className="navBtn"/>
                    <img src={logout} alt="Logout Button" className="navBtn"/>
                </div>
            </section>
        </>
    );
}

export default SideBar;