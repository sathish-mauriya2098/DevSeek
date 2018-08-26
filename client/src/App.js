import React, { Component } from 'react';

import NavBar from './components/header/nav';
import Forms from './components/pages/form';


class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar/>
        <br/>
        <Forms/>
      </div>
    );
  }
}

export default App;
