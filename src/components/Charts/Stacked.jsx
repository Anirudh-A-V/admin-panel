import React from 'react'
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Legend, Category, StackingColumnSeries, Tooltip, DataLabel } from '@syncfusion/ej2-react-charts';

import { stackedCustomSeries, stackedPrimaryXAxis, stackedPrimaryYAxis } from '../../data/dummy';

const Stacked = ({ width, height }) => {
  return (
    <ChartComponent
      width={width}
      height={height}
      id='charts'
      primaryXAxis={stackedPrimaryXAxis}
      primaryYAxis={stackedPrimaryYAxis}
      tooltip={{ enable: true }}
      chartArea={{ border: { width: 0 } }}
      legendSettings={{ background: 'white' }}
    >
      <Inject services={[StackingColumnSeries, Category, Legend, Tooltip]} />
      <SeriesCollectionDirective>
        {
          stackedCustomSeries.map((item, index) =>
            <SeriesDirective key={index}
            {...item}
            />
          )
        }
      </SeriesCollectionDirective>
    </ChartComponent>
  )
}

export default Stacked