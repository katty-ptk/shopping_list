import { useAppStateStore } from '../../stores/app_state.store';
import AccountScreen from '../account/AccountScreen';
import FamilyScreen from '../family/FamilyScreen';
import ListsScreen from '../lists/ListsScreen';
import NotificationsScreen from '../notifications/NotificationsScreen';
import SettingsScreen from '../settings/SettingsScreen';

function RightData() {

  const screen = useAppStateStore( (state) => state.screen );

  const screen_components = [
    <ListsScreen />,
    <FamilyScreen />,
    <NotificationsScreen />,
    <AccountScreen />,
    <SettingsScreen />
  ]

  return (
    <div
        id = "right_data"
    >
    
    { screen_components[screen.screen_index] }

    </div>
  )
}

export default RightData