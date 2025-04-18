import React from 'react'
import Image from 'next/image'
import { LayoutGrid, Wallet, Receipt, ArrowUpRightSquare } from 'lucide-react';
import { UserButton } from '@clerk/nextjs';
function SideNav() {
    const menuList = [
        { id: 1, name: 'Dashboard', icon: LayoutGrid },
{ id: 2, name: 'Budgets', icon: Wallet },
{ id: 3, name: 'Expenses', icon: Receipt },
{ id: 4, name: 'Upgrade', icon: ArrowUpRightSquare }
       
    ];

    return (
        <div className='h-screen p-5   border shadow-sm '> 
            <Image src='/logo.svg' alt='logo' width={160} height={100} className='p-6' />
            <div className='mt-5'>
                {menuList.map((menu, index) => (
                    <h2 className='flex items-center gap-2 p-5 text-gray-700 hover:bg-orange-200 rounded-md cursor-pointer hover:text-orange-800' key={index}>
                        <menu.icon />
                        {menu.name}
                    </h2>
                ))}
            </div>
            <div className='flex items-center fixed bottom-10 gap-2 p-5 text-gray-700 hover:bg-orange-200 rounded-md cursor-pointer hover:text-orange-800'>
                <UserButton/>
                Profile
            </div>
        </div>
    )
}

export default SideNav