import getData from "@/data/get-data"
import { DataBarGraph, DataPieGraph } from "@/components/charts";

export default function DataDisplay({data, subject} : { data : any, subject : string }) {

    console.log("data: ",data);
    
    if (data === null) {
        return (
            <div>
                <h1>No data</h1>
            </div>
        )
    }

    return (
        <div className="flex flex-col gap-4 w-full min-h-screen">
            <DataBarGraph data={
                {
                    labels: data.map((activity : any) => activity.topic === "" ? "No Topic Name" : activity.topic),
                    datasets: [
                        {
                            type : 'bar',
                            label: `Items for ${subject}`,
                            data: data.map((activity : any) => activity.items),
                            backgroundColor: ['rgba(255, 192, 203, 0.5)', ],
                            borderColor: ['rgba(255, 192, 203, 1)'],
                            borderWidth: 1
                        },
                        {
                            label: `Scores for ${subject}`,
                            data: data.map((activity : any) => activity.score),
                            backgroundColor: ['rgba(54, 162, 235, 0.5)'],
                            borderColor: ['rgba(54, 162, 235, 1)'],
                            borderWidth: 1,
                        }
                    ]
                }
            }/>

            <DataPieGraph data={
                {
                    labels: data.map((activity : any) => activity.topic === "" ? "No Topic Name" : activity.topic),
                    datasets: [
                        {
                            label: `Score for ${subject}`,
                            data: data.map((activity : any) => activity.score),
                            backgroundColor: ['rgba(255, 192, 203, 0.5)', 'rgba(54, 162, 235, 0.5)', 'rgba(255, 206, 86, 0.5)'],
                            borderColor: ['rgba(255, 192, 203, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)'],
                            borderWidth: 1
                        }
                    ]
                }} />

        </div>
    )
}