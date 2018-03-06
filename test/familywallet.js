var FamilyWallet = artifacts.require("./FamilyWallet.sol");

contract('FamilyWallet', function(accounts) {
  let familyWallet;

  before(async() => {
    familyWallet = await FamilyWallet.deployed();
  })

  it("should be able to create a family", async function() {
    await familyWallet.createFamily('Buterin', [accounts[0], accounts[1]]);
    let familyOf = await familyWallet.familyOf(accounts[0]);
    assert.equal(web3.toUtf8(familyOf), 'Buterin');
  });


  it("should be able to get a family by member", async function() {
    let familyOf = await familyWallet.familyOf(accounts[0]);
    assert.equal(web3.toUtf8(familyOf), 'Buterin');
  });
});
