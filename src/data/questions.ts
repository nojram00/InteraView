import { Quiz } from "@/types/questions";

const EnglishQuestions : Quiz = {
    subject : "English",
    topic : "Grammar",
    questions : [
        {
            question : "What is the plural form of 'child'?",
            answers : [
                {
                    answer : "childs",
                    isCorrectAnswer : false
                },
                {
                    answer : "children",
                    isCorrectAnswer : true
                },
                {
                    answer : "child",
                    isCorrectAnswer : false
                },
                {
                    answer : "childen",
                    isCorrectAnswer : false
                }
            ]
        },
        {
            question : "What is the plural form of 'goose'?",
            answers : [
                {
                    answer : "gooses",
                    isCorrectAnswer : false
                },
                {
                    answer : "geese",
                    isCorrectAnswer : true
                },
                {
                    answer : "goose",
                    isCorrectAnswer : false
                },
                {
                    answer : "geeses",
                    isCorrectAnswer : false
                }
            ]
        },
        {
            question: "What is the past tense of 'run'?",
            answers: [
                {
                    answer: "ran",
                    isCorrectAnswer: true
                },
                {
                    answer: "runned",
                    isCorrectAnswer: false
                },
                {
                    answer: "running",
                    isCorrectAnswer: false
                },
                {
                    answer: "runs",
                    isCorrectAnswer: false
                }
            ]
        },
        {
            question: "What is the comparative form of 'good'?",
            answers: [
                {
                    answer: "gooder",
                    isCorrectAnswer: false
                },
                {
                    answer: "better",
                    isCorrectAnswer: true
                },
                {
                    answer: "goodest",
                    isCorrectAnswer: false
                },
                {
                    answer: "more good",
                    isCorrectAnswer: false
                }
            ]
        }
    ]
};

const MathQuestions : Quiz = {
    subject : "Math",
    topic : "Algebra",
    questions : [
        {
            question: "What is the value of x if 2x + 3 = 7?",
            answers: [
                {
                    answer: "x = 1",
                    isCorrectAnswer: false
                },
                {
                    answer: "x = 2",
                    isCorrectAnswer: true
                },
                {
                    answer: "x = 3",
                    isCorrectAnswer: false
                },
                {
                    answer: "x = 4",
                    isCorrectAnswer: false
                }
            ]
        },
        {
            question: "Solve for y: 3y - 9 = 0",
            answers: [
                {
                    answer: "y = 3",
                    isCorrectAnswer: true
                },
                {
                    answer: "y = -3",
                    isCorrectAnswer: false
                },
                {
                    answer: "y = 0",
                    isCorrectAnswer: false
                },
                {
                    answer: "y = 9",
                    isCorrectAnswer: false
                }
            ]
        },
        {
            question: "What is the solution to the equation 5x = 20?",
            answers: [
                {
                    answer: "x = 2",
                    isCorrectAnswer: false
                },
                {
                    answer: "x = 4",
                    isCorrectAnswer: true
                },
                {
                    answer: "x = 5",
                    isCorrectAnswer: false
                },
                {
                    answer: "x = 10",
                    isCorrectAnswer: false
                }
            ]
        },
        {
            question: "If x + 2 = 5, what is the value of x?",
            answers: [
                {
                    answer: "x = 1",
                    isCorrectAnswer: false
                },
                {
                    answer: "x = 2",
                    isCorrectAnswer: false
                },
                {
                    answer: "x = 3",
                    isCorrectAnswer: true
                },
                {
                    answer: "x = 4",
                    isCorrectAnswer: false
                }
            ]
        }
    ]
}


export async function getQuizData(type : string) : Promise<Quiz | null>
{

    const getData = (type : string) => {
        switch(type)
        {
            case "Math":
                return MathQuestions;
            case "English":
                return EnglishQuestions;
            default:
                return null;
        }
    }

    return new Promise((resolve) => {
        resolve(getData(type));
    });
}