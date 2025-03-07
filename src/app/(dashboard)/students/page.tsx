import Wrapper from "@/components/wrapper";
import StudentCreationForm from "./student-create-form";
import { Suspense } from "react";
import StudentTable from "./student-table";
import LoadingSpinner from "@/components/loading-spinner";

export default async function StudentPage({
    searchParams
} : {
    searchParams : Promise<{ page : number }>
})
{
    const { page } = await searchParams ?? 1;

    console.log(page);

    return(
        <Wrapper>
            <h1>Student Page</h1>
            <Suspense fallback={<LoadingSpinner />}>
                <StudentTable page={page}/>
            </Suspense>
        </Wrapper>
    )
}