export type DataOutput = {
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