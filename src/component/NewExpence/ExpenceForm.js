import React, { useState } from "react";
import "./ExpenceForm.css";

function ExpenceForm(props) {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
    const [enteredImage, setEnteredImage] = useState('');

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
    };

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
    };

    const dateChangeHandler = (event) => {
        setEnteredDate(new Date(event.target.value));
    };

    const imageChangeHandler = (event) => {
        // const file = event.target.files[0];
        // const reader = new FileReader();
        // reader.onload = () => {
        //     setEnteredImage(reader.result);
        // };
        // reader.readAsDataURL(file);
        setEnteredImage(event.target.value);
    };

    const submitHandler = (event) => {
        event.preventDefault();
        const expenceData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: enteredDate,
            url: enteredImage
        };

        props.onSaveExpenseData(expenceData)
        // props.onSaveExpenseData()
        console.log(expenceData);
        // Reset the form fields
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
        setEnteredImage('');
    };

    return (
        <form className="ExpenceForm m-3" onSubmit={submitHandler}>
            <div>
                <div className="form_box row">
                    <div className="mb-5 col-sm">
                        <label htmlFor="titleInput" className="form-label">Title</label>
                        <input
                            type="text"
                            onChange={titleChangeHandler}
                            className="form-control"
                            id="titleInput"
                            value={enteredTitle}
                        />
                    </div>
                    <div className="mb-5 col-sm">
                        <label htmlFor="dateInput" className="form-label">Date</label>
                        <input
                            type="date"
                            onChange={dateChangeHandler}
                            className="form-control"
                            id="dateInput"
                            value={enteredDate}
                        />
                    </div>
                </div>
                <div className="form_box row">
                    <div className="mb-5 col-sm">
                        <label htmlFor="amountInput" className="form-label">Amount</label>
                        <input
                            type="number"
                            onChange={amountChangeHandler}
                            className="form-control"
                            id="amountInput"
                            value={enteredAmount}
                        />
                    </div>
                    <div className="mb-5 col">
                        <label htmlFor="imageInput" className="form-label">Image File</label>
                        <input
                            type="text"
                            onChange={imageChangeHandler}
                            className="form-control"
                            id="imageInput"
                        />
                    </div>
                </div>
                <button type="submit" className="btn btn-primary m-4 but">Add</button>
            </div>
        </form>
    );
}

export default ExpenceForm;
