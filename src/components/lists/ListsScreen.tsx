import React from 'react'
import PrimaryList from './PrimaryList'
import OtherLists from './OtherLists'
import AppBar from '../global/AppBar'

function ListsScreen() : any{
  return (
    <div className='lists_screen'>
      <AppBar 
        text="Your Lists"
      />

      <div className="lists">
        <PrimaryList />

        <OtherLists />
      </div>

    </div>
  )
}

export default ListsScreen