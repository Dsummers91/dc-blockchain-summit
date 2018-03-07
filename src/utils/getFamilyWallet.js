

import FamilyWalletContract from '../../build/contracts/FamilyWallet.json'
import getWeb3 from './getWeb3';


module.exports = () => {
  return getWeb3
    .then(results => {
      const contract = require('truffle-contract');
      const FamilyWallet = contract(FamilyWalletContract)
      FamilyWallet.setProvider(results.web3.currentProvider)
      return FamilyWallet.deployed().then((instance) => {
        return instance;
      });
    });
};

