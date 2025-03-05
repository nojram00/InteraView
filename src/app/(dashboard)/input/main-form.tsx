"use client";
import { TextInput, Dropdown } from "@/components/form-inputs"
import { saveData } from "@/actions/dummy-actions"
import StudentSelectionList from "./student-picker"
import StudentInfoForm from "./student-info-form"
import { useActionState, useEffect } from "react";

export default function MainForm()
{
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

    const [state, action, pending] = useActionState(saveData, null);

    useEffect(() => {
        if(state?.success === false)
        {
            alert("Failed to save data");
        }
        else if(state?.success === true)
        {
            alert("Data saved successfully");
        }
    }, [state])

    return(
        <form action={action} className="w-full flex flex-col gap-5 bg-gray-300 shadow-md p-5 rounded-md">

            <div className={`fixed inset-0 flex items-center justify-center transition-all ease-in-out h-10 ${pending ? "top-2 right-50" : "-top-12" }`}>
                <div className="bg-gray-200 rounded-md shadow-md p-2">
                    <span className="text-lg font-bold">Creating new student data...</span>
                </div>
            </div>

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
                <button type="submit" disabled={pending} className="bg-blue-500 disabled:cursor-not-allowed hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Save</button>
            </div>
        </form>
    )
}