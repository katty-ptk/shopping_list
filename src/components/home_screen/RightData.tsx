import React from 'react'

import { useScreenStore } from '../../stores/screens_state.store'
import { useAppStateStore } from '../../stores/app_state.store';
import { Screen } from '../../utils/types/screen.type';

function RightData() {

  const screen = useAppStateStore( (state) => state.screen );
  const setScreen = useAppStateStore( (state) => state.setScreen );

  return (
    <div
        id = "right_data"
    >
    
    { screen.screen_name }

    </div>
  )
}

export default RightData