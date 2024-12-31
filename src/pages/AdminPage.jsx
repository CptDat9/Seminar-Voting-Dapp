import React, { useState } from "react";
import { Box, Button, Heading, VStack } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FeatureModalForAdmin from "../components/FeatureModalForAdmin";

const AdminPage = () => {
  const [currentFeature, setCurrentFeature] = useState(null);

  const features = [
    { id: "addVoter", label: "Thêm Voter" },
    { id: "removeVoter", label: "Xóa Voter" },
    { id: "createAndRemoveRound", label: "Thêm và xóa Vòng bầu chọn" },
    { id: "addAdmin", label: "Thêm người quản lý" },
    { id: "showAllRound", label: "Hiển thị tất cả các vòng bầu chọn" },
    { id: "GetVotersDontVote", label: "Lấy danh sách những người chưa vote"},
    { id: "GetResult", label: "Lấy kết quả vòng bầu chọn"},
    { id: "CreateCertificate", label: "Tạo SBT chứng nhận cho speaker" },
    { id: "ManageSoul", label: "Quản lí SBT chứng nhận"}
  ];

  return (
    <Box minHeight="100vh" display="flex" flexDirection="column">
      <Navbar isLoggedIn={true} title="Quản Trị" />
      <Box as="main" flex="1" p={8} bg="gray.100" display="flex" alignItems="center" justifyContent="center">
        <Box bg="white" p={8} borderRadius="lg" boxShadow="lg" width="400px" textAlign="center">
          <Heading mb={6} color="teal.500">
            Tính Năng Admin
          </Heading>
          <VStack spacing={4}>
            {features.map((feature) => (
              <Button
                key={feature.id}
                colorScheme="teal"
                onClick={() => setCurrentFeature(feature.id)}
                width="100%"
              >
                {feature.label}
              </Button>
            ))}
          </VStack>
        </Box>
      </Box>
      <Footer />
      {currentFeature && (
        <FeatureModalForAdmin featureId={currentFeature} onClose={() => setCurrentFeature(null)} />
      )}
    </Box>
  );
};

export default AdminPage;
