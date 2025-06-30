import './Questions.scss';

import { data, Link, useNavigate } from 'react-router-dom';

import Subject from '/src/components/Subject/Subject';
import ThemeToggle from '/src/components/ThemeToggle/ThemeToggle';
import Card from '/src/components/Card/Card';
import jsonData from '/src/data.json';
import QuestionOption from '../../components/QuestionOption/QuestionOption';
import { useRef, useState } from 'react';
import ProgressBar from '../../components/ProgressBar/ProgressBar';
import ButtonSubmit from '../../components/ButtonSubmit/ButtonSubmit';

function Questions({subject}) {
    const [questionIndex, setQuestionIndex] = useState(0);
    const [selectedOption, setSelectedOption] = useState(null);
    const [isAnswered, setisAnswered] = useState(false);
    const [textButton, setTextButton] = useState('Submit Answer');
    const [wrongSubmit, setWrongSubmit] = useState(false);

    const score = useRef(0);
    const nav = useNavigate();

    const subjectQuizz = jsonData.quizzes.find(object => object.title.toLowerCase() === subject.toLowerCase());
    const questions = subjectQuizz.questions;
    
    const handleOptionClick = (text) => {
        setSelectedOption(text);        
    }

    const handleSubmitClick = () => {
        if(!isAnswered && selectedOption){
            handleAnswer();
        }else if(isAnswered){
            showNextQuestion();
        }else{
            setWrongSubmit(true);
        }
    }

    const handleAnswer = () => {
        setisAnswered(true);
        const correctAnswer = questions[questionIndex].answer;
        if (correctAnswer === selectedOption){
            score.current = score.current+1;
        } 
        if(questionIndex === questions.length-1){
            setTextButton('View Score')
        }else{
            setTextButton('Next Question')
        }
    }

    const showNextQuestion = () => {
        setSelectedOption(null);
        setWrongSubmit(false);
        if(questionIndex === questions.length-1){
            nav('/score', {
                state: { 
                    subject: subject,
                    score: score.current,
                    questions: questions.length
                }
            })
        }

        setQuestionIndex(questionIndex+1);
        setTextButton('Submit Answer')
        setisAnswered(false);
    }

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
                    <ProgressBar percentage={(questionIndex+1)/questions.length*100} className='progress-bar'/>
                </div>
                <div className='options-submit'>
                    <div className='options'>
                        {['A', 'B', 'C', 'D'].map((letter, index) => (
                            <QuestionOption
                                key={letter}
                                letter={letter}
                                text={questions[questionIndex].options[index]}
                                isSelected={selectedOption === questions[questionIndex].options[index]}
                                showCorrectIcon={isAnswered && questions[questionIndex].options[index] === questions[questionIndex].answer}
                                showWrongIcon={isAnswered && questions[questionIndex].options[index] !== questions[questionIndex].answer && selectedOption===questions[questionIndex].options[index]}
                                onClick={() => !isAnswered? handleOptionClick(questions[questionIndex].options[index]) : ''}
                            />
                        ))}
                    </div>
                    <ButtonSubmit 
                        isDisabled={!selectedOption}
                        onClick={handleSubmitClick}
                        text={ textButton }
                        showTooltip= { !selectedOption &&  wrongSubmit}
                    />
                </div>
            </main>
        </>
    )
}
export default Questions