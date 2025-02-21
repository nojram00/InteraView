import Wrapper from "@/components/wrapper";
import StudentCreationForm from "./student-create-form";

export default function StudentPage()
{
    return(
        <Wrapper>
            <h1>Student Page</h1>
            <StudentCreationForm />
        </Wrapper>
    )
}