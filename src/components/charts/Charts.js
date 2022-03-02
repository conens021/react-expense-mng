import './charts.css'

import ChartBar from './ChartBar'

const Charts = (props) => {

   const monthsTotal = props.monthsTotal
   console.log(monthsTotal)

    const renderCharts = () => {
        const max = Math.max.apply(Math, monthsTotal.map(entry => { return entry.total; }))
        return monthsTotal.map(e => (
            <ChartBar max={max} data={e} />
        ))
    }

    return (
        <div className="chart">
            {renderCharts()}
        </div>
    )
}


export default Charts