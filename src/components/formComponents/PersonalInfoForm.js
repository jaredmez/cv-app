import React from 'react'

class PersonalInfoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            name: "",
            email: "",
            number: "",
            isEdit: true
        };
    }

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value})       
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({isEdit: !this.state.isEdit})
    }

    render() {
        if (this.state.isEdit) {
            console.log('yolo');
            return (
                <form id="personal-form" onSubmit={this.handleSubmit}>
                    <input 
                        type="text" 
                        name="name" 
                        placeholder="Name"
                        value={this.state.name}
                        onChange={this.handleChange}
                    /><br/>
                    <input 
                        type="text" 
                        name="email" 
                        placeholder="Email"
                        value={this.state.email}
                        onChange={this.handleChange}
                    /><br/>
                    <input 
                        type="text" 
                        name="number" 
                        placeholder="Number"
                        value={this.state.number}
                        onChange={this.handleChange} 
                    /><br/>
                    <button>Save</button>
                </form>
            )
        } else {
            return (
                <div id="personal-input">
                    <p><span>Name:</span>  {this.state.name}</p>
                    <p><span>Email:</span>  {this.state.email}</p>
                    <p><span>Number:</span>  {this.state.number}</p>
                    <button className="edit-btn" onClick={this.handleSubmit}>edit</button>
                </div>
            )
        }




    }

}

export default PersonalInfoForm