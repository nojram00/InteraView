"use client";

import { Dropdown, TextInput } from "@/components/form-inputs";

export default function StudentCreationForm()
{
    const section = [
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
        <form className="bg-gray-300 shadow-md p-5 rounded-md mt-5">
             <TextInput name="first-name" label="First Name" type="text"/>  
             <TextInput name="first-name" label="First Name" type="text"/> 
             <Dropdown name="section" label="Section" options={section}/>
        </form>
    )
}