import React from 'react'
import WorkExpForm from './formComponents/WorkExpForm'

class WorkExpCtn extends React.Component{
    constructor() {
        super();
        this.state = {
            forms: 1
        }
    }

    addWorkFrom = () => {
        this.setState(prevState => {
            return {forms: prevState.forms + 1}
        })
        console.log('hmmm')
    }

    render() {
        const workForms = [];
        for(let i = 0; i < this.state.forms; i++) {
            console.log(i);
            workForms.push(<WorkExpForm />);
        }
        console.log(workForms);
        return (
        <div className="experience-ctn">
            <h3>Experience</h3>
            <div>{workForms}</div>
            <div>
                <div 
                    id="add-exp-btn"
                    onClick={this.addWorkFrom}
                >+ add</div>
            </div>
        </div>
        )
    }
}

export default WorkExpCtn