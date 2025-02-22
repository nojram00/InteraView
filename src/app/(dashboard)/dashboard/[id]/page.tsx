import MapData from "./data-shit";

export default async function({
    params
} : {
    params : Promise<{
        id : string
    }>
})
{
    const { id } = await params;
    return(
        <div>
            <h1>Student ID: {id}</h1>

            <MapData id={id}/>
        </div>
    )
}