"use client";

import Link from 'next/link';
import {useRef, useState } from 'react';

export default function Hamburger() {

   const [open, setOpen] = useState(false);
    return(
        <div className='block md:hidden'>
            <button onClick={() => setOpen(!open)} className="p-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
            </button>
            <div className={`fixed h-full w-64 ${open ? 'left-0' : '-left-64'} top-0 bg-gray-200 shadow-md transition-all duration-300 ease-in-out`}>
                <div className='top-0 mt-5 flex gap-2 mx-4 items-center  text-black'>
                    <button onClick={() => setOpen(!open)} className='bg-gray-300 rounded-md p-1'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>
                    </button>
                    <span>Menu</span>
                </div>
                <nav className="p-4">
                    <ul className="space-y-2 w-full text-sm">
                        <li className="nav-button">
                            <Link onClick={() => setOpen(false)} className="hover:underline" href="/dashboard">Dashboard</Link>
                        </li>
                        <li className="nav-button">
                            <Link onClick={() => setOpen(false)} className="hover:underline" href="/input">Input</Link>
                        </li>
                        <li className="nav-button">
                            <Link onClick={() => setOpen(false)} className="hover:underline" href="/students">Students</Link>
                        </li>
                    </ul>
                </nav>
        </div>
        </div>
    )
}
