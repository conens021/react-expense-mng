import './charts.css'

const ChartsBar = (props) => {

    const data = props.data
    const max = props.max

    const fillHeight = data.total > 0 ? Math.round((data.total * 100) / max) + "%" : "0%"

    return (
        <div className="chart-bar">
            <div className="chart-bar__iner">
                <div className="chart-bar__fill" style={{ height: fillHeight }}></div>
            </div>
            <div className="chart-bar__label">{props.data.month}</div>
        </div>
    )
}


export default ChartsBar