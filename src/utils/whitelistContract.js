import { ethers } from "ethers";
import WhitelistABI from "../contracts/WhitelistUpgradeableV2.json";

const contractAddress = "0xB764fACBE0b8c8e3fca33d8e51B8081b5d553DDB";

const getWhitelistContract = async () => {
  if (!window.ethereum) {
    throw new Error("MetaMask chưa được cài đặt.");
  }

  if (!ethers.isAddress(contractAddress)) {
    throw new Error("Địa chỉ hợp đồng không hợp lệ.");
  }

  const provider = new ethers.BrowserProvider(window.ethereum);
  const signer = await provider.getSigner();

  try {
    const contract = new ethers.Contract(contractAddress, WhitelistABI.abi, signer);
    console.log("Whitelist contract đã được kết nối:", contract);
    return contract;
  } catch (error) {
    console.error("Lỗi khi tạo đối tượng hợp đồng:", error);
    throw new Error("Không thể kết nối với hợp đồng.");
  }
};

export default getWhitelistContract;
