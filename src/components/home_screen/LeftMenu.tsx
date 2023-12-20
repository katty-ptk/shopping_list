import React, {useState} from 'react'

import {MdAccountCircle, MdDashboard, MdFamilyRestroom, MdSettings} from 'react-icons/md';
import { IoIosNotifications } from "react-icons/io";

import Logo from '../Logo';
import LeftMenuItem from './LeftMenuItem';

import { useScreenStore } from '../../stores/screens_state.store';
import { useAppStateStore, screens } from '../../stores/app_state.store';

const LeftMenu = () => {
    const setScreen = useAppStateStore( (state) => state.setScreen);

    const [ selectedIndex, setSelectedIndex ] = useState(0);

    const top_items = [
      {
        icon: <MdDashboard 
          size={24}
          color={selectedIndex == 0 ? '#79378A' : 'white'}
        />,
  
        text: "Your Lists"
      },
  
      {
        icon:  <MdFamilyRestroom 
          size={24}
          color={selectedIndex == 1 ? '#79378A' : 'white'}
        />,
  
        text: "Family"
      },
  
      {
        icon: <IoIosNotifications 
          size={24}
          color={selectedIndex == 2 ? '#79378A' : 'white'}
        />,
  
        text: "Nofications"
      },
    ];
  
    const bottom_items = [
      {
        icon: <MdAccountCircle
          size={24}
          color={selectedIndex == top_items.length + 0 ? '#79378A' : 'white'}
        />,
  
        text: "Account"
      },
  
      {
        icon: <MdSettings
          size={24}
          color={selectedIndex == top_items.length + 1 ? '#79378A' : 'white'}
        />,
  
        text: "Settings"
      },
    ]
  

    return (
        <div id="left_menu">
    
            <div className="top">
              <Logo />
    
              {
                top_items.map( item => 
                  <span
                    onClick={() => {
                        setSelectedIndex(top_items.indexOf(item));
                        setScreen({
                            screen_index: top_items.indexOf(item), 
                            screen_name: screens[top_items.indexOf(item)].screen_name
                        })
                    }}  
                  >
                    <LeftMenuItem
                      icon={item.icon}
                      text={item.text}
                      selected={top_items.indexOf(item) == selectedIndex}
                    />
                  </span>)
              }
            </div>
    
    
            <div className="bottom">
              {
                bottom_items.map( item => 
                  <span
                    onClick={() => {
                        setSelectedIndex(top_items.length + bottom_items.indexOf(item));

                        setScreen({
                            screen_index: top_items.length + bottom_items.indexOf(item), 
                            screen_name: screens[top_items.length + bottom_items.indexOf(item)].screen_name
                        })
                    }}  
                  >
                    <LeftMenuItem
                      icon={item.icon}
                      text={item.text}
                      selected={selectedIndex == top_items.length + bottom_items.indexOf(item)}
                    />
                  </span>)
              }
            </div>
        </div>
      )
    }

export default LeftMenu