var GoalTracker = artifacts.require("./GoalTracker.sol");

module.exports = function (deployer) {
  return GoalTracker.deployed()
    .then((goalTracker) => {
      return goalTracker.addGoals(web3.eth.accounts[0], [
        "Did child show up at school?", 
        "Get a monthly check-up", 
        "Family avail of psychotherapy for PSTD, depression or anxiety",
        "Visit legal counselor",
        "Visit legal counselor2"
      ]);
    })
};