import React from 'react'
import Image from "next/image";
import { Button } from '@/components/ui/button';
function Header() {
return (
    <div className='p-5 flex justify-between items-center shadow-md'>
            <Image src={'./logo.svg'}
            alt='logo'
            width={160}
            height={100}/>
            <Button className="bg-orange-500 text-white hover:bg-orange-600">Get Started</Button>
    </div>
)
}

export default Header