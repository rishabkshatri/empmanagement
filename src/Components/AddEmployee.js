import React, { Component } from 'react';
import axios from 'axios';//promise based http client
//used to send asynchronous requests

const customStyle = {
  width: '300px',
  margin: '0 auto'
}

class AddEmployee extends Component {
  constructor(props) {
    super(props);//USED TO INITIALIZE//****** */
    this.state = {//CHANGING OF DATA
      firstName: '',
      lastName: '',
      email: '',
      phone: ''
    }
  }//SET STATE SHOULD BE USED ONLY OUTSID ETH ECONSTRUCTOR

  // When value changes of the fields
  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  // To add new employee when user submits the form
  handleSubmit = (event) => {
    event.preventDefault();
    const { firstName, lastName, email, phone } = this.state;
    axios.post('http://localhost:4000/employees/addEmployee', {
      firstName: firstName,
      lastName: lastName,
      email: email,
      phone: phone,
    })
      .then((response) => {
        console.log(response);
        this.props.history.push('/');
        alert("New Employee Added");
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="container">
        <form style={customStyle} onSubmit={this.handleSubmit}>
          <label>
            First Name
            <input
              name="firstName"
              type="text"
              value={this.state.firstName}
              onChange={this.handleChange}
              className="form-control"
            />
          </label>
          <br />
          <label>
            Last Name
            <input
              name="lastName"
              type="text"
              value={this.state.lastName}
              onChange={this.handleChange}
              className="form-control"
            />
          </label>
          <br />
          <label>
            Email
            <input
              name="email"
              type="text"
              value={this.state.email}
              onChange={this.handleChange}
              className="form-control"
            />
          </label>
          <br />
          <label>
            Phone No
            <input
              name="phone"
              type="text"
              value={this.state.phone}
              onChange={this.handleChange}
              className="form-control"
            />
          </label>
          <br />
          <input
            type="submit"
            value="SUBMIT"
            className="btn btn-primary"
          />
        </form>
      </div>
    );
  }
}

export default AddEmployee;
