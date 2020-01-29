import React, { Component, useState } from 'react';
import { Button, Form, Modal, Table} from 'react-bootstrap';
import './style.css';

import API from '../../../utils/API';

class SalesProducts extends Component {
	constructor(props) {
		super(props);
		this.state = {
			products: [],
			businesses: []
		};
	}

	componentDidMount() {
		API.searchProducts().then(data => {
			for(let i=0; i<data.data.length; i++) {
				let items = [...this.state.products];
				items.push(data.data[i]);
				this.setState({products: items});
			}
		});

		API.searchBusinessUsers().then(data => {
			for(let i=0; i<data.data.length; i++) {
				let items = [...this.state.businesses];
				items.push(data.data[i]);
				this.setState({businesses: items});
			}
		});
	};

	handleInputChange = e => {
		const { name, value } = e.target;
		this.setState({
			[name]: value
		});
	};

	render() {
		return (
			<div style={{maxHeight: "200px", overflowY: "scroll"}}>
				<Form>
					<Form.Group controlId="businessName">
						<Form.Control 
						name='businessName'
						value={this.state.business}
						onChange={this.handleInputChange}
						as="select"
						>
							<option></option>
							{this.state.businesses.map((item, i) => {
								return (
									<option value={i} key={i}>{item.businessName}</option>
								)
							})}
						</Form.Control>
					</Form.Group>
				</Form>

				<Table striped bordered hover>
					<thead style={{textAlign: "center"}}>
						<tr>
							<th>Asset/Product</th>
							<th>Description</th>
							<th>Price Range</th>
							<th>Commissions</th>
							<th>Business</th>
						</tr>
					</thead>
					<tbody>
						{this.state.products.filter(item => item.business === document.getElementById("businessName").options[document.getElementById("businessName").selectedIndex].text).map((item, i) => {
							return (
								<Product item={item} mapKey={i} />
							)
						})}
					</tbody>
				</Table>
			</div>
		);
	}
}

function Product(props) {
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	const sale = item => {
		console.log(typeof item.commissions)
		API.postSale(item);
	};

	return (
		<>
			<tr key={props.mapKey} onClick={handleShow}>
				<td>{props.item.name}</td>
				<td>{props.item.description}</td>
				<td>{props.item.priceRange}</td>
				<td>{props.item.commissions}%</td>
				<td>{props.item.business}</td>
			</tr>

			<Modal show={show} onHide={handleClose} centered>
				<Modal.Header closeButton>
					<Modal.Title>Did you sell this product/service?</Modal.Title>
				</Modal.Header>

				<Modal.Body>
					<h5>Sold <span className='font-italic'>{props.item.name}</span>? </h5>
					<Button onClick={() => {sale(props.item); setShow(false)}} variant='danger' type='submit'>
						Pending Approval
					</Button>
				</Modal.Body>
			</Modal>
		</>
	);
}
export default SalesProducts;