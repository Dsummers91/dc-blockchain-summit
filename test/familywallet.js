var FamilyWallet = artifacts.require("./FamilyWallet.sol");

contract('FamilyWallet', function(accounts) {
  let familyWallet;

  before(async() => {
    familyWallet = await FamilyWallet.deployed();
  })

  it("should be able to create a family", async function() {
    let members = ["test", "tester"];
    await familyWallet.createFamily('Buterin', members, accounts[0]);
    let family = await familyWallet.family('Buterin');
    assert.deepEqual(web3.toUtf8(family[0][0]), members[0]);
    assert.deepEqual(web3.toUtf8(family[0][1]), members[1]);
    assert.equal(family[1], accounts[0]);
  });


  it("should be able to get a family by member", async function() {
    let familyOf = await familyWallet.familyOf("test");
    assert.equal(web3.toUtf8(familyOf), 'Buterin');
  });
});
