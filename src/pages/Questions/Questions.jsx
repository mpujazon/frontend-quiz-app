import './Questions.scss';

import { data, Link } from 'react-router-dom';

import Subject from '/src/components/Subject/Subject';
import ThemeToggle from '/src/components/ThemeToggle/ThemeToggle';
import Card from '/src/components/Card/Card';
import jsonData from '/src/data.json';
import QuestionOption from '../../components/QuestionOption/QuestionOption';
import { useState } from 'react';

function Questions({subject}) {
    const [questionIndex, setquestionIndex] = useState(4);
    const [score, setScore] = useState(0);

    const subjectQuizz = jsonData.quizzes.find(object => object.title.toLowerCase() === subject.toLowerCase());
    const questions = subjectQuizz.questions;
    
    return (
        <>
            <header className="header">
                <Subject name={subject}></Subject>
                <ThemeToggle></ThemeToggle>
            </header>
            <main className='question-container'>
                <div className='quizz-info'>
                    <p className='progress-text'><em>Question {questionIndex + 1} of {questions.length}</em></p>
                    <p className='question'>{questions[questionIndex].question}</p>
                    <div className='progress-bar-structure'>
                        <div className='progress-bar-percentage'></div>
                    </div>
                </div>
                <div className='options-submit'>
                    <div className='options'>
                        <QuestionOption letter='A' text={questions[questionIndex].options[0]}/>
                        <QuestionOption letter='B' text={questions[questionIndex].options[1]}/>
                        <QuestionOption letter='C' text={questions[questionIndex].options[2]}/>
                        <QuestionOption letter='D' text={questions[questionIndex].options[3]}/>
                    </div>
                    <button>Submit Answer (NEW BUTTON COMPONENT)</button>
                </div>
            </main>
        </>
    )
}
export default Questions