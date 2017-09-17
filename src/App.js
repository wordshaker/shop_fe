import React, { Component } from 'react';
import Axios from 'axios';
import './App.css';

class App extends Component {
  state = {
    inventory: [],
    product: []
  }

  componentDidMount() {
    getInventory(this);
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Bravissimo Test</h2>
        </div>
        <h5>
          Product List
        </h5>
        <ul>
          {this.state.inventory.map(item => (
            <li>{item.name} &pound;{item.price}</li>
          ))}
        </ul>
      </div>
    );
  }
}

function getInventory(component){
  Axios.get('http://localhost:3001/api/products')
    .then(({data}) => {
      component.setState({
        inventory: data
      });
    }).catch((e) => {
      alert(e);
    });
}

export default App;
