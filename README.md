# Seminar Voting DApp 

## Overview
The Seminar Voting DApp is a decentralized platform designed to bring transparency and fairness to the evaluation and recognition of seminars and speakers. By integrating blockchain technology, the platform ensures secure, tamper-proof voting and rewards contributors with NFTs and soulbound tokens (SBTs). Currently, the project is deployed on BNB Testnet and has potential integration with **Oasis Sapphire** to enhance voter privacy or **Polkadot** for decentralized governance (DeGov).

---

## Team Members
- **Đoàn Xuân Công Đạt** - Project Lead/ Developer  
  Contact: hoadd.hd4@gmail.com | Discord: datt9355  
- **Nguyễn Ngọc Trung** - Developer  
  Discord: emsifauz  
- **Nguyễn Tùng Dương** - Developer  
  Discord: teddy314  

---

## Project Description
### What does your project do?
The DApp allows users to:
- Vote for seminars and speakers in a decentralized, secure, and privacy-focused manner. 
- Reward speakers with Seminar NFTs (ERC-721), where each NFT represents a seminar, and metadata includes details such as seminar title, description, and ownership by the speaker. 
- Provide Certification SBTs (ERC-1155) as non-transferable tokens to recognize exceptional contributions.
- Store metadata such as seminar details and certificates on IPFS for transparency.

### Problem Solved
The DApp addresses the lack of transparency and trust in centralized voting systems by offering a decentralized solution that ensures fairness, prevents tampering, and respects user privacy.

---

## Features
1. **Decentralized Voting System**:  
   - Whitelist-based voting for authorized users with controlled vote limits per round.
   - Enhanced privacy potential with Oasis Sapphire or integration with Polkadot’s governance tools.
2. **Seminar NFTs and Certification SBTs**:  
   - Seminar NFTs (ERC-721) serve as digital representations of seminars, owned by their respective speakers.
   - Certification SBTs (ERC-1155) are unique, non-transferable tokens minted to reward outstanding contributions.
3. **Admin Functionalities**:  
   - Create and manage voting rounds.
   - Add seminars and whitelist users for participation.
   - Mint and distribute Seminar NFTs and Certification SBTs as rewards.
4. **IPFS Integration**:  
   - Decentralized storage for seminar slides and additional metadata.

---

## Technical Stack
- **Languages and Frameworks**: Solidity, Solidity, React + Vite, Javascript, Charka UI (Lib).
- **Blockchain**:  
  - Deployed on **BNB Testnet** for testing and validation.  
  - Future integration planned with **Oasis Sapphire** for privacy-focused voting or **Polkadot** via Moonbeam/Astar for decentralized governance.  
- **Tools and APIs**: IPFS, Polkadot.js SDK.

---

## Architecture
The application consists of:
- **Smart Contracts**: Handle voting, whitelist permissions, and rewards using Solidity.
- **Frontend**: A basic UI built with React.js for interacting with smart contracts.
- **Decentralized Storage**: IPFS for immutable metadata storage.

---

## How It Works
1. **Admin Actions**:
   - Create and configure voting rounds.
   - Add seminars and whitelist users for participation.
   - Mint Seminar NFTs and Certification SBTs as rewards for winners and contributors.
2. **User Actions**:
   - Participate in voting during active rounds.
   - View results and identify the winners of each round.
3. **Data Storage**:
   - Seminar and certificate metadata are securely stored on IPFS.

---

## Challenges Faced
- **UI Design**: The current frontend is functional but lacks advanced features and aesthetics.
- **Gas Optimization**: Ensuring efficient smart contracts for scalability on Polkadot and other EVM-compatible networks.
- **Privacy**: Exploring integration with privacy-focused networks like Oasis Sapphire to mask voter identities.

---

## Future Development
1. **UI Enhancements**: Revamp the frontend for a more polished user experience.
2. **Cross-Parachain Voting**: Enable voting across Polkadot parachains for broader ecosystem integration.
3. **Polkadot Native Standards**: Transition to RMRK NFTs and Polkadot-specific SBTs for enhanced functionality.
4. **On-Chain Governance**: Adopt Substrate-based tools for decentralized management of seminars and voting processes.
5. **Privacy Integration**: Implement solutions like Oasis Sapphire for anonymous voting.

