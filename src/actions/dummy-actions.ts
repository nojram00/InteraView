"use server"

import { DataOutput } from "@/types/data-output"
import { cookies } from "next/headers"

export async function saveData(formdata : FormData) : Promise<void>
{
    const data : DataOutput = {
        subject : formdata.get("subject") as string,
        written_works : {
            topic : formdata.get("written-works-topic") as string,
            score : Number(formdata.get("written-works-score")),
            items : Number(formdata.get("written-works-items"))
        },
        performance_tasks : {
            topic : formdata.get("perf-task-topic") as string,
            score : Number(formdata.get("perf-task-score")),
            items : Number(formdata.get("perf-task-items"))
        },
        exams : {
            topic : formdata.get("exam-topic") as string,
            score : Number(formdata.get("exam-score")),
            items : Number(formdata.get("exam-items"))
        }
    }

    const cookieData = await cookies();

    cookieData.set("data", JSON.stringify(data));

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