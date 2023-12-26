import React, { useState } from 'react'
import ListItem from './ListItem'
import { usePrimaryListStore } from '../../stores/primary_list.store'

function PrimaryList() {

    const [ newTask, setNewTask ] = useState<string>("");

    const list_name = usePrimaryListStore( ( state ) => state.name );
    const list_date = usePrimaryListStore( ( state ) => state.date );
    const items = usePrimaryListStore( ( state ) => state.items );

    const addItem = usePrimaryListStore( ( state ) => state.addItem );

  return (
    <div className="primary_list">
      <div className="card displayed_list_card">
        <div className="list_info">
            <p>{list_date}</p>

            <h2>{list_name}</h2>
        </div>

        <div className="list_items">
            {

                items.length > 0

                    ? items.map(
                        (item) =>
                            <ListItem
                                key={item.item_name}
                                item_name={item.item_name}
                                selected={item.selected}
                                onItemClick={item.onItemClick}
                            />
                    )

                    : <p>You don't have any items in your grocery list. Add one now</p>
            }
        </div>
      </div>

      <div className="add_item_form">
        <input 
            type="text"
            placeholder='New item'
            value={newTask}
            onKeyUp={(e) => { 
                if ( e.key === 'Enter') {
                    addItem(
                        items, 
                        {
                            item_name: newTask,
                            selected: false,
                            onItemClick: () => console.log(`clicked on ${newTask}`)
                        }
                    )

                    setNewTask("")
                }
            }}
            onChange={ (e) => setNewTask(e.target.value) }
        />

        <button
            onClick={ () => {
                    addItem(
                        items, 
                        {
                            item_name: newTask,
                            selected: false,
                            onItemClick: () => console.log(`clicked on ${newTask}`)
                        }
                    )

                    setNewTask("")
                }
            }
        >
            Add
        </button>
      </div>
    </div>
  )
}

export default PrimaryList