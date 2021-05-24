import logo from './logo.svg';
import './App.css';
import Ball from './components/ball.js';
import Dog from './components/dog.js'
import Main from './components/main.js';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route,Link } from 'react-router-dom';
import Particles from 'react-particles-js';
function App() {
  return (
    <div>
      
    <Router>
    
    <Route exact path="/" component={Ball} />
   <Route path="/dog" component={Dog} />
   <Route path="/main" component={Main} />
  </Router>
  </div>
  );
}

export default App;
