import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//Pages

import Home from './pages/Home';


function App() {
	return (
		<Router>
			<Routes>
        <Route exact path="/"> <Home/> </Route>
			</Routes>
			
		</Router>
	);
}

export default App;