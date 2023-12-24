import React from 'react'
import ListItem from './ListItem'

function PrimaryList() {
    const printItem = ( itemName: string, isItemSelected: boolean ) : void => {
        console.log(`${itemName} is ${isItemSelected ? "completed" : "to be completed"}`)
    }

  return (
    <div className="primary_list">
      <div className="card displayed_list_card">
        <div className="list_info">
            <p>mon, 18 dec</p>

            <h2>Today's List</h2>
        </div>

        <div className="list_items">
            <ListItem
                item_name = 'Go Carroling'
                selected = {false}
                onItemClick={printItem}
            />   

            <ListItem
                item_name = 'Work on App'
                selected = {true}
                onItemClick={printItem}
            />        
        </div>
      </div>

      <div className="add_item_form">
        <input 
            type="text"
            placeholder='New item'
        />

        <button>
            Add
        </button>
      </div>
    </div>
  )
}

export default PrimaryList