"use client";

import Link from 'next/link';
import {useRef } from 'react';

export default function Hamburger() {

    const dialog = useRef<HTMLDialogElement>(null);

    const openDialog = () => {
        dialog.current?.showModal();
    }

    const closeDialog = () => {
        dialog.current?.close();
    }

    return(
        <div className='block md:hidden'>
            <button onClick={openDialog}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
            </button>
            <dialog ref={dialog} className="w-1/2 rounded-md shadow-md">
                <nav className="p-4">
                <ul className="space-y-2 w-full text-sm">
                    <li className="nav-button">
                        <Link className="hover:underline" href="/dashboard">Dashboard</Link>
                    </li>
                    <li className="nav-button">
                        <Link className="hover:underline" href="/input">Input</Link>
                    </li>
                    <li className="nav-button">
                        <Link className="hover:underline" href="/suggestion">Suggetions</Link>
                    </li>
                    <li>
                        <button onClick={closeDialog}>Close</button>
                    </li>
                </ul>
                </nav>
        </dialog>
        </div>
    )
}
