import React from 'react';
import { Jumbotron, Container } from 'react-bootstrap';
import './style.css';

function SlimHeader() {
	return (
		<Jumbotron fluid>
			<Container className='text-center'>
				<h1 className='display-4'>
					Sell Out!
				</h1>
			</Container>
		</Jumbotron>
	);
}

export default SlimHeader;