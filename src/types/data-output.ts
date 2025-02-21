export type DataOutput = {
    student_id : string;
    subject: string;
    written_works : {
        topic? : string;
        score : number;
        items : number;
    },
    performance_tasks : {
        topic? : string;
        score : number;
        items : number;
    },
    exams : {
        topic? : string;
        score : number;
        items : number;
    }
};