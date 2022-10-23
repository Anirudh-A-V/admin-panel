import React from 'react'
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, DateTime, Legend, Tooltip, SplineAreaSeries } from '@syncfusion/ej2-react-charts'

import { Header } from '../../components'
import { areaCustomSeries, areaPrimaryXAxis, areaPrimaryYAxis } from '../../data/dummy'
import { useStateContext } from '../../contexts/ContextProvider'

const Area = () => {
  const { currentMode } = useStateContext();

  return (
    <div className='m-4 md:m-10 mt-24 p-10 bg-white  dark:bg-secondary-dark-bg rounded-3xl'>
      <Header category='Area' title='Inflation Rate' />
      <div className='w-full'>
        <ChartComponent
          id='charts'
          primaryXAxis={areaPrimaryXAxis}
          primaryYAxis={areaPrimaryYAxis}
          tooltip={{ enable: true }}
          chartArea={{ border: { width: 0 } }}
          background={currentMode === 'Dark' ? '#33373E' : '#FFFFFF'}
        >
          <Inject services={[SplineAreaSeries, DateTime, Legend, Tooltip]} />
          <SeriesCollectionDirective>
            {areaCustomSeries.map((item, index) => {
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
                  opacity={item.opacity}
                />
              )
            })}
          </SeriesCollectionDirective>

        </ChartComponent>
      </div>
    </div>
  )
}

export default Area