import React, { useState } from 'react'
import { MdCancel, MdOutlineCheckBoxOutlineBlank } from 'react-icons/md'

export interface ListItemInterface {
    item_name: string,
    selected: boolean
    onItemClick: () => void
}

function ListItem(item: ListItemInterface) {

    const [isItemSelected, setIsItemSelected] = useState<boolean>(item.selected);

    const onItemClick = () => onItemClick

    return (
        <div className="item"
            // onClick={() => item.onItemClick(item.item_name, item.selected)}
            onClick={ () => {
                    setIsItemSelected(!isItemSelected)
                    console.log(`${item.item_name} is: ${isItemSelected? "completed" : " to be completed"}`)
                    onItemClick()
                }
            }
        >
            <p className={isItemSelected ? "completed_item" : ""}>{item.item_name}</p>

            <span>
                {
                    isItemSelected
                        ? <MdCancel size={32} color='red' /> 
                        : <MdOutlineCheckBoxOutlineBlank size={32} />
                }
            </span>
        </div>
    )
}

export default ListItem