import { useAppStateStore } from '../../stores/app_state.store';

function RightData() {

  const screen = useAppStateStore( (state) => state.screen );

  return (
    <div
        id = "right_data"
    >
    
    { screen.screen_name }

    </div>
  )
}

export default RightData