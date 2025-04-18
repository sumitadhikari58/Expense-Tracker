"use client"
import React from 'react'
import Image from "next/image";
import { useUser, UserButton } from "@clerk/nextjs";
import Link from 'next/link';
function Header() {
    const { user, isSignedIn } = useUser();

    return (
        <div className='p-5 flex justify-between items-center shadow-neutral-200 shadow-lg'>
            <Image 
                src={'/logo.svg'} // use / instead of ./ for public assets in Next.js
                alt='logo'
                width={160}
                height={100}
            />
            {isSignedIn ? (
    <>
        <UserButton afterSignOutUrl='/' />
    </>
) : (
    <Link href="/sign-in">
        <button className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600">
            Get Started
        </button>
    </Link>
)}
        </div>
    );
}

export default Header;