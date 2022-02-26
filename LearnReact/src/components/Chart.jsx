import React from 'react';
import './Chart.css';

import ChartBar from './ChartBar.jsx';

const Chart = props => {

    const dataList = props.barPoints.map(dataPoint => dataPoint.value);

    const totalMax = Math.max(...dataList);

    return (
        <div className="chart">
            {
                props.barPoints.map(dataPoint => <ChartBar
                    key={dataPoint.label}
                    value={dataPoint.value}
                    maxValue={totalMax}
                    label={dataPoint.label} />)
            }
        </div>
    );
};

export default Chart;