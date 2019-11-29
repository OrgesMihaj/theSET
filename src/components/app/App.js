import React, { Component } from 'react';

import { BrowserRouter as Router } from 'react-router-dom';

import Nav from '../nav';
import Routes from '../../routes';
import '../../assets/sass/App.scss';


class App extends Component {
	
	render() {
		return (
			<div className="app">
				<Router>
					<Nav></Nav>

					<Routes></Routes>
				</Router>
			</div>
		);
	}
}

export default App;
