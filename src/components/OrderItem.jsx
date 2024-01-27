import iconView from "../images/icon-view.svg"

function OrderItem({value}) {
    return (
        <>
            <tr>
                <td className={'lastOrders__name'}>
                    <div className="tableName__icon-container">
                        <img src={`/latestOrders Images/${value.icon}`} alt="Icon" className={'tableName__icon'}/>
                    </div>
                    <h3> {value.fullName} </h3>
                </td>
                <td>
                    <span>{value.date}</span>
                </td>
                <td>
                    <span>{value.amount}</span>
                </td>
                <td>
                    <span className={`${value.status}`}>{value.status}</span>
                </td>
                <td className={'lastOrders__icon'}>
                    <div style={{cursor: "pointer"}}>
                        <img src={iconView} alt="View Icon" className="iconView"/>
                        <span>View</span>
                    </div>
                </td>
            </tr>
        </>
    );
}

export default OrderItem;