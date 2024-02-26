import {ethers} from "hardhat";

async function main() {


    const NFT = await ethers.deployContract("DeanNFT");

    await NFT.waitForDeployment();

    console.log(
        `DeanNFT contract deployed to ${NFT.target}`
    );


    const myAddress = "0xF2E7E2f51D7C9eEa9B0313C2eCa12f8e43bd1855";
    const id = 3;
    const uri = "QmfQjhLMJ3LgwLgB9ogVdcDuDhRCkpPXfc6zQbp9zM9E2U";

   const mintTx =  await NFT.mint(myAddress, id, uri);
   await mintTx.wait();

    console.log(
        `Minted successfully: ${mintTx}`
    );

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
