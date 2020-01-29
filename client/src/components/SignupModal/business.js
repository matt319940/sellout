import React, { Component } from 'react';
import {Modal,Form,Button} from 'react-bootstrap';
import API from '../../utils/API';

class BusinessForm extends Component {
	state = {
		businessName: '',
		industry: '',
		username: '',
		password: ''
	};

	// componentDidMount() {}

	handleInputChange = e => {
		const { name, value } = e.target;
		this.setState({
			[name]: value
		});
	};

	signupUser = e => {
		e.preventDefault();

		API.signUpBusiness({
			businessName: this.state.businessName,
			industry: this.state.industry,
			username: this.state.username,
			password: this.state.password
		}).then(res => {
			API.loginBusiness({
				username: this.state.username,
				password: this.state.password
			}).then(res => {
				API.userInfo();
				window.location.href = '/portal/business';
			}).catch(err => console.log(err));
		}).catch(err => console.log(err));
	};

	render() {
		return (
			<Modal.Body>
				<h2>Business Form</h2>

				<Form>
					<Form.Group>
						<Form.Label>Business Name</Form.Label>
						<Form.Control 
							type='text'
							placeholder='company'
							name='businessName'
							value={this.state.businessName}
							onChange={this.handleInputChange} />
					</Form.Group>

					<Form.Group>
						<Form.Label>Industry</Form.Label>
						<Form.Control 
							type='text'
							placeholder='ie: Communications...'
							name='industry'
							value={this.state.industry}
							onChange={this.handleInputChange} />
					</Form.Group>

					<Form.Group>
						<Form.Label>Username</Form.Label>
						<Form.Control 
							type='text'
							placeholder='username'
							name='username'
							value={this.state.username}
							onChange={this.handleInputChange} />
					</Form.Group>

					<Form.Group>
						<Form.Label>Password</Form.Label>
						<Form.Control 
							type='password'
							placeholder='password'
							name='password'
							value={this.state.password}
							onChange={this.handleInputChange} />
					</Form.Group>

					<Button onClick={this.signupUser} variant='primary' type='submit' id='businessSubmit'>
						Submit
					</Button>
				</Form>
			</Modal.Body>
		);
	}
}

export default BusinessForm;