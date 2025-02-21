"use client";
import { useRouter } from "next/navigation";
export default function QuitButton()
{
    const router = useRouter();
    return(
        <button onClick={() => router.push("/dashboard")} className="absolute -top-2 text-xl -right-5 bg-red-400 w-20 h-10 shadow-md rounded-sm">Quit</button>
    )
}