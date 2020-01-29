import React, { Component } from 'react';
import {Modal, Form, Button} from 'react-bootstrap';
import API from '../../utils/API';

class SalesForm extends Component {
	state = {
		firstName: '',
		lastName: '',
		username: '',
		email: '',
		password: ''
	};

	// componentDidMount() {}

	handleInputChange = event => {
		const { name, value } = event.target;
		this.setState({
			[name]: value
		});
	};

	signUpUser = event => {
		event.preventDefault();

		API.signUpSales({
			firstName: this.state.firstName,
			lastName: this.state.lastName,
			username: this.state.username,
			email: this.state.email,
			password: this.state.password
		})
		.then(res => {
			console.log(res);
			API.loginSales({
				username: this.state.username,
				password: this.state.password
			}).then(res => {
				API.userInfo();
				API.addUser();
				window.location.href = '/portal/sales';
			}).catch(err => console.log(err));
		})
		.catch(err => {
			console.log(err);
		});
	};

	render() {
		return (
			<Modal.Body>
				<h2>Sales Form</h2>
				<Form>

					<Form.Group id="salesFirstName">
						<Form.Label>First Name</Form.Label>
						<Form.Control 
							type="text" 
							placeholder="First Name" 
							name='firstName'
							value={this.state.firstName} 
							onChange={this.handleInputChange} />
					</Form.Group>

					<Form.Group id="salesLastName">
						<Form.Label>Last Name</Form.Label>
						<Form.Control 
							type="text" 
							placeholder="Last Name"
							name='lastName'
							value={this.state.lastName}
							onChange={this.handleInputChange} />
					</Form.Group>

					<Form.Group id="salesUsername">
						<Form.Label>User Name</Form.Label>
						<Form.Control 
							type="text" 
							placeholder="Username"
							name='username'
							value={this.state.username}
							onChange={this.handleInputChange} />
					</Form.Group>

					<Form.Group id="salesEmail">
						<Form.Label>Email address</Form.Label>
						<Form.Control 
							type="email" 
							placeholder="Enter email"
							name='email'
							value={this.state.email}
							onChange={this.handleInputChange} />
						<Form.Text className="text-muted">
						We'll never share your email with anyone else.
						</Form.Text>
					</Form.Group>

					<Form.Group id="salesPassword">
						<Form.Label>Password</Form.Label>
						<Form.Control 
							type="password" 
							placeholder="Password"
							name='password'
							value={this.state.password}
							onChange={this.handleInputChange} />
					</Form.Group>

					<Button onClick={this.signUpUser} variant="primary" type="submit" id="salesSubmit">
						Submit
					</Button>
				</Form>
			</Modal.Body>
		);
	}
}

export default SalesForm;