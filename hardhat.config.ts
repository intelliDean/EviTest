// import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

require("dotenv").config({path: ".env"});

const {URL, KEY, SEP_URL} = process.env;

module.exports = {
    solidity: "0.8.24",
    networks: {
        hardhat: {
            forking: {
                url: URL
            },
        },
        sepolia: {
      url: SEP_URL,
      accounts: [`0x${KEY}`]
    }
    },
    lockGasLimit: 200000000000,
    gasPrice: 10000000000,
};