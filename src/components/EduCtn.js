import React from 'react'
import EduForm from './formComponents/EduForm'

class EduCtn extends React.Component{
    render() {
        return(
            <div className="edu-ctn">
            <h3>Education:</h3>
            <EduForm />
            </div>
        )
    }
}

export default EduCtn