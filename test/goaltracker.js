var GoalTracker = artifacts.require("./GoalTracker.sol");
var FamilyWallet = artifacts.require("./FamilyWallet.sol");

contract('goalTracker', function(accounts) {
  let goalTracker;
  let familyWallet;

  before(async() => {
    goalTracker = await GoalTracker.deployed();
    familyWallet = await FamilyWallet.deployed();
    let members = ["biometrics", "fingerprints"];
    await familyWallet.createFamily('Buterin', members, accounts[0]);
  })

  it("should be able to create a goal", async function() {
    await goalTracker.addGoals("biometrics", ["test goal one", "test goal two", "test goal three"]);
    let goals = await goalTracker.goals("biometrics");
    assert.equal(web3.toUtf8(goals[0][0]), "test goal one");
    assert.equal(goals[1][0], false);
  });

  it("should be able to complete a task", async function() {
    await goalTracker.completeGoal("biometrics", "test goal one");
    let goals = await goalTracker.goals("biometrics");
    assert.equal(web3.toUtf8(goals[0][0]), "test goal one");
    assert.equal(goals[1][0], true);
  });

  it("should be awarded for completed third task", async function() {
    let balancePrior = await web3.eth.getBalance(accounts[0]);
    await goalTracker.completeGoal("biometrics", "test goal two");
    await goalTracker.completeGoal("biometrics", "test goal three");
    let goals = await goalTracker.goals("biometrics");
    let balanceAfter = await web3.eth.getBalance(accounts[0]);
    assert.equal(web3.toUtf8(goals[0][2]), "test goal three");
    assert.equal(goals[1][2], true);
    assert.isTrue(balanceAfter.greaterThan(balancePrior));
  });
});
