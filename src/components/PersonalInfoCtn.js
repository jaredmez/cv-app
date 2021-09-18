import React from 'react'
import PersonalInfoForm from './formComponents/PersonalInfoForm'

class PersonalInfoCtn extends React.Component{
    render() {
        return (
            <div className="personal-info-ctn">
                <h2>Personal Info:</h2>
                <PersonalInfoForm />
            </div>
        )
    }
}

export default PersonalInfoCtn