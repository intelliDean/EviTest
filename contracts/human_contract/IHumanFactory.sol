// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

interface IHumanFactory {


    function createHuman(address _humanAddress, string memory _name, uint8 _age) external;

    function getName(uint256 _index) external view returns (string memory);

    function getAge(uint256 _index) external view returns (uint8);

    function getHumanId(uint256 _index) external view returns (address);

}
