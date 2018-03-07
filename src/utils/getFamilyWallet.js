

import FamilyWalletContract from '../../build/contracts/FamilyWallet.json'
import getWeb3 from './getWeb3';
import { goals } from './getGoalTracker';


function getContract() {
  return getWeb3
    .then(results => {
      const contract = require('truffle-contract');
      const FamilyWallet = contract(FamilyWalletContract)
      FamilyWallet.setProvider(results.web3.currentProvider)
      return FamilyWallet.deployed().then((instance) => {
        return instance;
      });
    });
}

module.exports.createFamilyWallet = (familyName, biometricHashes, headOfHouseholdAddress = window.web3.eth.coinbase) => {
  return new Promise((resolve, reject) => {
    return getContract()
      .then((familyWallet) => {
        return familyWallet.contract.createFamily(familyName, biometricHashes, headOfHouseholdAddress, {from: window.web3.eth.coinbase}, (err, res) => {
          if(err) reject(err);
          resolve(res)
        })
      })
  })
};

module.exports.getFamily = (familyName) => {
  return new Promise((resolve, reject) => {
    let response = {};
    return getContract()
      .then((familyWallet) => {
        return familyWallet.contract.family(familyName, {from: window.web3.eth.coinbase}, (err, res) => {
          if(err) reject(err);
          response.members = res[0];
          response.headOfHouseholdAddress = res[1];
          return true;
        })
      })
      .then(() => {
        return goals('biometrics')
      })
      .then((g) => {
        response.goals = g;
        window.web3.eth.getBalance("0x3ae58167667c0e4EBE547ac64378693A2461ED05", (err, res) => {
          response.balance = res;
          return resolve(response);
        })
      });
      
  })
};