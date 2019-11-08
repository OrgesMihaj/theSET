import React, { Component } from 'react';

import Nav from './components/Nav';
import './sass/App.scss';
import Tournament from './components/tournament/Tournament';

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
