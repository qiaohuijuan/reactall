import React, { Component } from 'react';

import Heads from './components/header'
import Main from './components/main'
import Footer from './components/footer'

class App extends Component {
  render() {
    return (
      <div className="wrap">
        <Heads/>
        <Main/>
        <Footer/>
      </div>
    )
  }
}

export default App;
