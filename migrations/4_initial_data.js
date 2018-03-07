var GoalTracker = artifacts.require("./GoalTracker.sol");

module.exports = function (deployer) {
  return GoalTracker.deployed()
    .then((goalTracker) => {
      return goalTracker.addGoals('0x3931e9f7ffd0a5a7b4204e115e2f40312a4129fd2fea1ec8ffed7325bc46f7ad', [
        "Child in School for whole week", 
        "Get a Checkup in March", 
        "Psychotherapy for PTSD",
        "Visit legal counselor"
      ]);
    })
};