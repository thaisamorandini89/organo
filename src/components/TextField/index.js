import './TextField.css'

const TextField = (props) => {

    const update = (e) => {
        props.write(e.target.value)
    }

    return (
        <div className="text-field">
            <label>
                {props.label}
            </label>
            <input required={props.required} placeholder={props.placeholder} 
                value={props.value} onChange={update} />
        </div>
    )
}

export default TextField