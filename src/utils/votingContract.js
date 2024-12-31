import { ethers } from "ethers";
import VotingABI from "../contracts/Voting.json";

const contractAddress = "0x6fEf9C8deb1646D2d8A97C29D9712e87985293Ea";

const getVotingContract = async () => {
  if (!window.ethereum) {
    throw new Error("MetaMask chưa được cài đặt.");
  }

  const provider = new ethers.BrowserProvider(window.ethereum);
  const signer = await provider.getSigner();
  return new ethers.Contract(contractAddress, VotingABI.abi, signer);
};

export default getVotingContract;
