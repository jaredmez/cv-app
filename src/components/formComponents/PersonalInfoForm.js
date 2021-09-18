import React from 'react'

function PersonalInfoForm() {
    return (
        <form id="personal-form">
            <input 
                type="text" 
                name="name" 
                placeholder="Name"
            /><br/>
            <input 
                type="text" 
                name="email" 
                placeholder="Email"
            /><br/>
            <input 
                type="tel" 
                name="number" 
                placeholder="Number"
            /><br/>
            <button>Save</button>
        </form>
    )
}

export default PersonalInfoForm