import React, { Component } from 'react';

import Nav from '../nav/Nav';
import Tournament from '../tournament/Tournament';
import '../../assets/sass/App.scss';

class App extends Component {
	
	render() {
		return (
			<div className="App">
				<Nav />

				<Tournament />
			</div>
		);
	}
}

export default App;
