var GoalTracker = artifacts.require("./GoalTracker.sol");

contract('goalTracker', function(accounts) {
  let goalTracker;

  before(async() => {
    goalTracker = await GoalTracker.deployed();
  })

  it("should be able to create a goal", async function() {
    await goalTracker.addGoals(accounts[0], ["test goal one", "test goal two"]);
    let goals = await goalTracker.goals(accounts[0]);
    assert.equal(goals[0][0], "test goal one");
    assert.equal(goal[0][1], false);
  });

});
