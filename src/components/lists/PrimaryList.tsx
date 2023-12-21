import React from 'react'
import { IoMdBeer } from 'react-icons/io'
import { MdCheckBox, MdOutlineCheckBoxOutlineBlank } from 'react-icons/md'

function PrimaryList() {
  return (
    <div className="primary_list">
      <div className="card displayed_list_card">
        <div className="list_info">
            <p>mon, 18 dec</p>

            <h2>Today's List</h2>
        </div>

        <div className="list_items">
            <div className="item">
                <p>Beer 🍺</p>
                <span>
                    <MdOutlineCheckBoxOutlineBlank color='black' size={32}/>
                </span>
            </div>
            <div className="item">
                <p>Wine 🍷</p>
                <span>
                    <MdCheckBox color='green' size={32}/>
                </span>
            </div>
            <div className="item">
                <p>Wine 🍷</p>
                <span>
                    <MdCheckBox color='green' size={32}/>
                </span>
            </div>
            <div className="item">
                <p>Beer 🍺</p>
                <span>
                    <MdOutlineCheckBoxOutlineBlank color='black' size={32}/>
                </span>
            </div>
            <div className="item">
                <p>Wine 🍷</p>
                <span>
                    <MdCheckBox color='green' size={32}/>
                </span>
            </div>
            <div className="item">
                <p>Wine 🍷</p>
                <span>
                    <MdCheckBox color='green' size={32}/>
                </span>
            </div>
        
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