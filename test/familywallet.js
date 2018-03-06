var FamilyWallet = artifacts.require("./FamilyWallet.sol");

contract('FamilyWallet', function(accounts) {
  let familyWallet;

  before(async() => {
    familyWallet = await FamilyWallet.deployed();
  })

  it("should be able to create a family", async function() {
    let members = [accounts[0], accounts[1]];
    await familyWallet.createFamily('Buterin', members);
    let family = await familyWallet.family('Buterin');
    assert.deepEqual(family[0], members);
    assert.equal(family[1], members[0]);
  });


  it("should be able to get a family by member", async function() {
    let familyOf = await familyWallet.familyOf(accounts[0]);
    assert.equal(web3.toUtf8(familyOf), 'Buterin');
  });
});
