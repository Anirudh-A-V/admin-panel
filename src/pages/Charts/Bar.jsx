import React from 'react'
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Category, Legend, Tooltip, ColumnSeries, DataLabel } from '@syncfusion/ej2-react-charts'

import { ChartsHeader } from '../../components'
import { useStateContext } from '../../contexts/ContextProvider'
import { barCustomSeries, barPrimaryXAxis, barPrimaryYAxis } from '../../data/dummy'

const Bar = () => {
  const { currentMode } = useStateContext();

  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <ChartsHeader category="Bar" title="Olympic Medal Counts - RIO" />
      <div className=" w-full">
        <ChartComponent
          id="charts"
          primaryXAxis={barPrimaryXAxis}
          primaryYAxis={barPrimaryYAxis}
          chartArea={{ border: { width: 0 } }}
          tooltip={{ enable: true }}
          background={currentMode === 'Dark' ? '#33373E' : '#fff'}
          legendSettings={{ background: 'white' }}
        >
          <Inject services={[ColumnSeries, Legend, Tooltip, Category, DataLabel]} />
          <SeriesCollectionDirective>
            {barCustomSeries.map((item, index) =>
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
            )}
          </SeriesCollectionDirective>
        </ChartComponent>
      </div>
    </div>
  );
}

export default Bar
