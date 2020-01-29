import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import './style.css';

import API from '../../../utils/API';

class Approvals extends Component {
	state = {
		sales: []
	};

	componentDidMount() {
		API.getSales().then(data => {
			for(let i=0; i<data.data.data.length; i++) {
				let items = [...this.state.sales];
				items.push(data.data.data[i]);
				this.setState({sales: items});
			}
		});
	}

	render() {
		return (
			<Table striped bordered hover>
				<thead>
					<tr>
						<th>Sales Rep</th>
						{/* <th>Asset/Product</th> */}
						<th>Commission</th>
					</tr>
				</thead>
				<tbody>
					{this.state.sales.map((item, i) => {
						return (
							<tr key={i}>
								<td>{item.salesRep}</td>
								{/* <td>{item.offering}</td> */}
								<td>{item.commission}</td>
							</tr>
						)
					})}
				</tbody>
			</Table>
		);
	}
}

export default Approvals;