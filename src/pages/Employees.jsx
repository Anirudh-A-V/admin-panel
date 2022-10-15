import React from 'react'
import { GridComponent, ColumnDirective, ColumnsDirective, Inject, Page, Edit, Toolbar, Search } from '@syncfusion/ej2-react-grids';

import { employeesData, employeesGrid } from '../data/dummy';
import { Header } from "../components";

const Employees = () => {
  return (
    <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl'>
      <Header category='Page' title='Employees' />
      <GridComponent id='gridcomp'
        dataSource={employeesData}
        allowPaging={true}
        allowSorting={true}
        toolbar={['Search']}
        width='auto'
      >
        <ColumnsDirective>
          {employeesGrid.map((item, index) => 
            <ColumnDirective key={index} template={item.template} field={item.field} headerText={item.headerText} width={item.width} textAlign={item.textAlign} format={item.format} />
          )}
        </ColumnsDirective>
        <Inject services={[Page, Search, Toolbar]} />
      </GridComponent>
    </div>
  )
}

export default Employees