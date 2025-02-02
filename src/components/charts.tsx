"use client";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement } from 'chart.js';
import * as Elements from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement);
export type ChartData = {
    labels : string[];
    datasets : {
        label? : string;
        data : number[]; 
        borderWidth? : number;
        borderColor? : string[];
        backgroundColor? : string[];
    }[];
}

export type ChartOptions = {
    scales : {
        y : {
            beginAtZero : boolean;
        }
    }
}

export default Elements;

export function DataBarGraph({ data, options } : { data : ChartData, options? : ChartOptions })
{
    return (
        <div className='p-4 bg-gray-100 m-3 rounded-md shadow-md'>
            <Elements.Bar data={data} options={options}/>
        </div>
    )
}

export function DataPieGraph({ data, options } : { data : ChartData, options? : ChartOptions })
{
    return (
        <div className='p-4 bg-gray-100 m-3 rounded-md shadow-md'>
            <Elements.Pie data={data} options={options}/>
        </div>
    )
}   