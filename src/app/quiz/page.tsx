import { GameCanvas } from "@/components/game-canvas";
import Wrapper from "@/components/wrapper";
import { getQuizData } from "@/data/questions";

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
                <button className="absolute -top-2 text-xl -right-5 bg-red-400 w-20 h-10 shadow-md rounded-sm">Quit</button>
                <GameCanvas quiz={quizData} />
            </div>
        </Wrapper>
    )
}