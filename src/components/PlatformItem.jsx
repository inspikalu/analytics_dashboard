

function PlatformItem({value}) {
    return (
        <>
            <div className="platformItem">
                <h3>{value.platformName}</h3>
                <div className="platformItem__percentage">
                    <div className="platformItem__percentage__percent" style={{width: `${value.percent}%`, backgroundColor:`var(--color-${value.color})`}}></div>
                </div>
                <div className="platformItem__footer">
                    <span>{`$${value.price}`}</span>
                    <span>{`+${value.increaseRate}%`}</span>
                </div>
            </div>
        </>
    );
}

export default PlatformItem;