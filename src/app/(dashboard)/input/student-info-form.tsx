"use client";

import { Dropdown, TextInput } from "@/components/form-inputs";

export default function StudentInfoForm()
{
    const sections = [
        {
            name: "A",
            value: "a"
        },
        {
            name: "B",
            value: "b"
        },
        {
            name: "C",
            value: "c"
        },
        {
            name: "D",
            value: "d"
        },
        {
            name: "E",
            value: "e"
        }
    ]
    return(
        <fieldset className="bg-slate-200 p-4 rounded-md shadow-md">
            <legend className="bg-white p-2 rounded-md shadow-md font-bold">Student Information</legend>
            <TextInput label="First Name" name="first-name" type="text"/>
            <TextInput label="Last Name" name="last-name" type="text"/>
            <Dropdown label="Section" name="section" options={sections} />
        </fieldset>
    )
}