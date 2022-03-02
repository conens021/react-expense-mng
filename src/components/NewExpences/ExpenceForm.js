
import React, { useState } from 'react'

import './expence-form.css'

const ExpenceForm = (props) => {

    const [userInput, setUserInput] = useState({
        enteredTitle: '',
        enteredDate: '',
        enteredPrice: ''
    })


    const [formVisible, setFormVisible] = useState(false)

    const titleChangeHandler = (event) => {
        setUserInput({
            ...userInput,
            enteredTitle: event.target.value
        })
    }

    const dateChangeHandler = (event) => {
        setUserInput({
            ...userInput,
            enteredDate: event.target.value
        })
    }

    const priceChangeHandler = (event) => {
        setUserInput({
            ...userInput,
            enteredPrice: event.target.value
        })
    }

    const submitHandler = (event) => {
        event.preventDefault()
        const expenseData = {
            value: parseFloat(userInput.enteredPrice),
            title: userInput.enteredTitle,
            date: userInput.enteredDate
        }
        props.formSubmited(expenseData)
    }

    const showForm = () => {
        setFormVisible(true)
    }

    const hideForm = () => {
        setFormVisible(false)
    }

    const renderForm = () => {
        return formVisible ? (
            <form onSubmit={submitHandler} className="expence-form">
                <div className="form-wrap">
                    <div className='input-group'>
                        <label for="title">Title</label>
                        <input type="text" name="title" value={userInput.enteredTitle} onChange={titleChangeHandler} />
                    </div>
                    <div className='input-group'>
                        <label for="date">Date</label>
                        <input type="date" name="date" value={userInput.enteredDate} onChange={dateChangeHandler} />
                    </div>
                    <div className='input-group'>
                        <label for="price">Price</label>
                        <input type="number" min="0.01" step="0.01" name="price" value={userInput.enteredPrice}
                            onChange={priceChangeHandler} />
                    </div>
                </div>
                <div className="btn-block">
                    <button onClick={() => setFormVisible(false)} className="btn-add"> Cancel</button>
                    <button onClick={submitHandler} type="submit" className="btn-add"> Add Expense</button>
                </div>
            </form>
        ) :
            (
                <button id="add-new-expence-btn" onClick={() => setFormVisible(true)} className="btn-add"> Add New Expence</button>
            )
    }

    return (

        renderForm()
    )
}

export default ExpenceForm