"use server"

import { stat } from "fs";

type Options = {
    method? : "GET" | "POST" | "PUT" | "DELETE";
    headers? : any;
    body? : any;
}

export async function fetchServer<T>(url: string, options: Options = {
    method: "GET",
    headers: {
        "Content-Type": "application/json"
    }
})
{
    const res = await fetch(url, options);
    let data : T | null;

    try
    {
        data = await res.json();
    }
    catch(jsonError)
    {
        data = null;
        return {
            status: res.status,
            error : "Invalid JSON Response"
        }
    }
    return {
        data : data, 
        status: res.status
    };
}