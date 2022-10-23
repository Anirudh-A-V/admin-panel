import React from 'react'
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, DateTime, Legend, Tooltip, LineSeries } from '@syncfusion/ej2-react-charts'

import { lineCustomSeries, LinePrimaryXAxis, LinePrimaryYAxis } from '../../data/dummy'
import { useStateContext } from '../../contexts/ContextProvider'

const LineChart = () => {

  const { currentMode } = useStateContext();

  return (
    <ChartComponent
      height='420px'
      primaryXAxis={LinePrimaryXAxis}
      primaryYAxis={LinePrimaryYAxis}
      tooltip={{ enable: true }}
      chartArea={{ border: { width: 0 } }}
      background={currentMode === 'Dark' ? '#33373E' : '#FFFFFF'}
    >
      <Inject services={[LineSeries, DateTime, Legend, Tooltip]} />
      <SeriesCollectionDirective>
        {lineCustomSeries.map((item, index) => {
          return (
            <SeriesDirective
              key={index}
              dataSource={item.dataSource}
              xName={item.xName}
              yName={item.yName}
              name={item.name}
              type={item.type}
              width={item.width}
              marker={item.marker}
            />
          )
        })}
      </SeriesCollectionDirective>
    </ChartComponent>
  )
}

export default LineChart
