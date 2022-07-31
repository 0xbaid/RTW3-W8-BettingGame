const { ethers } = require("hardhat");

async function main() {
  const casinoContract = await ethers.getContractFactory("Casino");

  const deployedCasinoContract = await casinoContract.deploy();
  console.log("Casino Contract Address:", deployedCasinoContract.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
