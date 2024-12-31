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
- **Languages and Frameworks**: Solidity, React.js, JavaScript.
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
- **GitHub Repository**: [Provide the link to your GitHub repo]
- **Live Demo**: [Provide the link to live DApp or demo video]
- **Documentation**: [Link to user guide or API documentation]
- **Presentation Slides**: [Link to presentation slides]

---

## Acknowledgments
Special thanks to:
- Open-source libraries and frameworks used in development.
- Mentors and community members for their guidance and support.
