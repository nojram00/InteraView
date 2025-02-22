"use server"

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
    const data = await res.json();
    return {
        data : data as T, 
        status: res.status
    };
}