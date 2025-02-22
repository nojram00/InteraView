"use client";
import Wrapper from '@/components/wrapper';
import useFetch from '@/hooks/useFetch';
import React from 'react';
import DataDisplay from './display';

type Activity = {
    items : number;
    score : number;
    topic? : string;
}

export default function MapData({ id } : { id : string })
{
    const { data, loading, error } = useFetch<{
        id : string;
        student_id : string;
        subject : string;
        written_works : Activity;
        performance_tasks : Activity;
        exams : Activity;
    }[]>(`${process.env.NEXT_PUBLIC_SERVER_URL}/students-activity/${id}`);

    console.log(data);

    if(data?.length === 0)
    {
        return(
            <Wrapper>
                <h1>No Activities Found...</h1>
            </Wrapper>
        )
    }

    return(
        <Wrapper>
            <h1>Student Data</h1>
            <div className='flex flex-col gap-4 w-full min-h-screen p-2'>
                {loading && <p>Loading...</p>}
                {error && <p>Error: {error}</p>}
                {data && data.map(student => (
                    <details key={student.id} className='bg-gray-300 rounded-md p-4 shadow-md'>
                        <summary className='list-none cursor-pointer'>
                            <h2 className='uppercase font-bold hover:text-gray-500'>{student.subject}</h2>

                        </summary>
                        {/* <p>Written Works: {student.written_works.score}/{student.written_works.items}</p>
                        <p>Performance Tasks: {student.performance_tasks.score}/{student.performance_tasks.items}</p>
                        <p>Exams: {student.exams.score}/{student.exams.items}</p> */}
                        <DataDisplay data={student}/>
                    </details>
                ))}
            </div>
        </Wrapper>
    )
}