import { create } from "zustand";
import { ListItemInterface } from "../components/lists/ListItem";

interface PrimaryListInterface {
    name: string,
    date: string,
    items: Array<ListItemInterface>,
    addItem: ( items: Array<ListItemInterface>, new_item: ListItemInterface) => void
}

export const usePrimaryListStore = create<PrimaryListInterface>()( ( set ) => ({
    name: "Today's List",
    date: "mon, 18 dec",
    items: [],

    addItem: ( items, new_item ) => set({
        items: [
            ...items,
            new_item
        ]
    })
}))