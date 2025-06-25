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
                <h1>{ name }</h1>
            </div>
        ) : ( <span></span> )
    )
}

export default Subject