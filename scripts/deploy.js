const hre = require("hardhat");

async function main() {

  const Contract = await hre.ethers.getContractFactory("Winner")
  const contract = await Contract.deploy()

  console.log(
    `Contract was deployed to ${contract.target}`
  );
}


main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
