var GoalTracker = artifacts.require("./GoalTracker.sol");
var FamilyWallet = artifacts.require("./FamilyWallet.sol");

contract('goalTracker', function(accounts) {
  let goalTracker;
  let familyWallet;

  before(async() => {
    goalTracker = await GoalTracker.deployed();
    familyWallet = await FamilyWallet.deployed();
  })

  it("should be able to create a goal", async function() {
    await goalTracker.addGoals(accounts[0], ["test goal one", "test goal two", "test goal three"]);
    let goals = await goalTracker.goals(accounts[0]);
    assert.equal(web3.toUtf8(goals[0][0]), "test goal one");
    assert.equal(goals[1][0], false);
  });

  it("should be able to complete a task", async function() {
    await goalTracker.completeGoal(accounts[0], "test goal one");
    let goals = await goalTracker.goals(accounts[0]);
    assert.equal(web3.toUtf8(goals[0][0]), "test goal one");
    assert.equal(goals[1][0], true);
  });

  it("should be awarded for completed third task", async function() {
    let balancePrior = await web3.eth.getBalance(accounts[0]);
    await goalTracker.completeGoal(accounts[0], "test goal two");
    await goalTracker.completeGoal(accounts[0], "test goal three");
    let goals = await goalTracker.goals(accounts[0]);
    let balanceAfter = await web3.eth.getBalance(accounts[0]);
    assert.equal(web3.toUtf8(goals[0][2]), "test goal three");
    assert.equal(goals[1][2], true);
    assert.isTrue(balanceAfter.greaterThan(balancePrior));
  });
});
