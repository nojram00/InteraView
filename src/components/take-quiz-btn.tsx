"use client";
import Link from 'next/link';
import React from 'react';

export default function TakeQuizButton({
    subject, topic
} : {
    subject : string,
    topic? : string
})
{
    const dialogRef = React.useRef<HTMLDialogElement>(null);
    const [open, setOpen] = React.useState(false);
    
    const openDialog = () => {
        // debugger;
        setOpen(true);
    }
    const closeDialog = () => {
        // debugger;
        setOpen(false);
    }
    return(
        <div>
            {/* <button type='button' onClick={openDialog} className="bg-blue-500 text-white rounded-md p-2 hover:bg-blue-600">Take Quiz</button> */}
            <Link className='bg-blue-500 text-white p-2 rounded-md' href={`/quiz?subject=${subject}&topic=${topic ?? ""}`}>Take Quiz</Link>

            <p className='text-wrap p-4 text-xs text-red-400'> <b>Please note</b>: The quiz questions are designed for practice and may not fully align with the curriculum. They are intended to help you identify areas where you may need further improvement, but they are not formal assessments or guaranteed to be curriculum-accurate.</p>
            {/* <dialog ref={dialogRef} open={false} className='w-full h-full bg-black bg-opacity-50 fixed top-0 left-0 flex justify-center items-center'>
                <div className='bg-white p-4 rounded-md shadow-md max-w-md w-full'>
                    <p className='text-wrap p-4'> Please note: The quiz questions are designed for practice and may not fully align with the curriculum. They are intended to help you identify areas where you may need further improvement, but they are not formal assessments or guaranteed to be curriculum-accurate.</p>
                    <div className='flex justify-between items-center'>
                        <button type='button' onClick={closeDialog} className='bg-red-500 text-white p-2 rounded-md'>Close</button> <Link className='bg-blue-500 text-white p-2 rounded-md' href={`/quiz?subject=${subject}&topic=${topic ?? ""}`}>Proceed</Link>
                    </div>
                </div>
            </dialog> */}
        </div>
    )
}