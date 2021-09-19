import React from 'react'
import WorkExpForm from './formComponents/WorkExpForm'

class WorkExpCtn extends React.Component{
    render() {
        return (
        <div className="experience-ctn">
            <h3>Experience</h3>
            <WorkExpForm />
        </div>
        )
    }
}

export default WorkExpCtn