import React, { Component, useState } from 'react';
import { Button, Modal, Table } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import './style.css';

import API from '../../../utils/API';

class BusinessProducts extends Component {
	constructor(props) {
		super(props);
		this.state = {
			products: [],
			business: ''
		};
	}

	componentDidMount() {
		API.userInfo().then(data => {
			this.setState({
				business: data.data.businessName
			});
		});

		API.searchProducts().then(data => {
			for(let i=0; i<data.data.length; i++) {
				if(data.data[i].business===this.state.business) {
					let items = [...this.state.products];
					items.push(data.data[i]);
					this.setState({products: items});
				}
			}
		});
	}

	render() {
		return (
			<Table striped bordered hover>
				<thead>
					<tr>
						<th>Asset/Product</th>
						<th>Description</th>
						<th>Price Range</th>
						<th>Commissions</th>
					</tr>
				</thead>
				<tbody>
					{this.state.products.map((item, i) => {
						return (
							<Product item={item} mapKey={i} />
						)
					})}
				</tbody>
			</Table>
		);
	}
}

function Product(props) {
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	const removeProduct = (item) => {
		API.deleteProduct({
			name: item.name,
			description: item.description
		}).then(res => {
			window.location.reload();
		}).catch(err => {
			console.log(err);
		});
	};

	return (
		<>
			<tr key={props.mapKey}>
				<td>
					<a role='button' onClick={handleShow}>
						<FontAwesomeIcon icon={faTrashAlt} size='sm' />
					</a>
					{props.item.name}
				</td>
				<td>{props.item.description}</td>
				<td>{props.item.priceRange}</td>
				<td>{props.item.commissions}%</td>
			</tr>

			<Modal show={show} onHide={handleClose} centered>
				<Modal.Header closeButton>
					<Modal.Title>Are you sure?</Modal.Title>
				</Modal.Header>

				<Modal.Body>
					<p>Are you sure you want to remove this item from your list of products?</p>
					<h5>Remove <span className='font-italic'>{props.item.name}</span>? </h5>
					<Button onClick={() => removeProduct(props.item)} variant='danger' type='submit'>
						Remove product
					</Button>
				</Modal.Body>
			</Modal>
		</>
	);
}

export default BusinessProducts;