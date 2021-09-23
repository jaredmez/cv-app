import React, {useState} from 'react'

function WorkExpForm() {
    const [state, setState] = useState({
        position: '', 
        company: '', 
        city: '',
        from: '',
        to: '',
        isEdit: true
    })

    const handleChange = (e) => {
        setState({...state, [e.target.name]: e.target.value})       
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setState({...state, isEdit: !state.isEdit})
    }

    if(state.isEdit){
        return (
            <form id="experience-form" onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    name="position" 
                    placeholder="Position"
                    value={state.position}
                    onChange={handleChange}
                /><br/>
                <input 
                    type="text" 
                    name="company" 
                    placeholder="Company"
                    value={state.company}
                    onChange={handleChange}
                /><br/>
                <input 
                    type="text" 
                    name="city" 
                    placeholder="City"
                    value={state.city}
                    onChange={handleChange}
                /><br/>
                <input 
                    type="text" 
                    name="from" 
                    placeholder="From"
                    value={state.from}
                    onChange={handleChange}
                /><br/>
                <input 
                    type="text" 
                    name="to" 
                    placeholder="To"
                    value={state.to}
                    onChange={handleChange}
                /><br/>
                <button>Save</button>
            </form>
        )
    } else {
        return (
            <div id="workExp-input">
                <p><span>Position:</span>  {state.position}</p>
                <p><span>Company:</span>  {state.company}</p>
                <p><span>City:</span>  {state.city}</p>
                <p><span>From:</span>  {state.from}</p>
                <p><span>To:</span>  {state.to}</p>
                <button className="edit-btn" onClick={handleSubmit}>edit</button>
            </div>
        )
    }     
}

export default WorkExpForm