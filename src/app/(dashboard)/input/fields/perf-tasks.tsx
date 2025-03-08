
import { TextInput } from '@/components/form-inputs'
import React, { Fragment, useEffect, useState } from 'react'

export default function PerfTaskField() {

    const [perfData, setPerfData] = useState({
        topic: '',
        score: 0,
        items: 0
    })

    const mainInputRef = React.useRef<HTMLInputElement>(null);
    
      useEffect(() => {
        if (mainInputRef.current) {
            mainInputRef.current.value = JSON.stringify(perfData);
        }
      }, [perfData]);

    const handleChange = (e : React.ChangeEvent<HTMLInputElement>) => {
        setPerfData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }  

  return (
    <Fragment>
        <div className='border border-gray-500'></div>
        <input ref={mainInputRef} type='hidden' name='perf-data' value={JSON.stringify(perfData)}/>
        <TextInput onChange={handleChange} name="topic" label="Topic (Optional)" type="text"/>
        <div className="flex flex-row gap-4 w-full">
            <TextInput onChange={handleChange} name="score" label="Score" type="number"/>
            <TextInput onChange={handleChange} name="items" label="No. of items" type="number"/>
        </div>
    </Fragment>
  )
}
