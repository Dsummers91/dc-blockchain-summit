var GoalTracker = artifacts.require("./GoalTracker.sol");
var FamilyWallet = artifacts.require("./FamilyWallet.sol");


module.exports = function (deployer) {
  let goalTracker;
  return FamilyWallet.deployed()
    .then((fam) => {
      return fam.createFamily('Huxtables', ["biometrics", "fingerprints", 'something else', 'yada yada'], "0x3ae58167667c0e4EBE547ac64378693A2461ED05")
    })
    .then(() => {
      return GoalTracker.deployed()
    })
    .then((goal) => {
      goalTracker = goal;
      return goalTracker.addGoals('biometrics', [
        "Child in School for whole week",
        "Get a Checkup in March",
        "Psychotherapy for PTSD",
        "Visit legal counselor"
      ]);
    })
    .then(() => {
      return goalTracker.completeGoal('biometrics', "Child in School for whole week")
    })
    .then(() => {
      return goalTracker.completeGoal('biometrics', "Get a Checkup in March")
    })
};
