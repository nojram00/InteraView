import { TextInput, Dropdown } from "@/components/form-inputs"
import { saveData } from "@/actions/dummy-actions"
import Wrapper from "@/components/wrapper"
import StudentSelectionList from "./student-picker"
import StudentInfoForm from "./student-info-form"

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

                <StudentInfoForm />

                <fieldset className="flex flex-col gap-4 w-full bg-slate-200 p-4 rounded-md shadow-md">
                    <legend className="font-bold text-lg bg-white p-2 rounded-md shadow-md">
                        Written Works
                    </legend>
                    <TextInput name="written-works-topic" label="Topic (Optional)" type="text"/>
                    <div className="flex flex-row gap-4 w-full">
                        <TextInput name="written-works-score" label="Score" type="number"/>
                        <TextInput name="written-works-items" label="No. of items" type="number"/>
                    </div>
                </fieldset>

                <fieldset className="flex flex-col gap-4 w-full bg-slate-200 p-4 rounded-md shadow-md">
                    <legend className="font-bold text-lg bg-white p-2 rounded-md shadow-md">
                        Performance Task
                    </legend>
                    <TextInput name="perf-task-topic" label="Topic (Optional)" type="text"/>
                    <div className="flex flex-row gap-4 w-full">
                        <TextInput name="perf-task-score" label="Score" type="number"/>
                        <TextInput name="perf-task-items" label="No. of items" type="number"/>
                    </div>
                </fieldset>

                <fieldset className="flex flex-col gap-4 w-full bg-slate-200 p-4 rounded-md shadow-md">
                    <legend className="font-bold text-lg bg-white p-2 rounded-md shadow-md">
                        Exam
                    </legend>
                    <TextInput name="exam-topic" label="Topic (Optional)" type="text"/>
                    <div className="flex flex-row gap-4 w-full">
                        <TextInput name="exam-score" label="Score" type="number"/>
                        <TextInput name="exam-items" label="No. of items" type="number"/>
                    </div>
                </fieldset>

                <div>
                    <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Save</button>
                </div>
            </form>
        </Wrapper>
    )
}