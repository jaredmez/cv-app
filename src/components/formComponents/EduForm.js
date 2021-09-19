import React from 'react'

function EduForm() {
    return (
        <form id="edu-form">
            <input 
                type="text" 
                name="school" 
                placeholder="School"
            /><br/>
            <input 
                type="text" 
                name="major" 
                placeholder="Major"
            /><br/>
            <input 
                type="tel" 
                name="year" 
                placeholder="Year"
            /><br/>
            <button>Save</button>
        </form>
    )
}

export default EduForm