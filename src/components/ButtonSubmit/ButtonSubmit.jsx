import './ButtonSubmit.scss'

const ButtonSubmit = ({text='Submit Answer', isDisabled, onClick, showTooltip}) => {
    return (
        <>
            <button 
                className={isDisabled? 'button-submit disabled' : 'button-submit'}
                onClick={onClick}
                >
                {text}
            </button>
            <p className={`tooltip ${showTooltip? '' : 'hidden'}`}><img className='error-icon' src="/public/images/icon-error.svg" alt="Error icon" />Please select an answer</p>
        </>
    )
}
export default ButtonSubmit;