import React from 'react'
import { GridComponent, ColumnDirective, ColumnsDirective, Inject, Page, Sort, Filter, Group, Edit, Toolbar, ExcelExport, PdfExport, Resize } from '@syncfusion/ej2-react-grids';

import { ordersData, contextMenuItems, ordersGrid } from '../data/dummy';
import { Header } from "../components";

const Orders = () => {
  return (
    <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl'>
      <Header category='Page' title='Orders' />
      <GridComponent id='gridcomp'
        dataSource={ordersData}
        allowPaging={true}
        allowSorting={true}
        // allowFiltering={true}
        // allowGrouping={true}
        allowExcelExport={true}
        allowPdfExport={true}
        // allowResizing={true}
      >
        <ColumnsDirective>
          {ordersGrid.map((item, index) => 
            <ColumnDirective key={index} template={item.template} field={item.field} headerText={item.headerText} width={item.width} textAlign={item.textAlign} />
          )}
        </ColumnsDirective>
        <Inject services={[Page, Sort, Filter, Group, ExcelExport, PdfExport, Resize]} />
      </GridComponent>
    </div>
  )
}

export default Orders