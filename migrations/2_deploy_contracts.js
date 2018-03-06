var FamilyWallet = artifacts.require("./FamilyWallet.sol");

module.exports = function(deployer) {
  deployer.deploy(FamilyWallet);
};
