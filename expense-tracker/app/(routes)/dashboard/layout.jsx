import React, { Children } from 'react'
import SideNav from './_components/SideNav'
function DashboardLayout({ children }) {
  return (
    <div>
        <div className='fixed md:w-64 hidden md:block bg-white-200'>
            <SideNav/>
        </div>
        <div className='md:ml-64 bg-amber-100'>
        {children}
        </div>
        </div>
  )
}

export default DashboardLayout