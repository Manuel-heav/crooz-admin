import React from 'react'
import { Outlet } from 'react-router-dom'
import SideBar from '../Sidebar'

const RootLayout = () => {
  return (
    <div>
      <SideBar />
      <Outlet />
    </div>
  )
}

export default RootLayout