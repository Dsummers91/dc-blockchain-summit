pragma solidity ^0.4.18;

contract FamilyWallet {
  mapping(address => bytes32) public familyOf;
  mapping(bytes32 => Family) families;
  
  struct Family {
    address[] members;
    address headOfHousehold;
  }

  function createFamily(bytes32 _familyName, address[] _members) public {
    for (uint8 i = 0; i < _members.length; i++) {
      require(familyOf[_members[i]] == bytes32(0));
      familyOf[_members[i]] = _familyName;
    }
    Family storage _family = families[_familyName];
    _family.members = _members;
    _family.headOfHousehold = _members[0];
  }


  function family(bytes32 _familyName) public view returns (address[], address) {
    Family memory _family = families[_familyName];
    return (_family.members, _family.headOfHousehold);
  }

  function addMember(bytes32 familyName, address _member) public {
    familyOf[_member] = familyName;
  }

}
