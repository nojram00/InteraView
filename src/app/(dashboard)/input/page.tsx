import { TextInput, Dropdown } from "@/components/form-inputs"
import { saveData } from "@/actions/dummy-actions"
import Wrapper from "@/components/wrapper"

export const metadata = {
    title : "InteraView - Input",
}

export default function InputPage() {

    const options = [
        { name: "Math", value: "math" },
        { name: "English", value: "english" },
        { name: "Science", value: "science" },
        { name: "Filipino", value: "filipino" },
        { name: "Araling Panlipunan", value: "ap" },
        { name: "Values Education", value: "values-educ" },
        { name: "MAPEH", value: "mapeh" },
        { name: "TLE", value: "tle" },
        { name: "Computer", value: "computer" }
    ]
    return(
        <Wrapper>
            <form action={saveData} className="w-full flex flex-col gap-5 bg-gray-300 shadow-md p-5 rounded-md">
                
                <Dropdown name="subject" label="Subject" options={options}/>

                <div className="flex flex-col gap-4 w-full">
                    <div className="self-start font-bold text-xl">
                        <h1>Written Works</h1>
                    </div>
                    <TextInput name="written-works-topic" label="Topic (Optional)" type="text"/>
                    <div className="flex flex-row gap-4 w-full">
                        <TextInput name="written-works-score" label="Score" type="number"/>
                        <TextInput name="written-works-items" label="No. of items" type="number"/>
                    </div>
                </div>

                <div className="flex flex-col gap-4 w-full">
                    <div className="self-start font-bold text-xl">
                        <h1>Performance Task</h1>
                    </div>
                    <TextInput name="perf-task-topic" label="Topic (Optional)" type="text"/>
                    <div className="flex flex-row gap-4 w-full">
                        <TextInput name="perf-task-score" label="Score" type="number"/>
                        <TextInput name="perf-task-items" label="No. of items" type="number"/>
                    </div>
                </div>

                <div className="flex flex-col gap-4 w-full">
                    <div className="self-start font-bold text-xl">
                        <h1>Exam</h1>
                    </div>
                    <TextInput name="exam-topic" label="Topic (Optional)" type="text"/>
                    <div className="flex flex-row gap-4 w-full">
                        <TextInput name="exam-score" label="Score" type="number"/>
                        <TextInput name="exam-items" label="No. of items" type="number"/>
                    </div>
                </div>

                <div>
                    <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Save</button>
                </div>
            </form>
        </Wrapper>
    )
}