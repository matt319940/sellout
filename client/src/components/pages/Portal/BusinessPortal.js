import React, { Component } from 'react';
import { Button, Card, Col, Container, ListGroup, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faIndustry, faPlusCircle, faSignOutAlt, faUserEdit } from '@fortawesome/free-solid-svg-icons';
import './style.css';

import Header from '../../Header';

import AddProduct from './AddProduct';
import Approvals from './Approvals';
import BusinessProducts from './BusinessProducts';
import ChangeAccountInfoModal from '../../ChangeAccountInfoModal';

import API from '../../../utils/API';

class BusinessAvatar extends React.Component {
	state = {
		username: '',
		businessName: '',
		industry: ''
	};

	componentDidMount() {
		API.userInfo().then(data => {
			this.setState({
				username: data.data.username,
				businessName: data.data.businessName,
				industry: data.data.industry
			});
		});
	}

	logOut = e => {
		e.preventDefault();
		API.logOut().then(res => window.location.href = '/').catch(err => console.log(err));
	};

	render() {
		return (
			<Card bg='info' text='white'>
				<Card.Header className='text-center'>Sales Rep Info</Card.Header>
				<Card.Body>
					<Row className='w-100 mx-auto'>
						<ListGroup horizontal className='text-dark mx-auto'>

							<ListGroup.Item>
								<FontAwesomeIcon icon={faBriefcase} />
								<span className='text-muted'>Business: </span>
								{this.state.businessName}
							</ListGroup.Item>

							<ListGroup.Item>
								<FontAwesomeIcon icon={faIndustry} />
								<span className='text-muted'>Industry: </span>
								{this.state.industry}
							</ListGroup.Item>

						</ListGroup>
					</Row>

					<div className='text-center'>
						<ChangeAccountInfoModal type='Business' />
						<Button variant='info' onClick={this.logOut}>
							<FontAwesomeIcon icon={faSignOutAlt} />
							Log Out
						</Button>
					</div>

				</Card.Body>
			</Card>
		);
	}
}

class BusinessPortal extends Component {
	state = {
		username: '',
		businessName: '',
		industry: ''
	};

	componentDidMount() {
		API.userInfo().then(data => {
			this.setState({
				username: data.data.username,
				businessName: data.data.businessName,
				industry: data.data.industry
			});
		});
	}

	render() {
		return (
			<>
				<Header />
				<Container>
					<BusinessAvatar />
					<Row>
						<h2 className='w-100 text-center text-white'>Sales Approvals</h2>
						<Approvals />
					</Row>

					<Row>
						<Col md={4} />
						<Col md={4}>
							<h2 className='text-center text-white'>
								Products
							</h2>
						</Col>
						<Col md={4} className='text-right'>
							<AddProduct />
						</Col>
					</Row>
					<Row>
						<BusinessProducts business={this.state.businessName} />
					</Row>
				</Container>
			</>
		);
	}
}

export default BusinessPortal;