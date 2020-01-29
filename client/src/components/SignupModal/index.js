import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
// import {Link} from 'react-router-dom';

import BusinessForm from './business';
import SalesForm from './sales';
import './style.css';

function SignupModal(props) {
	const [show,setShow] = useState(false);
	return (
		<div>
			<Button onClick={() => setShow(true)}>
				Sign up for {props.type} account
			</Button>

			<Modal show={show} onHide={() => setShow(false)}>
				<Modal.Header closeButton>
					<Modal.Title>Create {props.type} Account!</Modal.Title>
				</Modal.Header>

				{props.type==='Business' ? <BusinessForm /> : <SalesForm />}
			</Modal>
		</div>
	);
}

export default SignupModal;