"use client";
import React from 'react';
import { useRouter } from 'next/navigation';

export default function ViewButton({ id } : { id : string }){
    const router = useRouter();

    const viewStudent = () => {
        router.push(`/dashboard/${id}`);
    }

    return(
        <button onClick={viewStudent} className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600">
            View Student Score
        </button>
    )
}
