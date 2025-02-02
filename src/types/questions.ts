export type Question = {
    question : string;
    answers : Answer[];
}

export type Answer = {
    answer : string;
    isCorrectAnswer : boolean;
    isAnswerCorrect? : boolean;
}

export type Quiz = {
    subject : string;
    topic? : string;
    questions : Question[];
}