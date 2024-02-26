// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

//import "./Human.sol";
import "contracts/human_contract/Human.sol";
import "contracts/human_contract/IHuman.sol";

contract HumanFactory {

    address owner;

    address[] public humans;
    uint256 public noOfHumans;
    mapping(uint256 => address) public eachHuman;

    constructor () {
        owner = msg.sender;
    }

    function createHuman(address _humanAddress, string memory _name, uint8 _age) public {
        if (msg.sender != owner) revert("Not owner");

        Human _human = new Human(_humanAddress, _name, _age);
        uint256 num = noOfHumans + 1;

        eachHuman[num] = address(_human);
        humans.push(address(_human));
        noOfHumans = num;
    }


    function getName(uint256 _index) external view returns (string memory) {

        return IHuman(eachHuman[_index]).name();
    }

    function getAge(uint256 _index) external view returns (uint8) {

        return IHuman(eachHuman[_index]).age();
    }

    function getHumanId(uint256 _index) external view returns (address) {

        return IHuman(eachHuman[_index]).humanAddress();
    }

}