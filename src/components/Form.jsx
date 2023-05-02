import dollarIcon from "../assets/icon-dollar.svg"
import person from "../assets/icon-person.svg"

const Form = () => {
    return (
        <div className="form">
            <div className="label-group">
                <div className="label-wrapper">
                    <label className="label" htmlFor="bill">Bill</label>
                    <p className="error"></p>
                </div>

                <div className="number-wrapper">
                    <input type="text" className="number-input" id="bill" />
                    <img src={dollarIcon} aaria-hidden="true" className="icon" />
                </div>

            </div>

            <div className="tip-section">
                <p className="label" >Selected Tip %</p>
                <div className="tip-amount-wrapper">
                    <div className="tip-amount">
                        <input type="radio" name="tip" value="0.5" />
                        <div className="tip-btn">5%</div>
                    </div>

                    <div className="tip-amount">
                        <input type="radio" name="tip" value="0.5" />
                        <div className="tip-btn">10%</div>
                    </div>

                    <div className="tip-amount">
                        <input type="radio" name="tip" value="0.5" />
                        <div className="tip-btn">15%</div>
                    </div>

                    <div className="tip-amount">
                        <input type="radio" name="tip" value="0.5" />
                        <div className="tip-btn">25%</div>
                    </div>

                    <div className="tip-amount">
                        <input type="radio" name="tip" value="0.5" />
                        <div className="tip-btn">50%</div>
                    </div>
                    <input type="text" className="number-input tip-custom" />
                </div>

            </div>

            <div className="label-group">
                <div className="label-wrapper">
                    <label htmlFor="people">Number of People</label>
                    <p className="error"></p>
                </div>
                <div className="number-wrapper">

                    <input type="text" className="number-input" id="people" />
                    <img src={person} aaria-hidden="true" className="icon" />
                </div>
            </div>
        </div>
    )
}

export default Form;
