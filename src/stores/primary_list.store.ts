import { create } from "zustand";
import { ListItemInterface } from "../components/lists/ListItem";

interface PrimaryListInterface {
    name: string,
    date: string,
    items: Array<ListItemInterface>,
    addItem: ( new_item: ListItemInterface) => void,
    removeItem: ( item_to_remove: ListItemInterface ) => void,
    completeItem: ( item_to_complete: ListItemInterface ) => void,
}

export const usePrimaryListStore = create<PrimaryListInterface>()( ( set, get ) => ({
    name: "Today's List",
    date: "mon, 18 dec",
    items: [],

    addItem: ( new_item ) => set((state) =>({
        items: [
            ...state.items,
            new_item
        ]
    })),

    removeItem: ( item_to_remove ) => {
        set((state) =>
            (   
                { 
                    items: state.items.filter( (item) => item.item_name !== item_to_remove.item_name)
                }
            )
        )
    },

    completeItem: ( item_to_complete ) => {
        
        // grab current items
        let current_items: Array<ListItemInterface> = get().items;

        // set the 'selected' value of item_to_complete to: true
        const found_item = current_items.find( ( item ) => item.item_name === item_to_complete.item_name);

        if ( found_item ) {
            current_items[current_items.indexOf(found_item)].selected = true;
            // sort array so that the newly completed item will be at the bottom
            current_items = [
                ...current_items.filter( item => item.item_name !== found_item.item_name ),
                found_item
            ]

            // overwrite items to be current_items
            set( ( state ) => (
                {
                    items: current_items
                }
            ))
        }


    }
}))