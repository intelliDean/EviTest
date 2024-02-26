import {ethers} from "hardhat";
import {expect} from "chai";

async function main() {

    const humanFactoryAddress = "0xEBED2bE46ff7fE2d78d4e7d6B12ae06F326d3A87";
    const myAddress = "0xF2E7E2f51D7C9eEa9B0313C2eCa12f8e43bd1855";
    const anotherAccountAddress = "0xc6fB3fe7C22220862A1b403e5FECE8F13bcB61CE";


    const humanFactory = await ethers.getContractAt("IHumanFactory", humanFactoryAddress);

    const createHumanTx = await humanFactory.createHuman(
        anotherAccountAddress, "Kemi Ray", 120);
    await createHumanTx.wait();

    const retrievedId = await humanFactory.getHumanId(1);
    const retrievedAge = await humanFactory.getAge(1);
    const retrievedName = await humanFactory.getName(1);

    expect(retrievedId).to.be.equal(anotherAccountAddress);

    console.log("Retrieved Id: ", retrievedId);
    console.log("Retrieved Name: ", retrievedName);
    console.log("Retrieved Age: ", retrievedAge);

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});