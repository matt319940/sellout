import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import './style.css';

import API from '../../../utils/API';

class Modules extends Component {
	state = {
		modules: []
	};

	componentDidMount() {
		API.getModules().then(data => {
			for(let i=0; i<data.data.data.length; i++) {
				let items = [...this.state.modules];
				items.push(data.data.data[i]);
				this.setState({modules: items});
			}
		});
	}

	loadModule = item => {
		console.log(item);
	};

	render() {
		return (
			<div style={{maxHeight: "200px", overflowY: "scroll"}}>
				<Table striped bordered hover>
					<thead>
						<tr style={{textAlign: "center"}}>
							<th>Module Name</th>
							<th>Est. Time</th>
						</tr>
					</thead>
					<tbody>
						{this.state.modules.map((item, i) => {
							return (
								<tr key={i} onClick={() => this.loadModule(item)}>
								<td>{item.name}</td>
								<td>{item.time}</td>
								</tr>
							)
						})}
					</tbody>
				</Table>

				{/* <Modal show={show} onHide={() => setShow(false)}>
					<Modal.Header closeButton>
						<Modal.Title>Change Account Info</Modal.Title>
					</Modal.Header>
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

							<Button onClick={this.updateUser} variant="primary" type="submit" id="moduleSubmit">
								Submit
							</Button>
						</Form>
					</Modal.Body>
				</Modal> */}
			</div>
		);
	}
}

export default Modules;