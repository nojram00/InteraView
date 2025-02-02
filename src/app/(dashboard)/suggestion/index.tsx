import { getScore } from "@/actions/dummy-actions";
import getData from "@/data/get-data"
import Link from "next/link";

export default async function SuggestionPageIndex()
{
    const data = await getData();
    const score = await getScore();

    console.log(score);

    if(data === null)
    {
        return(
            <div>
                <h1>No data</h1>
            </div>
        )
    }

    const getLowest = () => {
        const scores = []
        if(data.written_works.score !== data.written_works.items) scores.push(data.written_works.score);
        if(data.performance_tasks.score !== data.performance_tasks.items) scores.push(data.performance_tasks.score);
        if(data.exams.score !== data.exams.items) scores.push(data.exams.score);

        let lowest = scores[0];

        for(let i = 1; i < scores.length; i++)
        {
            if(scores[i] < lowest)
            {
                lowest = scores[i];
            }
        }

        return lowest;
    }
    
    const getFocusArea = () => {
        let focus = "";
        let topic = "";

        switch(getLowest()){
            case data.written_works.score:
                focus = "written works";
                topic = data.written_works.topic as string;
                break;
            case data.performance_tasks.score:
                focus = "performance tasks";
                topic = data.performance_tasks.topic as string;
                break;
            case data.exams.score:
                focus = "exams";
                topic = data.exams.topic as string;
                break;
        }   

        return {focus, topic, subject : data.subject};
    }

    return(
        <div className="flex flex-col gap-4 w-full min-h-screen">
            <h1>Suggestions</h1>

            <p>You should focus on improving {getFocusArea().focus} in <span className="capitalize">{getFocusArea().subject}</span>: {
                getFocusArea().topic !== "" ? `${getFocusArea().topic} needed.` : "No topic"
            }</p>
            
            <div>
                <Link 
                href={`/quiz?subject=${getFocusArea().subject}&topic=${getFocusArea().topic}`}
                className="bg-blue-500 text-white p-2 rounded-md"
                >
                    Take A Quiz { score !== null ? `(Last score: ${score})` : "" }
                </Link>
            </div>

        </div>
    )
}