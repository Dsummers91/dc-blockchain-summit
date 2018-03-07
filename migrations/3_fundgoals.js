var GoalTracker = artifacts.require("./GoalTracker.sol");

module.exports = function(deployer) {  
  let balance = web3.eth.getBalance(web3.eth.accounts[9]);
  const gas = 51000
  const gasPrice = 1e4;
  let transferrableBalance = 5e18;
  try {
    web3.eth.sendTransaction({from: web3.eth.accounts[4], to: GoalTracker.address, value: transferrableBalance, gas: gas, gasPrice: gasPrice});
  } catch (e) {    
    web3.eth.sendTransaction({from: web3.eth.accounts[5], to: GoalTracker.address, value: transferrableBalance, gas: gas, gasPrice: gasPrice});
  }
 };
