var GoalTracker = artifacts.require("./GoalTracker.sol");

module.exports = function(deployer) {  
  let balance = web3.eth.getBalance(web3.eth.accounts[9]);
  const gas = 81000
  const gasPrice = 1e4;
  let transferrableBalance = balance.minus(gas * gasPrice);
  web3.eth.sendTransaction({from: web3.eth.accounts[9], to: GoalTracker.address, value: transferrableBalance, gas: gas, gasPrice: gasPrice});
};
