import { Suspense } from "react"
import Wrapper from "@/components/wrapper"
import IdSearcher from "./id-searcher"

export const metadata = {
    title : "InteraView - Dashboard",
}

export default function DashboardPage()
{
    return(
        <Wrapper>
            <h1>Enter your Student ID: </h1>
            <IdSearcher />
        </Wrapper>
    )
}