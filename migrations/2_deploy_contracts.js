var FamilyWallet = artifacts.require("./FamilyWallet.sol");
var GoalTracker = artifacts.require("./GoalTracker.sol");

module.exports = function(deployer) {
  deployer.deploy(FamilyWallet);
  deployer.deploy(GoalTracker);
};
