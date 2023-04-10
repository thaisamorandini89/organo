import './Collaborator.css'

const Collaborator = ({ firstName, image, office, colorBottom }) => {
    return(
        <div className='collaborator'>
            <div className='header' style={{ backgroundColor: colorBottom }}>
                <img src={image} alt={firstName} />
            </div>
            <div className='footer'>
                <h4>{firstName}</h4>
                <h5>{office}</h5>
            </div>
        </div>
    )
}

export default Collaborator