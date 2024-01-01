import React, { useState } from 'react'
import { MdCancel, MdOutlineCheckBoxOutlineBlank } from 'react-icons/md'

export interface ListItemInterface {
    item_name: string,
    selected: boolean,
    selectItem?: (item_to_complete: ListItemInterface) => void,
    removeItem?: ( itemToRemove: ListItemInterface ) => void
}

function ListItem(item: ListItemInterface) {
    return (
        <div className="item"
            onClick={ () => {
                    if ( !item.selected ) {
                        item.selectItem!(item)
                    }
                }
            }
        >
            <p className={item.selected ? "completed_item" : ""}>{item.item_name}</p>

            <span>
                {
                    item.selected
                        ? <MdCancel size={32} color='red' 
                            onClick={ () => {  
                               if ( item.removeItem ) item.removeItem(item)
                            }}
                        /> 
                        : <MdOutlineCheckBoxOutlineBlank size={32} />
                }
            </span>
        </div>
    )
}

export default ListItem