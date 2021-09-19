import React from 'react'

class WorkExpForm extends React.Component {
    constructor() {
        super();
        this.state = {
            position: "",
            company: "",
            city: "",
            from: "",
            to: "",
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
        if(this.state.isEdit){
            return (
                <form id="experience-form" onSubmit={this.handleSubmit}>
                    <input 
                        type="text" 
                        name="position" 
                        placeholder="Position"
                        value={this.state.position}
                        onChange={this.handleChange}
                    /><br/>
                    <input 
                        type="text" 
                        name="company" 
                        placeholder="Company"
                        value={this.state.company}
                        onChange={this.handleChange}
                    /><br/>
                    <input 
                        type="text" 
                        name="city" 
                        placeholder="City"
                        value={this.state.city}
                        onChange={this.handleChange}
                    /><br/>
                    <input 
                        type="text" 
                        name="from" 
                        placeholder="From"
                        value={this.state.from}
                        onChange={this.handleChange}
                    /><br/>
                    <input 
                        type="text" 
                        name="to" 
                        placeholder="To"
                        value={this.state.to}
                        onChange={this.handleChange}
                    /><br/>
                    <button>Save</button>
                </form>
            )
        } else {
            return (
                <div id="workExp-input">
                <p><span>Position:</span>  {this.state.position}</p>
                <p><span>Company:</span>  {this.state.company}</p>
                <p><span>City:</span>  {this.state.city}</p>
                <p><span>From:</span>  {this.state.from}</p>
                <p><span>To:</span>  {this.state.to}</p>
                <button className="edit-btn" onClick={this.handleSubmit}>edit</button>
                </div>
            )
        }     
    }

}

export default WorkExpForm