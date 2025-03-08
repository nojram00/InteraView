import TakeQuizButton from "@/components/take-quiz-btn";
import capitalize from "@/utils/capitalize";
import Link from "next/link";

export default function Suggestion({ scoreAvg, itemAvg, activity, subject, topic = "" } : {
    scoreAvg : number,
    itemAvg : number,
    activity : string,
    subject : string,
    topic? : string
})
{

    const passed = () => {
        return itemAvg / 2 <= scoreAvg;
    }

    return(
        <>
            { passed() ? "" :  (
                <div className="flex flex-col gap-4 bg-white max-w-md p-4 rounded-md shadow-md">
                    <span>
                        You should focus on Improving <b>{activity}</b> on <b>{capitalize(subject)}</b>
                    </span>

                    <div>
                        <TakeQuizButton subject={subject} topic={topic}/>
                    </div>
                    
                </div>
            )}
        </>
    );
}