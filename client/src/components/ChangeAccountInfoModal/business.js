import React, { Component } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import API from '../../utils/API';
import './style.css';

class BusinessAcctInfo extends Component {

	state = {
		businessName: '',
		industry: '',
		username: '',
		password: ''
	};

	componentDidMount() {
		API.userInfo().then(data => {
			this.setState({
				businessName: data.data.businessName,
				industry: data.data.industry,
				username: data.data.username,
				password: data.data.password
			});
		});
	}

	handleInputChange = e => {
		const { name, value } = e.target;
		this.setState({
			[name]: value
		});
	};

	updateUser = e => {
		e.preventDefault();
		API.updateBusinessAccount({
			businessName: this.state.businessName,
			industry: this.state.industry,
			username: this.state.username,
			password: this.state.password
		}).then(res => {
			API.logOut()
			.then(API.loginBusiness({
				username: this.state.username,
				password: this.state.password
			}).then(window.location.reload(false)));
		}).catch(err => {
			console.log(err);
		});
	};

	render() {
		return (
			<Modal.Body>
				<Form>

					<Form.Group id='businessAcctName'>
						<Form.Label>Business Name</Form.Label>
						<Form.Control
							type='text'
							placeholder='Business Name, Inc.'
							name='businessName'
							value={this.state.businessName}
							onChange={this.handleInputChange}
						/>
					</Form.Group>

					<Form.Group id='businessIndustry'>
						<Form.Label>Industry</Form.Label>
						<Form.Control
							type='text'
							placeholder='ex: Technology'
							name='industry'
							value={this.state.industry}
							onChange={this.handleInputChange}
						/>
					</Form.Group>

					<Form.Group id='businessUsername'>
						<Form.Label>Username</Form.Label>
						<Form.Control
							type='text'
							placeholder='username'
							name='username'
							value={this.state.username}
							onChange={this.handleInputChange}
						/>
					</Form.Group>

					<Form.Group id='businessPassword'>
						<Form.Label>Password</Form.Label>
						<Form.Control
							type='password'
							placeholder=''
							name='password'
							value={this.state.password}
							onChange={this.handleInputChange}
						/>
					</Form.Group>

					<Button onClick={this.updateUser} variant='primary' type='submit' id='businessUpdateBtn'>
						Submit
					</Button>

				</Form>
			</Modal.Body>
		);
	}
}

export default BusinessAcctInfo;