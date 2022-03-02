
import { useState } from "react"

import ExpenseItem from "./ExpenseItem"

const ExpenseList = (props) => {

    const expences = props.expences
    const selectedYear = props.selectedYear

    const renderExpences = () => {

        const year = parseInt(selectedYear)

        const filteredYear = expences.filter(e => e.date.getFullYear() === year)

        return filteredYear.length === 0 ? (<div><h2 style={{ color: 'white' }}>No expences for this year!</h2></div>)
            :
            (filteredYear.map(expence => (
                <ExpenseItem key={expence.id} expence={expence} />
            ))
            )
    }

    return (
        <div>
            {
                renderExpences()
            }
        </div>
    )

}


export default ExpenseList