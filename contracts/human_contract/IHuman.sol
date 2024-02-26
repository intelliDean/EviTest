// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;


interface IHuman {


    function name() external view returns(string memory);

    function age() external view returns(uint8);

    function humanAddress() external view returns(address);

}