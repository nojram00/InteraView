
export default function getAverage(values : Array<number>) : number
{
    let sum = 0;

    for(let i = 0; i < values.length; i++)
    {
        sum += values[i];
    }

    const average = sum / values.length;
    return Math.round(average * 100) / 100;
}