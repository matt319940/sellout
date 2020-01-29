// Test
import React, { Component } from 'react';
import {Modal, Form, Button} from 'react-bootstrap';
import API from '../../utils/API';

class AccountInfo extends Component {

    
    state = {
        id: '',
        firstName: '',
		lastName: '',
		userName: '',
		email: '',
		password: ''
	};
    

	componentDidMount() {
		API.userInfo().then(data => {
			this.setState({
                id: data.data.id,
				firstName: data.data.firstName,
				lastName: data.data.lastName,
				username: data.data.username,
				email: data.data.email
            });
        });
	};

	handleInputChange = event => {
		const { name, value } = event.target;
		this.setState({
			[name]: value
		});
	};

	updateUser = event => {
		event.preventDefault();
		API.updateSalesAccount({
            id: this.state.id,
			firstName: this.state.firstName,
			lastName: this.state.lastName,
			username: this.state.username,
			email: this.state.email,
			password: this.state.password
		})
		.then(res => {
			API.logOut()
			.then(API.loginSales({
				username: this.state.username,
				password: this.state.password
			}).then(window.location.reload(false)));
            // window.location.reload(false);
            // console.log(res);
		})
		.catch(err => {
			console.log(err);
		});
	};

	render() {
		return (
			<Modal.Body>
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

					<Button onClick={this.updateUser} variant="primary" type="submit" id="salesSubmit">
						Submit
					</Button>
				</Form>
			</Modal.Body>
		);
	}
}

export default AccountInfo;