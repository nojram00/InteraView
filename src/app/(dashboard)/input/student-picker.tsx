"use client";
import React from 'react';
import useFetch from '@/hooks/useFetch';

export default function StudentSelectionList()
{
    const inputRef = React.useRef<HTMLInputElement>(null);

    const [label, setLabel] = React.useState<string>("Select Student");

    const { data, loading, error } = useFetch<{
        id : string;
        first_name : string;
        last_name : string;
        section? : string;
    }[]>(`${process.env.NEXT_PUBLIC_SERVER_URL}/students`);

    const selectStudent = (student_id : string, name : string) => {
        inputRef.current!.value = student_id;
        setLabel("Selected: " + name);
    }

    return(
        <>
            <input ref={inputRef} type="hidden" name="student_id"/>
            <details className='cursor-pointer bg-white max-w-sm rounded-md border-black border-2'>
                <summary className='list-none hover:text-gray-500 p-4'>{label}</summary>
                <div className='flex flex-col gap-2 bg-gray-400 max-h-52 overflow-auto px-4 py-2 rounded-b-sm text-white justify-start'>
                    {loading && <p>Loading...</p>}
                    {error && <p>Error: {error}</p>}
                    {data && data.map(student => (
                        <button className='hover:text-gray-600 p-1 rounded-sm self-start' type='button' key={student.id} onClick={() => selectStudent(student.id, student.first_name + " " + student.last_name)}>{student.first_name} {student.last_name}</button>
                    ))}
                </div>
            </details>

            
        </>
    )
}