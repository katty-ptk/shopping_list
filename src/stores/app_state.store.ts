import { create } from 'zustand';
import { Screen } from '../utils/types/screen.type';

interface AppState {
    screen: Screen,
    setScreen: (new_screen: Screen) => void
}

export const screens : Screen[] = [
    {
        screen_index: 0,
        screen_name: "LISTS",
    },

    {
        screen_index: 1,
        screen_name: "FAMILY",
    },

    {
        screen_index: 2,
        screen_name: "NOTIFICATIONS",
    },

    {
        screen_index: 3,
        screen_name: "ACCOUNT"
    },

    {
        screen_index: 4,
        screen_name: "SETTINGS"
    }
]

export const useAppStateStore = create<AppState>()( (set) => ({
    screen: {
        screen_index: 0,
        screen_name: "lists"
    },
    setScreen: (new_screen) => set({
        screen: new_screen
    })
}))