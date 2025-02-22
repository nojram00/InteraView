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
            <MapData id={id}/>
        </div>
    )
}