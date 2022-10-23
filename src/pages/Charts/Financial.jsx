import React from 'react'
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, HiloSeries, Tooltip, DateTime, Logarithmic, Crosshair, Zoom, CandleSeries } from '@syncfusion/ej2-react-charts';

import { ChartsHeader } from '../../components'
import { financialChartData, FinancialPrimaryXAxis, FinancialPrimaryYAxis } from '../../data/dummy'

const Financial = () => {
  return (
    <div className='m-4 md:m-10 mt-24 p-10 bg-white  dark:bg-secondary-dark-bg rounded-3xl'>
      <ChartsHeader category='Candle Stick' title='Project Cost Breakdown' />
      <div className='w-full'>
        <ChartComponent
          id='charts'
          style={{ textAlign: 'center' }}
          primaryXAxis={FinancialPrimaryXAxis}
          primaryYAxis={FinancialPrimaryYAxis}
          legendSettings={{ visible: false }}
        >
          <Inject services={[CandleSeries, Tooltip, DateTime, Logarithmic, Crosshair, Zoom]} />
          <SeriesCollectionDirective>
            <SeriesDirective
              dataSource={financialChartData}
              xName='x'
              yName='low'
              name='SHIRPUR-G'
              type='Candle'
              low='low'
              high='high'
              open='open'
              close='close'
              bearFillColor='#e56590'
              bullFillColor='#f8b883'
            />
          </SeriesCollectionDirective>
        </ChartComponent>;
      </div>
    </div>
  )
}

export default Financial
