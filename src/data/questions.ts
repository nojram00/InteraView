import { Quiz } from "@/types/questions";
import * as Questions from "@/data/question-list";


export async function getQuizData(type : string) : Promise<Quiz | null>
{

    const getData = (type : string) => {
        switch(type)
        {
            case "filipino":
                return Questions.FilipinoQuestions;
            case "english":
                return Questions.EnglishQuestions;
            case "math":
                return Questions.MathQuestions;
            case "values-educ":
                return Questions.ValuesEducQuestions;
            case "science":
                return Questions.ScienceQuestions;
            case "ap":
                return Questions.AralingPanlipunanQuestions;
            case "mapeh":
                return Questions.MapehQuestions;
            case "tle":
                return Questions.TleQuestions;
            case "computer":
                return Questions.ComputerQuestions;
            default:
                return null;
        }
    }

    return new Promise((resolve) => {
        resolve(getData(type));
    });
}