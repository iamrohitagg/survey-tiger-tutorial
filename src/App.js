import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';

import logo from './assets/images/logo.png';

import LandingPage from './Components/LandingPage/LandingPage';
import CreateSurvey from './Components/CreateSurvey/CreateSurvey';

function App() {
	return (
		<div className="App">
			<img src={logo} alt="logo" />
			<Switch>
				<Route path="/" component={LandingPage} exact/>
				<Route path="/create" component={CreateSurvey} />
			</Switch>
		</div>
	);
}

export default App;
