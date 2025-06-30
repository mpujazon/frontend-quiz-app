import './QuestionOption.scss';

const QuestionOption = ({letter, text, isSelected, showCorrectIcon, showWrongIcon, onClick}) => {
    return (
        <div className={`option-card ${isSelected? 'selected' : ''} ${showCorrectIcon? 'correct' : ''} ${showWrongIcon? 'wrong' : ''}`}
            onClick={onClick}>
            <p className='option-letter'>{letter}</p>
            <p className='option-text'>{text}</p>
        </div>
    )
}

export default QuestionOption