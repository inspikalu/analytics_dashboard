import trendGreen from "../images/trendGreen.svg";
import trendRed from "../images/trendRed.svg"
import trendingUp from "../images/trendingUp.svg"
import trendingDown from "../images/trendingDown.svg"

const StatBox = function (props) {
    return <div className={'statBox'}>
        <div className="statBox__iconTop">
            <div><img src={props.topIcon} className={'boxTick'} alt={`${props.topIcon}`}/></div>
            <img src={props.upTrend ? trendGreen : trendRed} alt="Uptrend"/>
        </div>
        <section style={{
            display: 'flex',
            flexDirection: "column",
            justifyContent: 'center',
            alignItems: "flex-start",
            gap: "0.3125rem"
        }}>

            <h3>{props.topText}</h3>
            <h4>{props.bottomText}</h4>
        </section>
        <div className="statBox__insight">
            <span className={`pill ${props.pillGreen ? 'green' : 'red'}`}>
                <img src={props.pillGreen ? trendingUp : trendingDown} alt="Trending Upwards"/> 23,5%
            </span>
            <span>vs. previous month</span>

        </div>
    </div>
}

export default StatBox;