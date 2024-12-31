import React, { useState, useEffect } from "react";
import { VStack, Select, Button, useToast, Text } from "@chakra-ui/react";
import getWhitelistContract from "../../utils/whitelistContract";
import getVotingContract from "../../utils/votingContract";


const VoteSeminar = ({ roundId }) => {
  const [seminars, setSeminars] = useState([]);
  const [selectedSeminar, setSelectedSeminar] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const toast = useToast();

  // Lấy danh sách seminar từ contract
  const fetchSeminars = async () => {
    try {
      const contract = await getWhitelistContract();
      const contract2 = await getVotingContract();
      const [seminarIds] = await contract2.getSpeakersAndSeminars(roundId); // Lấy seminarIds từ hàm getSpeakersAndSeminars
      const seminarList = seminarIds.map((id, index) => ({
        id,
        name: `Seminar #${id}`, // Bạn có thể thay đổi cách lấy tên từ contract
      }));
      setSeminars(seminarList);
    } catch (error) {
      console.error("Error fetching seminars:", error);
      toast({
        title: "Lỗi",
        description: "Không thể lấy danh sách seminar.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  // Hàm xử lý bỏ phiếu
  const handleVote = async () => {
    if (!selectedSeminar) {
      toast({
        title: "Lỗi",
        description: "Vui lòng chọn một seminar để bỏ phiếu.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    setIsLoading(true);
    try {
      const contract = await getVotingContract();
      await contract.voteForSeminar(roundId, selectedSeminar); // Gọi hàm voteForSeminar từ contract
      toast({
        title: "Thành công",
        description: `Bạn đã bỏ phiếu cho seminar: ${selectedSeminar}`,
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    } catch (error) {
      console.error("Error voting for seminar:", error);
      toast({
        title: "Thất bại",
        description: "Không thể bỏ phiếu.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    } finally {
      setIsLoading(false);
    }
  };

  // Lấy danh sách seminar khi component được mount
  useEffect(() => {
    fetchSeminars();
  }, [roundId]);

  return (
    <VStack spacing={4}>
      <Text fontSize="lg" fontWeight="bold">
        Bỏ phiếu cho Seminar
      </Text>
      <Select
        placeholder="Chọn một seminar"
        value={selectedSeminar}
        onChange={(e) => setSelectedSeminar(e.target.value)}
      >
        {seminars.map((seminar) => (
          <option key={seminar.id} value={seminar.id}>
            {seminar.name}
          </option>
        ))}
      </Select>
      <Button
        colorScheme="teal"
        onClick={handleVote}
        isLoading={isLoading}
        loadingText="Đang bỏ phiếu..."
      >
        Bỏ Phiếu
      </Button>
    </VStack>
  );
};

export default VoteSeminar;
