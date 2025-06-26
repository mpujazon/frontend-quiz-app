import './QuestionOption.scss';

const QuestionOption = ({letter, text}) => {
    return (
        <div className='option-card'>
            <p className='option-letter'>{letter}</p>
            <p className='option-text'>{text}</p>
        </div>
    )
}

export default QuestionOption