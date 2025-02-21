"use client";
import { Quiz } from '@/types/questions';
import { useState, useRef } from 'react';
import { saveFinalScore } from '@/actions/dummy-actions';
import Link from 'next/link';

export function GameCanvas({ quiz } : { quiz : Quiz}) {

    const [quizIndex, setQuizIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [isCorrectAnswer, setIsCorrectAnswer] = useState<boolean | null>(null);
    const successDialog = useRef<HTMLDialogElement>(null);

    const progressQuiz = (correctAnswer : boolean) => {
        if (correctAnswer) {
            setScore(score + 1);
        }
        setIsCorrectAnswer(correctAnswer);

        setTimeout(() => {
            if (quizIndex === quiz.questions.length - 1) {
                console.log('end of quiz');
                const awaitable = saveFinalScore(score);
                awaitable.then(() => {
                    successDialog.current?.showModal();
                });
                // successDialog.current?.showModal();
            } else {
                setQuizIndex(quizIndex + 1);
            }
            setIsCorrectAnswer(null);
        }, 1000);
    }

    if(quiz.questions.length === 0) {
        return <h1 className='text-white'>No questions found</h1>
    }

    return (
        <div className='flex flex-col lg:items-center lg:justify-center'>
            <div className='lg:max-w-2xl mx-auto lg:bg-gray-300 p-10 lg:shadow-md lg:rounded-md'>
                <h1 className='lg:text-2xl py-5 font-bold text-center text-white lg:text-gray-500'>{quiz.questions[quizIndex].question}</h1>
                <div className='w-full flex flex-col lg:items-center'>
                    <ul className='grid lg:grid-cols-2 grid-cols-1 gap-2'>
                        { quiz.questions[quizIndex].answers.map((answer, index) => (
                            <li key={index}>
                                <button
                                    className={`bg-gray-500 text-white max-w-sm p-2 rounded-md w-full hover:bg-gray-200 ${isCorrectAnswer !== null ? answer.isCorrectAnswer ? 'bg-green-500' : 'bg-red-500' : ''}`}
                                    onClick={() => progressQuiz(answer.isCorrectAnswer)}>{answer.answer}</button>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <dialog ref={successDialog} className='w-1/2 rounded-md shadow-md p-10'>
                <h1>Success</h1>
                <p>You have scored {score} out of {quiz.questions.length} Questions!</p>
                <div className='my-4'>
                    <Link href="/dashboard" className='bg-green-300 p-2  rounded-md'>Close</Link>
                </div>
            </dialog>
        </div>
    )
}   