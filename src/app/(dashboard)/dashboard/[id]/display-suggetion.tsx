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
        return itemAvg / 2 < scoreAvg;
    }

    return(
        <>
            { passed() ? "" :  (
                <div className="flex flex-col gap-4 bg-white max-w-md p-4 rounded-md shadow-md">
                    <span>
                        You should focus on Improving <b>{activity}</b> on <b>{capitalize(subject)}</b>
                    </span>

                    <div>
                        <Link className="bg-blue-500 text-white p-2 rounded-md" href={`/quiz?subject=${subject}&topic=${topic}`}>
                            Take a Quiz
                        </Link>
                    </div>
                    
                </div>
            )}
        </>
    );
}