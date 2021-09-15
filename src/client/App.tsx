import * as React from 'react';
import { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import Home from './views/Home';
import Login from './views/Login';
import Content from './views/Content';

/* HOOK REACT EXAMPLE */
const App = (props: AppProps) => {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path='/'>
					<Home />
				</Route>
				<Route exact path='/login'>
					<Login />
				</Route>
				<PrivateRoute exact path='/content'>
					<Content />
				</PrivateRoute>
				<Route exact path='*'>
					{() => <h1 className='text-center display-1'>404 page</h1>}
				</Route>
			</Switch>
		</BrowserRouter>
	)
}
interface AppProps { }

export default App;
