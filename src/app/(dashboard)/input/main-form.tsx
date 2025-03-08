"use client";
import { TextInput, Dropdown } from "@/components/form-inputs"
import { saveData } from "@/actions/dummy-actions"
import StudentSelectionList from "./student-picker"
import StudentInfoForm from "./student-info-form"
import { Fragment, useActionState, useEffect, useState } from "react";
import WrittenWorksField from "./fields/written-works";
import PerfTaskField from "./fields/perf-tasks";
import ExamField from "./fields/exams";

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
    const [fieldCountA , setFieldCountA] = useState(1);
    const [fieldCountB , setFieldCountB] = useState(1);
    const [fieldCountC , setFieldCountC] = useState(1);

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

    const addWrittenWorksFieldA = () => {
        setFieldCountA(fieldCountA + 1);
        console.log(fieldCountA);
    }

    const removeWrittenWorksFieldA = () => {
        if(fieldCountA > 1){
            setFieldCountA(fieldCountA - 1);
        }
    }

    const addWrittenWorksFieldB = () => {
        setFieldCountB(fieldCountB + 1);
        console.log(fieldCountB);
    }

    const removeWrittenWorksFieldB = () => {
        if(fieldCountB > 1){
            setFieldCountB(fieldCountB - 1);
        }
    }

    const addWrittenWorksFieldC = () => {
        setFieldCountC(fieldCountC + 1);
        console.log(fieldCountB);
    }

    const removeWrittenWorksFieldC = () => {
        if(fieldCountC > 1){
            setFieldCountC(fieldCountC - 1);
        }
    }

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
                <div className="max-w-md flex justify-around">
                    <button type="button" onClick={addWrittenWorksFieldA} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">Add Field</button>
                    <button type="button" onClick={removeWrittenWorksFieldA} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Remove Field</button>
                </div>
                {Array.from({ length : fieldCountA }).map((_, index) => (
                    <Fragment key={index}>
                        <WrittenWorksField />
                    </Fragment>
                ))}
            </fieldset>

            <fieldset className="flex flex-col gap-4 w-full bg-slate-200 p-4 rounded-md shadow-md">
                <legend className="font-bold text-lg bg-white p-2 rounded-md shadow-md">
                    Performance Task
                </legend>

                <div className="max-w-md flex justify-around">
                    <button type="button" onClick={addWrittenWorksFieldB} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">Add Field</button>
                    <button type="button" onClick={removeWrittenWorksFieldB} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Remove Field</button>
                </div>
                
                {Array.from({ length : fieldCountB }).map((_, index) => (
                    <Fragment key={index}>
                        <PerfTaskField />
                    </Fragment>
                ))}
            </fieldset>

            <fieldset className="flex flex-col gap-4 w-full bg-slate-200 p-4 rounded-md shadow-md">
                <legend className="font-bold text-lg bg-white p-2 rounded-md shadow-md">
                    Exam
                </legend>

                <div className="max-w-md flex justify-around">
                    <button type="button" onClick={addWrittenWorksFieldC} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">Add Field</button>
                    <button type="button" onClick={removeWrittenWorksFieldC} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Remove Field</button>
                </div>

                {Array.from({ length : fieldCountC }).map((_, index) => (
                    <Fragment key={index}>
                        <ExamField />
                    </Fragment>
                ))}
                
            </fieldset>

            <div>
                <button type="submit" disabled={pending} className="bg-blue-500 disabled:cursor-not-allowed hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Save</button>
            </div>
        </form>
    )
}