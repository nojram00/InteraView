"use client";
import React, { useActionState, useEffect } from 'react';
import { Dropdown, TextInput } from '@/components/form-inputs';
import { search } from '@/actions/dummy-actions';

export default function IdSearcher()
{
    const [state, action, pending] = useActionState(search, null)

    useEffect(() => {
        if(state)
        {
            if(state.code === 404)
            {
                alert("Student not found!");
            }
        }
    }, [state])

    const sections = [
        {
            name: "Benevolence",
            value: "benevolence"
        },
        {
            name: "Prospherity",
            value: "prospherity"
        },
        {
            name: "Simplicity",
            value: "simplicity"
        },
        {
            name: "Courage",
            value: "courage"
        }
    ]
    return(
        <form action={action} className='gap-4 flex flex-col max-w-lg w-full bg-gray-500 p-4 rounded-md text-white shadow-sm mt-4'>
            <TextInput label="First Name" name="firstname" type='text' />
            <TextInput label="Last Name" name="lastname" type='text' />
            <Dropdown label="Section" name="section" options={sections} />
            <div className='w-full'>
                <button disabled={pending} className="bg-blue-500 text-white p-2 rounded-md max-w-xs">{ pending ? "Searching..." : "Search"}</button>
            </div>
        </form>
    )
}