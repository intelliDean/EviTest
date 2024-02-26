// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;


contract Human {

    address public creator;

    address public humanAddress;
    string public name;
    uint8 public age;


    constructor (address _humanAddress, string memory _name, uint8 _age) {
        creator = tx.origin;
        humanAddress = _humanAddress;
        name = _name;
        age = _age;
    }
}