---

## Submission Details
- BUIDL Hackathon: https://dorahacks.io/buidl/21102

---

## Apology and Commitment to Improvement

We sincerely apologize for deploying and testing our contract on BSC TestNet. Out of habit, we unintentionally conducted this project on that network, which unfortunately rendered it incompatible with the Westend Asset Hub.

Additionally, when we attempted to deploy the contract on remix.polkadot.io, we encountered an error indicating that the contract was too large. Unfortunately, this issue arose very close to the submission deadline, and with our final exams for the semester approaching (we are all second-year university students), we were unable to allocate sufficient time to split the contract into smaller components to meet the size requirements.

We deeply regret the inconvenience caused and kindly ask for your understanding. Should we have the opportunity to proceed to the next round, we assure you that we will rebuild the project with greater care and precision.
---

## Acknowledgments
Special thanks to:
- Open-source libraries and frameworks used in development.
- Mentors and community members for their guidance and support.
## Using D-app
Admin's screen:
![image](https://github.com/user-attachments/assets/5af8ef12-45b9-492a-bbe0-07e6d198b9bf)

Add voter:
![image](https://github.com/user-attachments/assets/0f63c671-9778-4c6d-9c55-53f643e2327f)

Remove voter:
![image](https://github.com/user-attachments/assets/e1c57647-d222-48d8-985e-05fb729b5a11)

Add and Remove Voting Round:
![image](https://github.com/user-attachments/assets/3ddc7a47-208d-4f4c-8b99-f1d9185cdc62)

Mint Seminar:
![image](https://github.com/user-attachments/assets/79542966-d6f0-4580-ba1f-892b19702815)

Add Admin:
![image](https://github.com/user-attachments/assets/5f4c73f5-759e-474f-9e08-fc660fae4a3e)

Voting Round Detail:
![image](https://github.com/user-attachments/assets/bf936684-056a-487c-b8db-9349b9057747)

Unvoted list:
![image](https://github.com/user-attachments/assets/47d0fd32-5631-4755-a364-f172d205041a)

Show Result:
![image](https://github.com/user-attachments/assets/1e135a9f-69cc-4c68-8f87-d6255d786546)

Create Certification:
![image](https://github.com/user-attachments/assets/b240e342-57f9-4505-a3b9-e81bb148a1aa)

Manage Certification:
![image](https://github.com/user-attachments/assets/f37e7c38-9be8-4cc8-a1ee-b7c9b16583eb)

Remove admin:
![image](https://github.com/user-attachments/assets/dbc07fb5-d1d7-405d-9466-e1a57962e646)

Set name:
![image](https://github.com/user-attachments/assets/860ac790-a99d-4c40-9534-b8ca11925df1)

Choose Final Winner:
![image](https://github.com/user-attachments/assets/b6c2d0cb-1483-4c56-aac6-6034b21fc90f)

Voter's screen:
![image](https://github.com/user-attachments/assets/a206312a-8a33-40ff-a9b4-9610894c28e0)

Vote for seminar:
![image](https://github.com/user-attachments/assets/c40f7fb7-d138-4ea1-898b-d14cbe9d4a1a)
![image](https://github.com/user-attachments/assets/007dbf7d-973b-4d26-bd41-5304d48a41ea)

Vote for speaker:
![image](https://github.com/user-attachments/assets/3c5bb3fc-4388-4580-9256-338d51fc9a51)

Set name:
![image](https://github.com/user-attachments/assets/f3e1877f-d4f0-4e38-b812-a3a743f63c06)

Remove vote for seminar:
![image](https://github.com/user-attachments/assets/51988221-8e12-4883-b9fe-d8c136db55a0)

Remove vote for speaker:
![image](https://github.com/user-attachments/assets/d8836a9f-43e3-40a4-88fc-31873551e94f)

Seminar details:
![image](https://github.com/user-attachments/assets/9e3fc6b9-d1ac-484b-8bb8-3bc776864bb7)



