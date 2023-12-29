import { create } from "zustand";
import { ListItemInterface } from "../components/lists/ListItem";

interface PrimaryListInterface {
    name: string,
    date: string,
    items: Array<ListItemInterface>,
    addItem: ( new_item: ListItemInterface) => void,
    removeItem: ( item_to_remove: ListItemInterface ) => void,
}

export const usePrimaryListStore = create<PrimaryListInterface>()( ( set ) => ({
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
    }
}))