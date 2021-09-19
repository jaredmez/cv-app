import React from 'react'

class EduForm extends React.Component {
    constructor() {
        super();
        this.state = {
            school: "",
            major: "",
            year: "",
            isEdit: true
        }
    }

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value})       
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({isEdit: !this.state.isEdit})
    }

    render() {
        if(this.state.isEdit) {
            return (
                <form id="edu-form" onSubmit={this.handleSubmit}>
                    <input 
                        type="text" 
                        name="school" 
                        placeholder="School"
                        value={this.state.school}
                        onChange={this.handleChange}
                    /><br/>
                    <input 
                        type="text" 
                        name="major" 
                        placeholder="Major"
                        value={this.state.major}
                        onChange={this.handleChange}
                    /><br/>
                    <input 
                        type="tel" 
                        name="year" 
                        placeholder="Year"
                        value={this.state.year}
                        onChange={this.handleChange}
                    /><br/>
                    <button>Save</button>
                </form>
            )
        } else {
            return (
                <div id="edu-input">
                    <p><span>School:</span>  {this.state.school}</p>
                    <p><span>Major:</span>  {this.state.major}</p>
                    <p><span>Year:</span>  {this.state.year}</p>
                    <button className="edit-btn" onClick={this.handleSubmit}>edit</button>
                </div>
            )
        }         
    }
}

export default EduForm