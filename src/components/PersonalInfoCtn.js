import React from 'react'
import PersonalInfoForm from './formComponents/PersonalInfoForm'

class PersonalInfoCtn extends React.Component{
    render() {
        return (
            <div className="personal-info-ctn">
                <h3>Personal Info:</h3>
                <PersonalInfoForm />
            </div>
        )
    }
}

export default PersonalInfoCtn