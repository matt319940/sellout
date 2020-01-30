import React, { Component } from 'react';
import { Button, Card, Col, Container, ListGroup, Row } from 'react-bootstrap';
import SlimHeader from '../SlimHeader';
import Navigator from '../Navigator'

class About extends Component {
	render() {
		return (
			<>
				<Navigator />
				<SlimHeader />
				<Container>
				<Card style={{ width: '95' }}>
					<Card.Body>
						<Card.Title className='text-center'>ABOUT US</Card.Title>
						<Card.Subtitle className="mb-2 text-muted">WHAT WE DO</Card.Subtitle>
						<Card.Text>
							Sell Out is a two-part web application. Firstly, we employ a Business to Business (B2B) 
							model to facilitate the exchange of goods and services among its business users. 
							And secondly, the sales of these goods and services are facilitated via our own personally employed sales force, 
							which consists of a team of contractors qualified through training - thereby outsourcing
							any need of a Sales Department for our business users. 
						</Card.Text>
						<hr></hr>
						<Card.Subtitle className="mb-2 text-muted">OUR HISTORY</Card.Subtitle>
						<Card.Text>
							Founded in the year 2020, Sell Out has a rich and extensive history. 
							Founders Matt Kelly and Matt Juskiw invested their blood, sweat and tears into the development of this website.
							In only three intensive weeks, they worked as a team to develope this lovely website that you see before you! The end. 
						</Card.Text>
					</Card.Body>
				</Card>
				</Container>
			</>
		);
	}
}

export default About;