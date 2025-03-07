import Wrapper from "@/components/wrapper";
import { fetchServer } from "@/utils/fetchServer";
import Link from "next/link";
import PaginatorButton from "./paginator-button";
import ViewButton from "./view-button";

interface StudentTableProps {
    current_page: number;
    last_page: number;
    data: {
        id : string;
        first_name: string;
        last_name: string;
        section: string;
    }[];
    total: number;
}


export default async function StudentTable({
    page = 1
} : { page : number }){
    const { data, status } = await fetchServer<StudentTableProps>(`${process.env.SERVER_URL}/students?page=${page}`);

    if(status !== 200)
    {
        return(
            <div>
                Opsss... Something went wrong!
            </div>
        )
    }

    if(data.data.length === 0){
        return(
            <div className="sm:hidden flex flex-row justify-center items-center w-full h-96">
                <span>You Have Reached the end of the page...</span>
            </div>
        )
    }

    return(
        <div>
            <div className="hidden md:block w-full">
                <table className="table">
                    <thead>
                        <tr className="table-header">
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Section</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.data.map((student, id) => (
                            <tr key={student.id} className={`table-row ${id % 2 === 0 ? 'bg-gray-100' : ''}`}>
                                <td>{student.first_name}</td>
                                <td>{student.last_name}</td>
                                <td>{student.section}</td>
                                <td><ViewButton id={student.id}/></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className="md:hidden grid grid-cols-1 p-3 mt-5 gap-3">
                {data.data.map((student, id) => (
                    <div key={student.id} className="flex gap-2 flex-col justify-between items-start p-2 bg-gray-400 rounded-md shadow-md">
                        <div>{student.first_name} {student.last_name}</div>
                        <div>{student.section}</div>
                        <div className="self-end">
                            <ViewButton id={student.id}/>
                        </div>
                    </div>
                ))}
            </div>

            <PaginatorButton current_page={data.current_page} last_page={data.last_page}/>
        </div>
    )
}