export type DataOutput = {
    student_info : {
        first_name : string;
        last_name : string;
        section : string;
    };
    subject: string;
    written_works : {
        topic? : string;
        score : number;
        items : number;
    }[],
    performance_tasks : {
        topic? : string;
        score : number;
        items : number;
    }[],
    exams : {
        topic? : string;
        score : number;
        items : number;
    }[]
};