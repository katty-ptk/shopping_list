import React, {FC} from 'react'
import LeftMenu from '../components/home_screen/LeftMenu';
import RightData from '../components/home_screen/RightData';

const HomeScreen: FC = () => {
  return (
    <div
        id='home_screen'
    >
      <div id="center_component">
        <LeftMenu />
        <RightData />
      </div>
    </div>
  )
}

export default HomeScreen;
