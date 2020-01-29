import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserEdit } from '@fortawesome/free-solid-svg-icons';
import BusinessForm from './business';
import SalesForm from './sales';
import './style.css';

function ChangeAccountInfoModal(props) {
	const [show,setShow] = useState(false);
	return (
		<div>
			<Button variant='info' onClick={() => setShow(true)}>
                <FontAwesomeIcon icon={faUserEdit} />
				Change Account Info
			</Button>

			<Modal show={show} onHide={() => setShow(false)}>
				<Modal.Header closeButton>
					<Modal.Title>Change Account Info</Modal.Title>
				</Modal.Header>

				{props.type==='Business' ? <BusinessForm /> : <SalesForm />}
			</Modal>
		</div>
	);
}

export default ChangeAccountInfoModal;