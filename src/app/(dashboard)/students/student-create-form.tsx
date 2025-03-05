"use client";

import { Dropdown, TextInput } from "@/components/form-inputs";

export default function StudentCreationForm()
{
    const section = [
        {
            name: "Benevolence",
            value: "benevolence"
        },
        {
            name: "Prospherity",
            value: "prospherity"
        },
        {
            name: "Simplicity",
            value: "simplicity"
        },
        {
            name: "Courage",
            value: "courage"
        }
    ]
    return(
        <form className="bg-gray-300 shadow-md p-5 rounded-md mt-5">
             <TextInput name="first-name" label="First Name" type="text"/>  
             <TextInput name="first-name" label="First Name" type="text"/> 
             <Dropdown name="section" label="Section" options={section}/>
        </form>
    )
}