import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import About from './About';

import Container from '../Container';
import Navigator from '../Navigator';
import SignupModal from '../SignupModal';
import Wrapper from '../Wrapper';
import Header from '../Header';

import SalesPortal from '../pages/Portal/SalesPortal';
import BusinessPortal from '../pages/Portal/BusinessPortal';

function Home() {
	return (
		<Wrapper>
			<Router>
				<Navigator />
				<Header />
				<Container>
					<Route exact path='/signup' component={SignupModal} />
                    <Route exact path='/about' component={About} />
					<Route exact path='/portal/sales' component={SalesPortal} />
					<Route exact path='/portal/business' component={BusinessPortal} />
				</Container>
			</Router>
		</Wrapper>
	);
}

export default Home;
