import React, { Component } from 'react';

import '../../assets/sass/App.scss';

import Nav from '../nav';
import Routes from '../../routes';

class App extends Component {
	
	render() {
		return (
			<div className="app">				
				<Nav></Nav>

				<Routes />
			</div>
		);
	}
}

export default App;
