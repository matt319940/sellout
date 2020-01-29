import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import './style.css';

import API from '../../../utils/API';

class Leads extends Component {
	state = {
		leads: []
	};

	componentDidMount() {
		API.getLeads().then(data => {
			for(let i=0; i<data.data.data.length; i++) {
				let items = [...this.state.leads];
				items.push(data.data.data[i]);
				this.setState({leads: items});
            }
		});
	}

	render() {
		return (
            <div style={{maxHeight: "200px", overflowY: "scroll"}}>
                <Table striped bordered hover >
                    <thead>
                        <tr style={{textAlign: "center"}}>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone Number</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.leads.map((item, i) => {
                            return (
                                <tr key={i}>
                                    <td>{item.name}</td>
                                    <td>{item.email}</td>
                                    <td>{item.phoneNumber}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </Table>
            </div>
		);
	}
}

export default Leads;