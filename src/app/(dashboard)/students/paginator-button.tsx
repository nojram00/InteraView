"use client";
import { useRouter } from "next/navigation";

export default function PaginatorButton({
    current_page, last_page
} : {
    current_page : number;
    last_page : number;
}){

    const router = useRouter();

    const nextPage = () => {
        if (current_page === last_page) return;

        router.push(`/students?page=${current_page + 1}`);
    }

    const prevPage = () => {
        if (current_page === 1) return;
        
        router.push(`/students?page=${current_page - 1}`);
    }

    return(
        <div className="flex justify-between p-3 mt-5">
            <button onClick={prevPage} disabled={current_page === 1} className="pagination-btn">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m18.75 4.5-7.5 7.5 7.5 7.5m-6-15L5.25 12l7.5 7.5" />
                </svg>
            </button>
            <span>Page {current_page} of {last_page}</span>
            <button onClick={nextPage} disabled={current_page === last_page} className="pagination-btn">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 hover:text-gray-200">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5" />
                </svg>
            </button>
        </div>
    )
}