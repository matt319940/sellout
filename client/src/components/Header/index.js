import React from 'react';
import { Jumbotron, Container } from 'react-bootstrap';
import './style.css';

function Header() {
	return (
		<Jumbotron fluid>
			<Container className='text-center'>
				<h1 className='display-4'>
					Sell Out!
				</h1>
				<hr className='my-4' />

				<p className='lead'>
					Reinventing the world of sales
				</p>
			</Container>
		</Jumbotron>
	);
}

export default Header;