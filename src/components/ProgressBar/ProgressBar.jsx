import './ProgressBar.scss'

const ProgressBar = ({percentage=0}) => {
    return (
        <div className='progress-bar-structure'>
            <div className='progress-bar-percentage'
                style={{ width: `${percentage}%` }}
            >
            </div>
        </div>
    )
}
export default ProgressBar