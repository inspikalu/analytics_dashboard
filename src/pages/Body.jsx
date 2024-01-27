import lastOrdersData from "../lastOrdersData.js";
import topPlatformsData from "../topPlatformsData.js";
import OrderItem from "../components/OrderItem.jsx";
import PlatformItem from "../components/PlatformItem.jsx";
import BarChart from "../components/BarChart.jsx";
import StatBox from "../components/StatBox.jsx";

import boxTick from '../images/boxTick.svg';
import _3dRotate from "../images/3dRotate.svg"
import shoppingIcon from '../images/shopping.svg'
import coinIcon from  '../images/coin.svg'

function Body() {
    const orderItems = lastOrdersData.map(function (value, index) {
        return <OrderItem key={index} value={value}/>
    })
    const platformItems = topPlatformsData.map(function (value, index) {
        return <PlatformItem key={index} value={value}/>
    })


    return (
        <>
            <section className="body">
                <section className="body__salesTrend">
                    <div className="body__salesTrend__header">
                        <h2>Sales Trend</h2>

                        <div>
                            <label htmlFor='sortBy'>Sort by: </label>
                            <select name="sortBy" id={'sortBy'}>
                                <option value="yearly">Yearly</option>
                                <option value="monthly">Monthly</option>
                                <option value="weekly" selected={true}>Weekly</option>
                                <option value="daily">Daily</option>
                            </select>
                        </div>

                    </div>
                    <BarChart/>
                </section>
                <section className="body__stats">
                    <div className="body__stats__totalOrder">
                        <StatBox topIcon={boxTick} upTrend={true} topText={"Total Order"} bottomText={350} pillGreen={true}/>
                    </div>
                    <div className="body__stats__totalRefund">
                        <StatBox topIcon={_3dRotate} upTrend={false} topText={"Total Refund"} bottomText={270} pillGreen={false}/>

                    </div>
                    <div className="body__stats__averageSales">
                        <StatBox topIcon={shoppingIcon} upTrend={false} topText={"Average Sales"} bottomText={1567} pillGreen={false}/>
                    </div>
                    <div className="body__stats__totalIncome">
                        <StatBox topIcon={coinIcon} upTrend={true} topText={"Total Income"} bottomText={`$350.000`} pillGreen={true}/>
                    </div>
                </section>
                <section className="body__lastOrders">
                    <div className="body__lastOrders__header">
                        <h2>Last Orders</h2>
                        <a href="#">See All</a>
                    </div>

                    <table>
                        <thead>
                        <tr>
                            <th>Name</th>
                            <th>Date</th>
                            <th>Amount</th>
                            <th>Status</th>
                            <th>Invoice</th>
                        </tr>
                        </thead>
                        <tbody>
                        {orderItems}
                        </tbody>
                    </table>
                </section>
                <section className="body__topPlatform">
                    <div className="body__topPlatform__header">
                        <h2>Top Platform</h2>
                        <a href="#"> See all</a>
                    </div>
                    <div className="body__topPlatform__body">
                        {platformItems}
                    </div>
                </section>
            </section>
        </>
    );
}

export default Body;