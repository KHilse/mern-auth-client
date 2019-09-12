import React from 'react';
//import logo from './logo.svg';
import { BrowserRouter as Router} from 'react-router-dom';

// SOURCES
import './App.css';
import Header from './nav/header';
import Nav from './nav/nav'
import Routes from './content/routes';

class App extends React.Component {

  state = {
    user: null
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Nav user={this.state.user}/>
          <Header />
          <Routes />
        </div>
      </Router>
    );
  }
}

export default App;
