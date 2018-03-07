pragma solidity ^0.4.18;

contract FamilyWallet {
  mapping(bytes32 => bytes32) public familyOf;
  mapping(bytes32 => Family) families;

  struct Family {
    bytes32[] members;
    address headOfHousehold;
  }

  function createFamily(bytes32 _familyName, bytes32[] _members, address _headOfHousehold) public {
    for (uint256 i = 0; i < _members.length; i++) {
      require(familyOf[_members[i]] == bytes32(0));
      familyOf[_members[i]] = _familyName;
    }
    Family storage _family = families[_familyName];
    _family.members = _members;
    _family.headOfHousehold = _headOfHousehold;
  }

  function getReceivingAddress(bytes32 _member) public view returns (address) {
    bytes32 _familyName = familyOf[_member];
    require(_familyName != bytes32(0));
    return families[_familyName].headOfHousehold;
  }


  function family(bytes32 _familyName) public view returns (bytes32[], address) {
    Family memory _family = families[_familyName];
    return (_family.members, _family.headOfHousehold);
  }

  function addMember(bytes32 familyName, bytes32 _member) public {
    familyOf[_member] = familyName;
  }

}
