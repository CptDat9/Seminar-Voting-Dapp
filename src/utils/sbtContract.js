import { ethers } from "ethers";
import SBTAbi from "../contracts/SBT.json";

const SBT_CONTRACT_ADDRESS = "0x388E2b06e7a3a3489b05311871c0daA4De235903";

const getSBTContract = async () => {
  if (!window.ethereum) {
    throw new Error("MetaMask chưa được cài đặt.");
  }

  const provider = new ethers.BrowserProvider(window.ethereum);
  const signer = await provider.getSigner();
  return new ethers.Contract(SBT_CONTRACT_ADDRESS, SBTAbi.abi, signer);
};

export default getSBTContract;
