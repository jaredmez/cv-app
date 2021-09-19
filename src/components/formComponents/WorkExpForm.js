import React from 'react'

function WorkExpForm() {
    return (
        <form id="experience-form">
            <input 
                type="text" 
                name="position" 
                placeholder="Position"
            /><br/>
            <input 
                type="text" 
                name="company" 
                placeholder="Company"
            /><br/>
            <input 
                type="text" 
                name="city" 
                placeholder="City"
            /><br/>
            <input 
                type="text" 
                name="from" 
                placeholder="From"
            /><br/>
            <input 
                type="text" 
                name="city" 
                placeholder="To"
            /><br/>
            <button>Save</button>
        </form>
    )
}

export default WorkExpForm