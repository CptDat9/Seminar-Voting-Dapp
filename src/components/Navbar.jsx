// src/components/Navbar.jsx
import { Box, Flex, Button, Spacer, Text, Link as ChakraLink } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <Flex bg="teal.500" p={4} color="white" align="center">
      <ChakraLink as={Link} to="/" fontSize="xl" fontWeight="bold">
        Seminar Vote
      </ChakraLink>
      <Spacer />
      {/* Thêm các liên kết khác nếu cần */}
    </Flex>
  );
}

export default Navbar;
