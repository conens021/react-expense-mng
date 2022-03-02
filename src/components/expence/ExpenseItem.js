import React,{useState} from 'react'

import ExpanceDate from './ExpanceDate'

import './expense-item.css'

const ExpenseItem = (props) => {

    const expence = props.expence

    const [title,setTitle] = useState(expence.title)

    return (
        <div  className="expense-item">
            <ExpanceDate date={expence.date}/>
            <div className="expense-item__title">{title}</div>
            <div className="expense-item__price">${expence.value}</div>
        </div>
    )
}

export default ExpenseItem