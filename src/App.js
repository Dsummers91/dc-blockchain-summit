import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import FamilyWalletContract from '../build/contracts/FamilyWallet.json'
import getWeb3 from './utils/getWeb3'

import Home from './pages/Home';
import UNHCR from './pages/UNHCR';
import Phone from './pages/Phone';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      storageValue: 0,
      web3: null
    }
  }

  // console.log(this.props.match.url);
  routeRender() {
    switch (this.props.match.url) {
      case "/": return( <Route path="/" component={ Home } />);
      case "/UNHCR": return( <Route path="/UNHCR" component={ UNHCR } />);
      case "/user": return( <Route path="/user" component={ Phone } />);
      default: break;
    }
  }

  componentWillMount() {
  }

  instantiateContract() {
    /*
     * SMART CONTRACT EXAMPLE
     *
     * Normally these functions would be called in the context of a
     * state management library, but for convenience I've placed them here.
     */

    // const contract = require('truffle-contract')
    // const FamilyWallet = contract(FamilyWalletContract)
    // FamilyWallet.setProvider(this.state.web3.currentProvider)

    // // Declaring this for later so we can chain functions on FamilyWallet.
    // var FamilyWalletInstance

    // // Get accounts.
    // this.state.web3.eth.getAccounts((error, accounts) => {
    //   FamilyWallet.deployed().then((instance) => {
    //     FamilyWalletInstance = instance

    //     // Stores a given value, 5 by default.
    //     return FamilyWalletInstance.set(5, {from: accounts[0]})
    //   }).then((result) => {
    //     // Get the value from the contract to prove it worked.
    //     return FamilyWalletInstance.get.call(accounts[0])
    //   }).then((result) => {
    //     // Update state with the result.
    //     return this.setState({ storageValue: result.c[0] })
    //   })
    // })
  }

  render() {
    return (
      <div className="container background-color">
        {this.routeRender()}
      </div>
    );
  }

}

export default App
