import React from 'react'
import SideBar from '../Sidebar'

const RootLayout = () => {
  return (
    <div className='overflow-hidden'>
      {/* <SideBar /> */}
      <div className="w-2/3 mt-20 p-4 sm:ml-64">
        <div className="grid grid-cols-1 sm:grid-cols-2">
        </div>
      </div>
    </div>
  )
}

export default RootLayout