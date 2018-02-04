import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import Coins from './components/Coins';

class App extends Component {
  state = {
    coinList: [],
  };

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res.express }))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('/api');
    const body = await response.json();
    console.log(body);

    if (response.status !== 200) throw Error(body.message);

    return body;
  };

  callCoinExchange = () => {
    console.log('hello');
    axios.get('https://api.coinmarketcap.com/v1/ticker/')
    .then((response) => {
      console.log('im the response', response.data);
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Coin Exchange</h1>
        </header>
        <p className="App-intro">
          {this.state.response}
        </p>
        <button onClick={this.callCoinExchange.bind(this)}>Submit</button>
      </div>
    );
  }
}

export default App;
