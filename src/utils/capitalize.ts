export default function capitalize(text:string)
{
    if(text.length === 0) return text;
    
    let textArray = text.split('');

    textArray[0] = textArray[0].toUpperCase();

    return textArray.join('')
}