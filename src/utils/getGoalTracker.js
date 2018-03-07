

import GoalTrackerContract from '../../build/contracts/GoalTracker.json'
import getWeb3 from './getWeb3';


module.exports = () => {
  return getWeb3
    .then(results => {
      const contract = require('truffle-contract');
      const GoalTracker = contract(GoalTrackerContract)
      GoalTracker.setProvider(results.web3.currentProvider)
      return GoalTracker.deployed().then((instance) => {
        return instance;
      });
    });
};

