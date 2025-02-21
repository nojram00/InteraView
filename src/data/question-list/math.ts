import { Quiz } from "@/types/questions";

const MathQuestions : Quiz = {
    "subject": "Mathematics",
    "questions": [
        {
            "question": "Find the Universal set if there's two sets, M and N. Set M contains the letters in the word 'examples' and set N contains the even numbers greater than four but less than eight.",
            "answers": [
                {"answer": "{e,x,a,m,p,l,e,s,7}", "isCorrectAnswer": false},
                {"answer": "{e,x,a,m,p,l,e,s,6}", "isCorrectAnswer": true},
                {"answer": "{e,x,a,m,p,l,s,6}", "isCorrectAnswer": false},
                {"answer": "{e,x,a,m,p,l,s,7}", "isCorrectAnswer": false}
            ]
        },
        {
            "question": "A recipe for making bread requires 3/4 cup of sugar for every 2/3 cup of flour. If you want to make 5 times the original recipe, how much sugar will you need?",
            "answers": [
                {"answer": "15/8 cups", "isCorrectAnswer": true},
                {"answer": "30/8 cups", "isCorrectAnswer": false},
                {"answer": "45/8 cups", "isCorrectAnswer": false},
                {"answer": "15/4 cups", "isCorrectAnswer": false}
            ]
        },
        {
            "question": "Which rule of integers explains why the sum of a positive number and a negative number can be positive, negative, or zero?",
            "answers": [
                {"answer": "Rule #2", "isCorrectAnswer": false},
                {"answer": "Rule #1", "isCorrectAnswer": false},
                {"answer": "Rule #3", "isCorrectAnswer": true},
                {"answer": "Rule #4", "isCorrectAnswer": false}
            ]
        },
        {
            "question": "These are the numbers that cannot be written in fraction form. These include non-repeating decimals.",
            "answers": [
                {"answer": "Irrational numbers", "isCorrectAnswer": true},
                {"answer": "Rational numbers", "isCorrectAnswer": false},
                {"answer": "Integers", "isCorrectAnswer": false},
                {"answer": "Real numbers", "isCorrectAnswer": false}
            ]
        },
        {
            "question": "Which is an example of a polynomial?",
            "answers": [
                {"answer": "3x^2 + 2x - 5", "isCorrectAnswer": true},
                {"answer": "4/x + x^3", "isCorrectAnswer": false},
                {"answer": "x + 2x - 7", "isCorrectAnswer": false},
                {"answer": "5x^-3 + 3x - 15", "isCorrectAnswer": false}
            ]
        },
        {
            "question": "Which is an example of Power of a Product in the Law of Exponents?",
            "answers": [
                {"answer": "a^0 = 1", "isCorrectAnswer": false},
                {"answer": "(ab)^m = a^m * b^m", "isCorrectAnswer": true},
                {"answer": "(a/b)^m = a^m / b^m", "isCorrectAnswer": false},
                {"answer": "a^1 = a", "isCorrectAnswer": false}
            ]
        },
        {
            "question": "Complementary angles are two angles whose measures have a sum of 90°. If angles 5 and 6 are complementary and angle 5 measures 35°, what is the measure of angle 6?",
            "answers": [
                {"answer": "45°", "isCorrectAnswer": false},
                {"answer": "55°", "isCorrectAnswer": true},
                {"answer": "65°", "isCorrectAnswer": false},
                {"answer": "75°", "isCorrectAnswer": false}
            ]
        },
        {
            "question": "Which of the following shapes is NOT suitable for your playground design, considering polygons must have straight-line segments?",
            "answers": [
                {"answer": "Triangle", "isCorrectAnswer": false},
                {"answer": "Rectangle", "isCorrectAnswer": false},
                {"answer": "Circle", "isCorrectAnswer": true},
                {"answer": "Pentagon", "isCorrectAnswer": false}
            ]
        },
        {
            "question": "Which of the following best defines an inscribed angle?",
            "answers": [
                {"answer": "An angle whose vertex is at the center of the circle and whose sides are radii.", "isCorrectAnswer": false},
                {"answer": "An angle whose vertex is on the circle and whose sides are chords of the circle.", "isCorrectAnswer": true},
                {"answer": "An angle formed by two tangents to a circle.", "isCorrectAnswer": false},
                {"answer": "An angle whose sides are secant lines that intersect outside the circle.", "isCorrectAnswer": false}
            ]
        },
        {
            "question": "The test scores of five grade 7 students are 85, 90, 85, 95, and 100. Which of the following statements is true?",
            "answers": [
                {"answer": "The mean (average) score is 95.", "isCorrectAnswer": false},
                {"answer": "The median score is 90.", "isCorrectAnswer": true},
                {"answer": "The mode of the scores is 95.", "isCorrectAnswer": false},
                {"answer": "There is no mode in this data set.", "isCorrectAnswer": false}
            ]
        }
    ]
}


export default MathQuestions;