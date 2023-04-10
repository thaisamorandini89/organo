import { useState } from 'react';
import Banner from './components/Banner';
import Form from './components/Form';
import Team from './components/Team'

function App() {

  const squads = [
    {
      nameSquad: 'Programação',
      primaryColor: '#57C278',
      secondaryColor: '#D9F7E9'
    },
    {
      nameSquad: 'Front-End',
      primaryColor: '#82CFFA',
      secondaryColor: '#E8F8FF'
    },
    {
      nameSquad: 'Data Science',
      primaryColor: '#A6D157',
      secondaryColor: '#F0F8E2'
    },
    {
      nameSquad: 'Devops',
      primaryColor: '#E06869',
      secondaryColor: '#FDE7E8'
    },
    {
      nameSquad: 'UX e Design',
      primaryColor: '#DB6EBF',
      secondaryColor: '#FAE9F5'
    },
    {
      nameSquad: 'Mobile',
      primaryColor: '#FFBA05',
      secondaryColor: '#FFF5D9'
    },
    {
      nameSquad: 'Inovação e Gestão',
      primaryColor: '#FF8A29',
      secondaryColor: '#FFEEDF'
    }
  ]

  const [employees, setEmployees] = useState([])

  const newEmployee = (employee) => {
    debugger
    setEmployees([...employees, employee])
  }

  return (
    <div className="App">
      <Banner />
      <Form squads={squads.map(squad => squad.nameSquad)} registerEmployee={employee => newEmployee(employee)}/>
      
      {squads.map(squad => <Team 
        key={squad.nameSquad} 
        nameTeam={squad.nameSquad}
        primaryColor={squad.primaryColor} 
        secondaryColor={squad.secondaryColor}
        employees={employees.filter(employee => employee.team === squad.nameSquad)}
      />)}
      
    </div>
  );
}

export default App;
