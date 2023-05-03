import { useState } from 'react';

import dollarIcon from "../assets/icon-dollar.svg"
import person from "../assets/icon-person.svg"

const Form = ({ amount, setAmount, setTip, people, setPeople }) => {
    const tips = [
        { id: 1, value: "5" },
        { id: 2, value: "10" },
        { id: 3, value: "15" },
        { id: 4, value: "25" },
        { id: 5, value: "50" },
    ];

    const handleSelectedTip = (value) => {
        setTip(+value);
    }

    return (
        <div className="form">
            <div className="label-group">
                <div className="label-wrapper">
                    <label className="label" htmlFor="bill">Bill</label>
                </div>
                <div className="number-wrapper">
                    <input type="number" className="number-input" id="bill" onInput={(e) => setAmount(+e.target.value)} value={amount} />
                    <img src={dollarIcon} aria-hidden="true" className="icon" />
                </div>
            </div>
            <div className="tip-section">
                <p className="label">Selected Tip %</p>
                <div className="tip-amount-wrapper">
                    {tips.map(tip => {
                        return (
                            <div className="tip-amount" key={tip.id}>
                                <input type="radio" onInput={(e)=> handleSelectedTip(tip.value)} id="input1" className="tip-input" name="tip" />
                                <label className="tip-btn" htmlFor="input1">{tip.value}</label>
                            </div>
                        );
                    })}
                    <div className="custom-wrapper">
                        <input type="number" onInput={(e) => handleSelectedTip(e.target.value)} id="custom" name="tip" className="number-input tip-custom" placeholder="Custom" />
                        <label htmlFor="custom" className="tip-custom-label">Custom</label>
                    </div>
                </div>
            </div>
            <div className="label-group">
                <div className="label-wrapper">
                    <label className="label" htmlFor="people">Number of People</label>
                    <p className="error">{
                        people === 0 ? "Can’t be zero" : ""
                    }</p>
                </div>
                <div className="number-wrapper">
                    <input type="number" placeholder='0' className={`number-input ${people === 0 ? 'number-error' : ""}`} id="people" onInput={(e) => setPeople(+e.target.value)} value={people} />
                    <img src={person} aria-hidden="true" className="icon" />
                </div>
            </div>
        </div>
    )
}
export default Form
