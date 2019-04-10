import React, { Component } from 'react';

import Buscador from './components/buscador/Buscador'
import Detalle from './components/Detalle/Detalle'
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

library.add(faSearch)

class App extends Component {
  render() {
    return (  
      <div className="App">
        <Buscador />
        <Detalle />
      </div>
    );
  }
}

export default App;
