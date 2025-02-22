import getData from "@/data/get-data"
import { DataBarGraph, DataPieGraph } from "@/components/charts";

export default function DataDisplay({data} : { data : any }) {

    console.log(data);
    
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
                    labels: ['Written Works', 'Performance Task', "Exam"],
                    datasets: [
                        {
                            label: `Data for ${data.subject}`,
                            data: [data.written_works.score, data.performance_tasks.score, data.exams.score],
                            backgroundColor: ['rgba(255, 192, 203, 0.5)', 'rgba(54, 162, 235, 0.5)', 'rgba(255, 206, 86, 0.5)'],
                            borderColor: ['rgba(255, 192, 203, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)'],
                            borderWidth: 1
                        }
                    ]
                }
            }/>

            <DataPieGraph data={
                {
                    labels: ['Written Works', 'Performance Task', "Exam"],
                    datasets: [
                        {
                            label: `Data for ${data.subject}`,
                            data: [data.written_works.score, data.performance_tasks.score, data.exams.score],
                            backgroundColor: ['rgba(255, 192, 203, 0.5)', 'rgba(54, 162, 235, 0.5)', 'rgba(255, 206, 86, 0.5)'],
                            borderColor: ['rgba(255, 192, 203, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)'],
                            borderWidth: 1
                        }
                    ]
                }} />

        </div>
    )
}