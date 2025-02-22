"use server"

import { DataOutput } from "@/types/data-output"
import axios, { AxiosError } from "axios"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"

export async function saveData(formdata : FormData)
{
    const data : DataOutput = {
        student_info : {
            first_name : formdata.get("first-name") as string,
            last_name : formdata.get("last-name") as string,
            section : (formdata.get("section") as string).toUpperCase()
        },
        subject : formdata.get("subject") as string,
        written_works : {
            topic : formdata.get("written-works-topic") as string,
            score : Number(formdata.get("written-works-score") ?? 0),
            items : Number(formdata.get("written-works-items") ?? 0)
        },
        performance_tasks : {
            topic : (formdata.get("perf-task-topic")) as string,
            score : Number(formdata.get("perf-task-score") ?? 0),
            items : Number(formdata.get("perf-task-items") ?? 0)
        },
        exams : {
            topic : formdata.get("exam-topic") as string,
            score : Number(formdata.get("exam-score") ?? 0),
            items : Number(formdata.get("exam-items") ?? 0)
        }
    }

    console.log(data);
    // return;

    console.log(`${process.env.SERVER_URL}/students-activity`);
    const response = await axios.post(`${process.env.SERVER_URL}/students-activity`, data);

    if(response.status !== 200)
    {
        console.error("Error saving data");
    }

    console.log(response.data);

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

    const response = await axios.post(`${process.env.SERVER_URL}/students/find`, payload);

    if(response.status !== 200)
    {
        console.error("Error searching for student");

        return {
            error : "Error searching for student",
            code : response.status
        }
    }

    const id = response.data.id;

    console.log(id);

    redirect(`/dashboard/${id}`);
    
}