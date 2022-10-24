import React from 'react'
import { AccumulationChartComponent, AccumulationSeriesCollectionDirective, AccumulationSeriesDirective, Inject, AccumulationLegend, PyramidSeries, AccumulationTooltip, AccumulationDataLabel } from '@syncfusion/ej2-react-charts'

import { ChartsHeader } from '../../components'
import { PyramidData } from '../../data/dummy'
import { useStateContext } from '../../contexts/ContextProvider'

const Pyramid = () => {
  const { currentMode } = useStateContext();
  return (
    <div className='m-4 md:m-10 mt-24 p-10 bg-white  dark:bg-secondary-dark-bg rounded-3xl'>
      <ChartsHeader category='Pyramid' title='Food Comparison Chart' />
      <div className='w-full'>
        <AccumulationChartComponent
          id='charts'
          legendSettings={{ background: 'white' }}
          tooltip={{ enable: true }}
          background={currentMode === 'Dark' ? '#33373E' : '#fff'}

        >
          <Inject services={[AccumulationLegend, PyramidSeries, AccumulationTooltip, AccumulationDataLabel]} />
          <AccumulationSeriesCollectionDirective>
            <AccumulationSeriesDirective
              name='Food'
              dataSource={PyramidData}
              xName='x'
              yName='y'
              type='Pyramid'
              explode={true}
              gapRatio={0.03}
              width="45%"
              height="80%"
              neckWidth='15%'
              emptyPointSettings={{ mode: 'Drop', fill: 'red' }}
              dataLabel={{
                visible: true,
                position: 'Inside',
                name: 'text',
              }}
            >
            </AccumulationSeriesDirective>
          </AccumulationSeriesCollectionDirective>
        </AccumulationChartComponent>
      </div>
    </div>
  )
}

export default Pyramid