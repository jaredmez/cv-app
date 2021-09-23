import React, {useState} from 'react'

function PersonalInfoForm() {


    const [state, setState] = useState({name: "", email: "", number: ""});
    const [isEdit, setEdit] = useState(true);

    const handleChange = (e) => {
        setState({...state, [e.target.name]: e.target.value})       
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setEdit(!isEdit)
    }

    if (isEdit) {
        return (
            <form id="personal-form" onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    name="name" 
                    placeholder="Name"
                    value={state.name}
                    onChange={handleChange}
                /><br/>
                <input 
                    type="text" 
                    name="email" 
                    placeholder="Email"
                    value={state.email}
                    onChange={handleChange}
                /><br/>
                <input 
                    type="text" 
                    name="number" 
                    placeholder="Number"
                    value={state.number}
                    onChange={handleChange} 
                /><br/>
                <button>Save</button>
            </form>
        )
    } else {
        return (
            <div id="personal-input">
                <p><span>Name:</span>  {state.name}</p>
                <p><span>Email:</span>  {state.email}</p>
                <p><span>Number:</span>  {state.number}</p>
                <button className="edit-btn" onClick={handleSubmit}>edit</button>
            </div>
        )
    }

}

export default PersonalInfoForm