import React, {useState} from 'react'

function EduForm() {
    const [state, setState] = useState({school: '', major: '', year: '', isEdit: true});


    const handleChange = (e) => {
        setState({...state, [e.target.name]: e.target.value})       
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setState({...state, isEdit: !state.isEdit})
    }

    if(state.isEdit) {
        return (
            <form id="edu-form" onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    name="school" 
                    placeholder="School"
                    value={state.school}
                    onChange={handleChange}
                /><br/>
                <input 
                    type="text" 
                    name="major" 
                    placeholder="Major"
                    value={state.major}
                    onChange={handleChange}
                /><br/>
                <input 
                    type="tel" 
                    name="year" 
                    placeholder="Year"
                    value={state.year}
                    onChange={handleChange}
                /><br/>
                <button>Save</button>
            </form>
        )
    } else {
        return (
            <div id="edu-input">
                <p><span>School:</span>  {state.school}</p>
                <p><span>Major:</span>  {state.major}</p>
                <p><span>Year:</span>  {state.year}</p>
                <button className="edit-btn" onClick={handleSubmit}>edit</button>
            </div>
        )
    }         
}

export default EduForm