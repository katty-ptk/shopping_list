import {create} from 'zustand';

import { Screen } from '../utils/types/screen.type';

interface ScreenState {
    screen: Screen,
    setScreenIndex: ( new_index: number, new_name: string ) => void
}

export const useScreenStore = create<ScreenState>()( (set) => ({
    screen: {
        screen_index: 0,
        screen_name: ""
    },
    setScreenIndex: ( new_index, new_name ) => set({
        screen: {
            screen_index: new_index,
            screen_name: new_name
        }
    })
}))