import Collaborator from '../Collaborator'
import './Team.css'

const Team = (props) => {
    return (
        (props.employees.length > 0) && <section className='team' style={{ backgroundColor: props.secondaryColor }}>
            <h3 style={{ borderColor: props.primaryColor }} >{props.nameTeam}</h3>
            <div className='collaborators'>
            {props.employees.map( employee => 
            <Collaborator colorBottom={props.primaryColor}  key={employee.firstName}
                firstName={employee.firstName} 
                office={employee.office} 
                image={employee.image}/>)}
            </div>
        </section>
    )
}

export default Team