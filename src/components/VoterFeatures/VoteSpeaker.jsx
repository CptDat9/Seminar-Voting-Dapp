import React, { useState, useEffect } from "react";
import { VStack, Select, Button, useToast, Text } from "@chakra-ui/react";
import getVotingContract from "../../utils/votingContract"; 
import getWhitelistContract from "../../utils/whitelistContract"; 

const VoteSpeaker = ({ roundId }) => {
  const [speakers, setSpeakers] = useState([]);
  const [selectedSpeaker, setSelectedSpeaker] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const toast = useToast();

  const fetchSpeakers = async () => {
    try {
      const votingContract = await getVotingContract();
      const whitelistContract = await getWhitelistContract();

      // Lấy danh sách speakers và seminarIds từ hàm getSpeakersAndSeminars
      const [speakersInRound, _] = await votingContract.getSpeakersAndSeminars(roundId);

      // Lấy tên cho từng speaker
      const speakersWithNames = await Promise.all(
        speakersInRound.map(async (speakerAddress) => {
          const name = await whitelistContract.getName(speakerAddress);
          return { address: speakerAddress, name };
        })
      );

      setSpeakers(speakersWithNames);
    } catch (error) {
      console.error("Error fetching speakers:", error);
      toast({
        title: "Lỗi",
        description: "Không thể lấy danh sách speaker.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  // Hàm xử lý bỏ phiếu cho speaker
  const handleVote = async () => {
    if (!selectedSpeaker) {
      toast({
        title: "Lỗi",
        description: "Vui lòng chọn một speaker để bỏ phiếu.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    setIsLoading(true);
    try {
      const votingContract = await getVotingContract();
      const tx = await votingContract.voteForSpeaker(roundId, selectedSpeaker);
      await tx.wait(); 

      toast({
        title: "Thành công",
        description: `Bạn đã bỏ phiếu cho speaker: ${selectedSpeaker}`,
        status: "success",
        duration: 3000,
        isClosable: true,
      });

      // Cập nhật lại danh sách speakers (nếu cần)
      fetchSpeakers();
    } catch (error) {
      console.error("Error voting for speaker:", error);
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

  useEffect(() => {
    fetchSpeakers();
  }, [roundId]);

  return (
    <VStack spacing={4}>
      <Text fontSize="lg" fontWeight="bold">
        Bỏ phiếu cho Speaker
      </Text>
      <Select
        placeholder="Chọn một speaker"
        value={selectedSpeaker}
        onChange={(e) => setSelectedSpeaker(e.target.value)}
      >
        {speakers.map((speaker) => (
          <option key={speaker.address} value={speaker.address}>
            {speaker.name} ({speaker.address})
          </option>
        ))}
      </Select>
      <Button
        colorScheme="blue"
        onClick={handleVote}
        isLoading={isLoading}
        loadingText="Đang bỏ phiếu..."
      >
        Bỏ Phiếu
      </Button>
    </VStack>
  );
};

export default VoteSpeaker;
