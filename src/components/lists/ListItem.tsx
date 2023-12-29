import React, { useState } from 'react'
import { MdCancel, MdOutlineCheckBoxOutlineBlank } from 'react-icons/md'

export interface ListItemInterface {
    item_name: string,
    selected: boolean,
    selectItem: () => void,
    removeItem?: ( itemToRemove: ListItemInterface ) => void
}

function ListItem(item: ListItemInterface) {

    const [isItemSelected, setIsItemSelected] = useState<boolean>(item.selected);

    const selectItem = () => item.selectItem

    return (
        <div className="item"
            onClick={ () => {
                    if ( !isItemSelected ) {
                        setIsItemSelected(!isItemSelected)
                        selectItem()
                    }
                }
            }
        >
            <p className={isItemSelected ? "completed_item" : ""}>{item.item_name}</p>

            <span>
                {
                    isItemSelected
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