

import GoalTrackerContract from '../../build/contracts/GoalTracker.json'
import getWeb3 from './getWeb3';


function getContract() {
  return getWeb3
    .then(results => {
      const contract = require('truffle-contract');
      const GoalTracker = contract(GoalTrackerContract)
      GoalTracker.setProvider(results.web3.currentProvider)
      return GoalTracker.deployed().then((instance) => {
        return instance;
      });
    });
}

module.exports.goals = (member) => {
  return new Promise((resolve, reject) => {
    return getContract()
      .then((goalTracker) => {
        return goalTracker.contract.goals(member, {from: window.web3.eth.coinbase}, (err, res) => {
          if(err) reject(err);
          let response = [];
          for (let i = 0; i < res[0].length; i++) {
            response.push({goal: window.web3.toUtf8(res[0][i]), isComplete: res[1][i]})
          };
          resolve(response);
        })
      })
  })
};

module.exports.completeTask = (member, taskName) => {
  return new Promise((resolve, reject) => {
    return getContract()
      .then((goalTracker) => {
        return goalTracker.contract.completeGoal(member, taskName, {from: window.web3.eth.coinbase}, (err, res) => {
          if(err) reject(err);
          resolve(res)
        })
      })
  })
};