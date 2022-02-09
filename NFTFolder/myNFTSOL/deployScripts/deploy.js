const { ethers } = require("hardhat")

async function main() {
  const MyNFT = await ethers.getContractFactory("MyNFT")
  const Market = await ethers.getContractFactory("Market");

  // Start deployment, returning a promise that resolves to a contract object
  const myNFT = await MyNFT.deploy()
  const market = await Market.deploy()
  await market.deployed()
  await myNFT.deployed()
  console.log("Contract deployed to address:", myNFT.address)
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })