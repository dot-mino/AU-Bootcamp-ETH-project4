const { ethers } = require("ethers");
const hre = require("hardhat");

async function main() {
    const provider = new ethers.providers.JsonRpcProvider(`https://eth-sepolia.g.alchemy.com/v2/${process.env.RPC_URL}`);
    const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider);

    const address = "0xD8301C5B8b195d50a706348624A608bf9d77ffA6"
    const abi = [
      {
        "inputs": [],
        "stateMutability": "payable",
        "type": "constructor"
      },
      {
        "inputs": [],
        "name": "callAttempt",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      }
    ]

    const contract = new ethers.Contract(address, abi, wallet)

    try {
      const tx = await contract.callAttempt();
      await tx.wait();
      console.log("Success");
    } catch (error) {
      console.error("Something went wrong:", error);
    }
  }
  
  main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
  