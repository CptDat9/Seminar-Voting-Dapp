import React, { useState } from "react";
import { Box, Button, Heading, VStack } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FeatureModalForVoter from "../components/FeatureModalForVoter";

const VoterPage = () => {
  const [currentFeature, setCurrentFeature] = useState(null);

  const features = [
    { id: "voteSeminar", label: "Bình chọn cho bài thuyết trình" },
    { id: "voteSpeaker", label: "Bình chọn cho diễn giả" },
    { id: "setNameYourself", label: "Đặt tên" },
 
  ];

  return (
    <Box minHeight="100vh" display="flex" flexDirection="column">
      <Navbar isLoggedIn={true} title="Trang Voter" />
      <Box as="main" flex="1" p={8} bg="gray.100" display="flex" alignItems="center" justifyContent="center">
        <Box bg="white" p={8} borderRadius="lg" boxShadow="lg" width="400px" textAlign="center">
          <Heading mb={6} color="blue.500">
            Tính Năng Voter
          </Heading>
          <VStack spacing={4}>
            {features.map((feature) => (
              <Button
                key={feature.id}
                colorScheme="blue"
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
        <FeatureModalForVoter featureId={currentFeature} onClose={() => setCurrentFeature(null)} />
      )}
    </Box>
  );
};

export default VoterPage;
