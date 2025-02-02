import DataDisplay from "./display"
import { Suspense } from "react"
import Wrapper from "@/components/wrapper"

export const metadata = {
    title : "InteraView - Dashboard",
}

export default function DashboardPage()
{
    return(
        <Wrapper>
            <Suspense fallback={<h1>Loading...</h1>}>
                <DataDisplay />
            </Suspense>
        </Wrapper>
    )
}