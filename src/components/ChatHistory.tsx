import { ArrowDownIcon } from "@chakra-ui/icons";
import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Divider,
  Text,
  VStack,
} from "@chakra-ui/react";

interface Props {
  updatedChats: Array<any>;
}

const ChatHistory = ({ updatedChats }: Props) => {
  return (
    <>
      <Box
        h="100vh"
        borderRadius={10}
        p={2}
        w={[300, 500, 600, 1000]}
        mt={5}
        overflow="auto"
        boxShadow="2xl">
        <Card bg="#ce8ae3" color="#000000" mb={2} align="center">
          <CardBody>
            <Text fontSize={{ base: "12px", md: "16px", lg: "20px" }} fontWeight="bold">
              View all messages here
              <ArrowDownIcon ml={2} />
            </Text>
          </CardBody>
        </Card>

        {[...updatedChats].reverse().map((message, index) => (
          <VStack spacing="3" display="flex" justifyContent="center">
            <Box boxShadow="10px 10px 5px #ce8ae3">
              <Card
                display="flex"
                key={index}
                bg="#FFFFFF"
                color="#000000"
                m={4}
                align="center">
                <CardHeader
                  fontWeight="bold"
                  textAlign="center"
                  fontSize={{ base: "12px", md: "20px" }}>
                  {message.title}
                </CardHeader>
                <Divider />
                <CardBody>
                  <Text fontSize={{ base: "12px", md: "20px" }} align="center">
                    {message.content}
                  </Text>
                </CardBody>
              </Card>
            </Box>
          </VStack>
        ))}
      </Box>
    </>
  );
};

export default ChatHistory;
