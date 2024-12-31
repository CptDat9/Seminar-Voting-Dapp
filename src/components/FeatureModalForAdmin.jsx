import React from "react";
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalCloseButton } from "@chakra-ui/react";
import AddVoter from "./AdminFeatures/AddVoter";
import RemoveVoter from "./AdminFeatures/RemoveVoter";
import CreateAndRemoveRound from "./AdminFeatures/CreateAndRemoveRound";
import AddAdmin from "./AdminFeatures/AddAdmin";
import ShowAllRound from "./AdminFeatures/ShowAllRound";
import CreateCertificate from "./AdminFeatures/CreateCertificate"; 
import ManageSoul from "./AdminFeatures/ManageSoul";
import GetVotersDontVote from "./AdminFeatures/getVotersDontVote";
import GetResult from "./AdminFeatures/getResult";
const FeatureModalForAdmin = ({ featureId, onClose }) => {
  const renderFeatureContent = () => {
    switch (featureId) {
      case "addVoter":
        return <AddVoter />;
      case "removeVoter":
        return <RemoveVoter />;
      case "createAndRemoveRound":
        return <CreateAndRemoveRound />;
      case "addAdmin":
        return <AddAdmin />;
      case "showAllRound":
        return <ShowAllRound />;
      case "getVotersDontVote":
        return <GetVotersDontVote />;
      case "GetResult":
        return <GetResult />;
      case "CreateCertificate": 
        return <CreateCertificate />; 
      case "ManageSoul":
        return <ManageSoul />;
      default:
        return <p>Chức năng không xác định.</p>;
    }
  };

  return (
    <Modal isOpen={true} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Chi tiết Tính Năng</ModalHeader>
        <ModalCloseButton />
        <ModalBody>{renderFeatureContent()}</ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default FeatureModalForAdmin;
