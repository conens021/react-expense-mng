import { useState } from "react/cjs/react.development"

import './expence-filter.css'

const ExpenceFIlter = (props) => {

    const selected = props.selcted

    const selectChangeHandler = (event) => {
        props.yearChangeHandler(event.target.value)
    }

    return (
        <div className="expence-filter">
            <h2>Filter by year</h2>
            <select  name="year" value={selected} onChange={selectChangeHandler}>
                <option value="2018">2018</option>
                <option value="2019">2019</option>
                <option value="2020">2020</option>
                <option selected value="2021">2021</option>
            </select>
        </div>
    )
}


export default ExpenceFIlter