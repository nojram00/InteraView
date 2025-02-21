import { GameCanvas } from "@/components/game-canvas";
import Wrapper from "@/components/wrapper";
import { getQuizData } from "@/data/questions";
import QuitButton from "./quit-button";

export const metadata = {
    title : "InteraView - Quiz",
    description : "Quiz page"
}

export default async function QuizPage({
    searchParams
} : {
    searchParams : Promise<{
        subject : string
        topic : string
    }>
})
{
    const {subject} = await searchParams;

    const quizData = await getQuizData(subject);

    console.log(quizData);
    console.log(subject);

    if(!quizData)
    {
        return(
            <Wrapper>
                <h1>Quiz not found</h1>
            </Wrapper>
        )
    }

    return(
        <Wrapper>
            <div className="min-h-screen relative bg-gray-800 flex flex-col items-center justify-center rounded-lg">
                <QuitButton />
                <GameCanvas quiz={quizData} />
            </div>
        </Wrapper>
    )
}