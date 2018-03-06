pragma solidity ^0.4.18;

contract FamilyWallet {
  mapping(address => bytes32) public familyOf;
  mapping(bytes32 => Family) families;
  
  struct Family {
    address[] members;
  }

  function createFamily(bytes32 _familyName, address[] _members) public {
    for (uint8 i = 0; i < _members.length; i++) {
      require(familyOf[_members[i]] == bytes32(0));
      familyOf[_members[i]] = _familyName;
    }
    Family memory _family = families[_familyName];
    _family.members = _members;
  }


  function family(bytes32 _familyName) public view returns (address[]) {
    Family memory _family = families[_familyName];
    return (_family.members);
  }

  function addMember(bytes32 familyName, address _member) public {
    familyOf[_member] = familyName;
  }

}
