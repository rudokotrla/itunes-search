import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './components/Home';
import Tunes from './components/Tunes';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path='/tunes' component={Tunes} />
          <Route path='/' component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
