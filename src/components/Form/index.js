import { useState } from 'react'
import TextField from '../TextField'
import DropDown from '../DropDown'
import Button from '../Button' 
import './Form.css'

const Form = (props) => {

    const [firstName, setFirstName] = useState('')
    const [office, setOffice] = useState('')
    const [image, setImage] = useState('')
    const [team, setTeam] = useState('')
    
    const save = (e) => {
        e.preventDefault()
        props.registerEmployee({
            firstName,
            office,
            image,
            team
        })
        setFirstName('')
        setOffice('')
        setImage('')
        setTeam('')
    }

    return (
        <section className='form-container'>
            <form onSubmit={save}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <TextField 
                    required={true} 
                    label="Nome" 
                    placeholder="Digite seu nome" 
                    value={firstName}
                    write={value => setFirstName(value)}/>
                <TextField 
                    required={true} 
                    label="Cargo" 
                    placeholder="Digite seu cargo" 
                    value={office}
                    data-mask=""
                    write={value => setOffice(value)}/>
                <TextField 
                    label="Imagem" 
                    placeholder="Digite o endereço da imagem" 
                    value={image}
                    data-mask=""
                    write={value => setImage(value)}/>
                <DropDown 
                    required={true} 
                    label="Time" 
                    itens={props.squads}
                    value={team}
                    write={value => setTeam(value)}/>
                <Button>
                    Criar Card
                </Button>
            </form>
        </section>
    )
}

export default Form