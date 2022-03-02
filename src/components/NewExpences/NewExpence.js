
import React, { useState } from 'react'

import ExpenceForm from './ExpenceForm'

import './new-expence.css'

const NewExpence = (props) => {

    const formSubmited = (data) => {

        const expenseData = {
            ...data, id: getRandomNumber(1,100)
        }

        console.log(data)

        props.expenceCreated(expenseData)
    }

    const getRandomNumber = (min, max) => {
        return Math.random() * (max - min) + min;
    }


    return (
        <div className="new-expence">
            <ExpenceForm formSubmited={formSubmited} />
        </div>
    )
}

export default NewExpence