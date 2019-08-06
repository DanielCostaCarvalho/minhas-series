import React, { useEffect, useState } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import axios from 'axios'
import Header from './Header';
import Generos from './Generos';
import Home from './Home'

function App() {
  const [data, setData] = useState({});
  useEffect(() => {
    axios.get('/api').then(res => {
      setData(res.data)
    })
  }, [])
  return (
    <Router>
    <div className="App">
      <Header/>
      <Route path='/' exact component={Home}/>
      <Route path='/generos' component={Generos}/>
      <pre>{JSON.stringify(data)}</pre>
    </div>
    </Router>
  );
}

export default App;
