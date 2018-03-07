// Tracks each persons goals and send rewards
pragma solidity ^0.4.18;

import "./FamilyWallet.sol";

contract GoalTracker {
  mapping(address => bytes32[]) public goalDescriptions; // hopefully bytes32 fits
  mapping(address => bool[]) public goalCompleted;
  uint256 public threshold; // number of goals before funds are dispensed (maybe should be percentage? idk) 
  uint256 public award; // amount of funds in wei sent to user (or family) when rewards are dispensed
  FamilyWallet public familyWallet;

  function GoalTracker(uint256 _threshold, uint256 _award, address _familyWallet) public {
    require(_familyWallet != address(0));
    threshold = _threshold;
    award = _award;
    familyWallet = FamilyWallet(_familyWallet);
  }
  
  function addGoals(address _member, bytes32[] _description) public {
    for (uint256 i = 0; i < _description.length; i++) {
      goalDescriptions[_member].push(_description[i]);
    }
    goalCompleted[_member].length = goalDescriptions[_member].length;
  }

  function goals(address _member) public view returns (bytes32[], bool[]) {
    // dont really care about gas for demo purposes
    bytes32[] memory descriptions = new bytes32[](goalDescriptions[_member].length);
    bool[] memory status = new bool[](goalDescriptions[_member].length);
    for (uint256 i = 0; i < descriptions.length; i++) {
      descriptions[i] = goalDescriptions[_member][i];
      status[i] = goalCompleted[_member][i];
    }
    return(descriptions, status);
  }

  // @note this is gas intensive af
  function completeGoal(address _member, bytes32 _description) public {
    bytes32[] storage descriptions = goalDescriptions[_member];
    for (uint256 i = 0; i < descriptions.length; i++) {
      if (descriptions[i] == _description) {
        goalCompleted[_member][i] = true;
        if(checkGoals(goalCompleted[_member])) {
         _member.transfer(award); 
        }
        break;
      }
    }
  }

  function checkGoals(bool[] goals) internal returns (bool) {
    uint256 count = 0;
    for (uint256 i = 0; i < goals.length; i++) {
      if(goals[i] == true) {
        count++;
        if (threshold == count) {
          return true;
        }
      }
    }
  }

  function() payable {}
  
}