// Casual KYC Registry that is shared amont network, so no one has to do it twice
// Has bool (yes/no) mapping, 
// if you need more verification on KYC contact the person who verified them!
// Cause Blockchain != Privacy


pragma solidity ^0.4.18;

contract KycRegistry {
  mapping(address => bool) approved;

  function KycRegistry() {
  }
  
  function approvePerson(address _member) {
    approved[_member] = true;
  }
}