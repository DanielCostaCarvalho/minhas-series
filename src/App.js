import React from 'react';
import Header from './Header';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Generos from './Generos';
import Home from './Home'

function App() {
  return (
    <Router>
    <div className="App">
      <Header/>
      <Route path='/' exact component={Home}/>
      <Route path='/generos' component={Generos}/>
    </div>
    </Router>
  );
}

export default App;
