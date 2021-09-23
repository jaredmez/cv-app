import React, {useState} from 'react'
import WorkExpForm from './formComponents/WorkExpForm'

function WorkExpCtn(){
    const [formCount, setForm] = useState(1);

    const addWorkForm = () => {
        setForm(formCount + 1);
    }
    const delWorkForm = () => {
        if (formCount === 1) {
            return;
        }
        setForm(formCount - 1);
    }

    let workForms = [];
    for(let i = 0; i < formCount; i++) {
        console.log(i);
        workForms.push(<WorkExpForm />);
    }
    return (
    <div className="experience-ctn">
        <h3>Experience</h3>
        <div>{workForms}</div>
        <div className="exp-btns">
            <div 
                id="add-exp-btn"
                onClick={addWorkForm}
            >+ add</div>
            <div
                id="del-exp-btn"
                onClick={delWorkForm}
            >-delete
            </div>
        </div>
    </div>
    )
}

export default WorkExpCtn