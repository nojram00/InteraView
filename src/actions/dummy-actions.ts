"use server"

import { DataOutput } from "@/types/data-output"
import axios, { AxiosError } from "axios"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"
import { fetchServer } from "@/utils/fetchServer"

export async function saveData(prevState: any, formdata : FormData)
{

    const writtenWorks = (formdata.getAll("written-data") as string[]).map((data) => {
        return (JSON.parse(data) as {
            topic : string;
            score : number;
            items : number;
        });
    });

    const performanceTasks = (formdata.getAll("perf-data") as string[]).map((data) => {
        return (JSON.parse(data) as {
            topic : string;
            score : number;
            items : number;
        });
    })

    const exams = (formdata.getAll("exam-data") as string[]).map((data) => {
        return (JSON.parse(data) as {
            topic : string;
            score : number;
            items : number;
        });
    })

    console.log(writtenWorks);

    const payload : DataOutput = {
        student_info : {
            first_name : formdata.get("first-name") as string,
            last_name : formdata.get("last-name") as string,
            section : (formdata.get("section") as string).toUpperCase()
        },
        subject : formdata.get("subject") as string,
        written_works : writtenWorks.map((data) => { 
            return { 
                topic : data.topic, 
                score : Number(data.score), 
                items : Number(data.items) 
            }}),
        performance_tasks : performanceTasks.map((data) => {
            return { 
                topic : data.topic, 
                score : Number(data.score), 
                items : Number(data.items) 
            }
        }),
        exams : exams.map((data) => {
            return { 
                topic : data.topic, 
                score : Number(data.score), 
                items : Number(data.items) 
            }
        })
    }

    console.log(payload);
    // return;

    console.log(`${process.env.SERVER_URL}/students-activity`);
    const {data, status} = await fetchServer<{ message : string;}>(`${process.env.SERVER_URL}/students-activity`, {
        method : "POST",
        headers : {
            "Content-Type" : "application/json"
        },
        body : JSON.stringify(payload)
    })

    if(status !== 200)
    {
        return {
            success : false,
            code : status,
            error : data === null || typeof data === "undefined" ? "Error saving data" : data.message
        }
    }

    return {
        success : true,
        code : status,
        message : data == null ? "Data saved successfully" : data.message
    }
}

export async function saveFinalScore(score : number) : Promise<void>
{
    const cookieData = await cookies();

    cookieData.set("final-score", score.toString());
}

export async function getScore() : Promise<number | null>
{
    const cookieData = await cookies();

    const score = cookieData.get("final-score");

    console.log("Score: ",score);

    if(score)
    {
        return Number(score.value);
    }

    return null;
}

export async function search(prevState : any ,formdata : FormData)
{
    const payload = {
        first_name : formdata.get("firstname") as string,
        last_name : formdata.get("lastname") as string,
        section : (formdata.get("section") as string).toUpperCase()
    }

    console.log(payload);

    const {data, status} = await fetchServer<{ id : string}>(`${process.env.SERVER_URL}/students/find`, {
        method : "POST",
        headers : {
            "Content-Type" : "application/json"
        },
        body : JSON.stringify(payload)
    });

    if(status !== 200)
    {
        console.error("Error searching for student");

        return {
            error : "Error searching for student",
            code : status
        }
    }

    const id = data?.id;

    console.log(id);

    redirect(`/dashboard/${id}`);
    
}