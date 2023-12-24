import React, { useState } from 'react'
import { MdCancel, MdCheckBox, MdOutlineCheckBoxOutlineBlank } from 'react-icons/md'

interface ListItemInterface {
    item_name: string,
    selected: boolean
    onItemClick: (itemName: string, isItemSelected: boolean) => void
}

function ListItem(item: ListItemInterface) {

    const [isItemSelected, setIsItemSelected] = useState<boolean>(item.selected);

    return (
        <div className="item"
            // onClick={() => item.onItemClick(item.item_name, item.selected)}
            onClick={ () => setIsItemSelected(!isItemSelected)}
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