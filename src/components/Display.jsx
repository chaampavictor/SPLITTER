const Display = () => {
    return (
        <div className="display">
            <div className="display-group"></div>
            <div className="display-row">

                <div className="display-label">
                    <p className="header">Tip Amount</p>
                    <p className="unit">/ person</p>
                </div>

                <p className="display-amt">$0.00</p>
            </div>
            <div className="display-row">
                <div className="display-label">
                    <p className="header">Tip Amount</p>
                    <p className="unit">/ person</p>
                </div>

                <p className="display-amt">$0.00</p>

            </div>
            <button className="btn">Reset</button>

        </div>
    )
}

export default Display;
