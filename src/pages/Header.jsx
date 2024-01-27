import searchIcon from "../images/search.svg"
import calendar from "../images/calendar.svg"
import notification from '../images/notification.svg'
import profile from '../images/profile.png'
import arrowDown from "../images/arrow-down.svg"

function Header() {
    const todayDate = new Date();

    const getThisMonth = function () {
        switch (todayDate.getMonth()) {
            case 0:
                return "January";
            case 1:
                return "February";
            case 2:
                return "March";
            case 3:
                return "April";
            case 4:
                return "May";
            case 5:
                return "June";
            case 6:
                return "July";
            case 7:
                return "August";
            case 8:
                return "September";
            case 9:
                return "October";
            case 10:
                return "November";
            case 11:
                return "December";

        }
    }

    const dateString = `${getThisMonth()} ${todayDate.getDate()} ${todayDate.getFullYear()}`

    return (
        <>
            <section className="header">
                <h1>Dashboard</h1>
                <div className="header__searchBar">
                    <img src={searchIcon} alt="Search" className="" style={{width: '16px', height: '16px'}}/>
                    <input type="search" name="search" id="search" placeholder='Search...'/></div>
                <div className="header__date">
                    <img src={calendar} alt="Calendar" style={{width: '16px', height: '16px'}}/>
                    <span className="header__date__date">{dateString}</span>
                </div>
                <div className="header__notification">
                    <img src={notification} alt="Notification Icon" style={{width: '16px', height: 'auto'}}/>
                </div>
                <div className="header__userId">
                    <img src={profile} alt="" style={{width: '38px', height: '38px', borderRadius: "50%"}}/>
                    <div className="details">
                        <span className="name">Justin Bergson</span>
                        <span className="email">justin@gmail.com</span>
                    </div>
                    <img src={arrowDown} alt="Arrow Dine" style={{width: '14px', height: '8px'}}/>
                </div>
            </section>
        </>
    );
}

export default Header;