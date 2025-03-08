"use client";
import { ChangeEvent } from "react"

export function TextInput({ name, label, type, onChange } : { name : string, label : string, type : string, onChange? : (e : ChangeEvent<HTMLInputElement>) => void }) {
    return(
        <div className="flex flex-col w-1/2 gap-2">
            <label htmlFor={name}>{label}</label>
            <input onChange={(e) => 
                {
                    if(typeof onChange === 'function') {
                        onChange(e)
                    }
                }
            } type={type} name={name} className="rounded-md border-2 max-w-xl lg:max-w-sm w-full text-black"/>
        </div>
    )
}


export type DropdownOptions = {
    name : string,
    value : string
}

export function Dropdown({ name, label, options } : { name : string, label : string, options : DropdownOptions[] }) {
    return(
        <div className="flex flex-col w-1/2 gap-2">
            <label htmlFor={name}>{label}</label>
            <select name={name} className="rounded-md border-2 max-w-sm w-full text-black">
                {options.map((option, index) => (
                    <option key={index} value={option.value}>{option.name}</option>
                ))}
                </select>
        </div>
    )
}