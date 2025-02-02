"use server";

import { DataOutput } from "@/types/data-output";
import { cookies } from "next/headers";

export default async function getData() : Promise<DataOutput | null> {
    const cookieData = await cookies();

    if (!cookieData.has("data")) {
        return null;
    }

    return JSON.parse(cookieData.get("data")?.value as string);
}