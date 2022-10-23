import React from 'react'
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, HiloSeries, Tooltip, DateTime, Logarithmic, Crosshair, Zoom, CandleSeries } from '@syncfusion/ej2-react-charts';

import { ChartsHeader } from '../../components'
import { financialChartData, FinancialPrimaryXAxis, FinancialPrimaryYAxis } from '../../data/dummy'
import { useStateContext } from '../../contexts/ContextProvider';

const date1 = new Date('2017, 1, 1');

function filterValue(value) {
  if (value.x >= date1) {
    return value.x, value.high, value.low;
  }
}
const returnValue = financialChartData.filter(filterValue);

const Financial = () => {
  const { currentMode } = useStateContext();

  return (
    <div className='m-4 md:m-10 mt-24 p-10 bg-white  dark:bg-secondary-dark-bg rounded-3xl'>
      <ChartsHeader category='Candle Stick' title='Apple Stocks' />
      <div className='w-full'>
        <ChartComponent
          id='charts'
          style={{ textAlign: 'center' }}
          primaryXAxis={FinancialPrimaryXAxis}
          primaryYAxis={FinancialPrimaryYAxis}
          chartArea={{ border: { width: 0 } }}
          tooltip={{ enable: true, shared: true }}
          crosshair={{ enable: true, lineType: 'Vertical', line: { width: 0 } }}
          background={currentMode === 'Dark' ? '#33373E' : '#FFFFFF'}
          zoomSettings={{ enableSelectionZooming: true, mode: 'X', enablePan: true, enableMouseWheelZooming: true }}
          legendSettings={{ visible: false }}
        >
          <Inject services={[CandleSeries, Tooltip, DateTime, Logarithmic, Crosshair, Zoom]} />
          <SeriesCollectionDirective>
            <SeriesDirective
              dataSource={returnValue}
              xName='x'
              yName='low'
              name='Apple Inc'
              type='Candle'
              low='low'
              high='high'
              open='open'
              close='close'
              enableSolidCandles={true}
              bearFillColor='#00ff2a'
              bullFillColor='#ff0000'
            />
          </SeriesCollectionDirective>
        </ChartComponent>
      </div>
    </div>
  )
}

export default Financial
