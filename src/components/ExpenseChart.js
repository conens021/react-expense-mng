
import Charts from "./charts/Charts"

const ExpenseChart = (props) => {
    const expences = props.expences

    const dataEntry = [
        { month: 'Jan', total: 0 },
        { month: 'Feb', total: 0 },
        { month: 'Mar', total: 0 },
        { month: 'Apr', total: 0 },
        { month: 'May', total: 0 },
        { month: 'Jun', total: 0 },
        { month: 'Jul', total: 0 },
        { month: 'Aug', total: 0 },
        { month: 'Sep', total: 0 },
        { month: 'Oct', total: 0 },
        { month: 'Nov', total: 0 },
        { month: 'Dec', total: 0 },
    ]

    const bySelectedYear = expences.filter(e => {
        if (e.date.getFullYear() === parseInt(props.selectedYear)) return e
    })

    console.log(bySelectedYear)

    bySelectedYear.forEach(exp => {
        console.log(exp.value)
        const month = exp.date.getMonth()
        dataEntry[month].total += exp.value
    });


    return <Charts monthsTotal={dataEntry} />
}

export default ExpenseChart