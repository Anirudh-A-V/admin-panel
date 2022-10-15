import React from 'react'
import { KanbanComponent, ColumnsDirective, ColumnDirective } from '@syncfusion/ej2-react-kanban';

import { kanbanData, kanbanGrid } from '../data/dummy'
import { Header } from '../components'

const Kanban = () => {
  return (
    <div className='m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl'>
      <Header title='Kanban' category="App" />
      <KanbanComponent
        id="kanban"
        dataSource={kanbanData}
        keyField="Status"
        cardSettings={{ contentField: "Summary", headerField: "Id" }}
      >
        <ColumnsDirective>
          {kanbanGrid.map((item, index) =>
            <ColumnDirective key={index} headerText={item.headerText} keyField={item.keyField} allowToggle={item.allowToggle} isExpanded={item.isExpanded} />
          )}
        </ColumnsDirective>
      </KanbanComponent>
    </div>
  )
}

export default Kanban