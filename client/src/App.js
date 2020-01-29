import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Particles from 'react-particles-js';

import Home from './components/pages/Home'

import SalesPortal from './components/pages/Portal/SalesPortal';
import BusinessPortal from './components/pages/Portal/BusinessPortal';

function App() {
	return (
		<>
			<Router>
				<Route exact path='/' component={Home} />
				<Route exact path='/portal/business' component={BusinessPortal} />
				<Route exact path='/portal/sales' component={SalesPortal} />
			</Router>
			<Particles params={{
				particles: {
					shape: {
						type: 'circle',
						stroke: {
							width: 0,
							color: '#000000'
						}
					},
					color: {
						value: '#ffffff'
					},
					number: {
						value: 400,
						density: {
							enable: true,
							value_area: 800
						}
					},
					size: {
						value: 10,
						random: true
					},
					opacity: {
						value: 0.5,
						random: true
					},
					line_linked: {
						enable: false
					}
				}
			}} style={{position:'absolute', zIndex:'-1', top:'0'}} />
		</>
	);
}

export default App;
