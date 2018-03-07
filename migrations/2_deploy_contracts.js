var FamilyWallet = artifacts.require("./FamilyWallet.sol");
var GoalTracker = artifacts.require("./GoalTracker.sol");
var KycRegistry = artifacts.require("./KycRegistry.sol");

module.exports = function (deployer) {
  return deployer.deploy(FamilyWallet)
    .then(() => {
      return deployer.deploy(GoalTracker, 3, web3.toWei('.5', 'ether'), FamilyWallet.address);
    })
    .then(() => {
      return deployer.deploy(KycRegistry)
    })
};
