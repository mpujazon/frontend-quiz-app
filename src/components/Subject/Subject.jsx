import './Subject.scss'

const Subject = ({ name }) => {    
    return (
        name!==null? (
            <div className="logo-container">
                <img 
                    className={name.toLowerCase()}
                    src={`/images/icon-${name.toLowerCase()}.svg`} 
                    alt={`${name} logo`}
                />
                <p>{ name }</p>
            </div>
        ) : ( <span></span> )
    )
}

export default Subject