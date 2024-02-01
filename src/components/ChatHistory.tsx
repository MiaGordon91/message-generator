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
        p={5}
        w={[400, 500, 600, 1200]}
        mt={5}
        overflow="auto"
        boxShadow='2xl'
        >
        
        <Card
          bg="#ce8ae3"
          color="#000000"
          mb={2}
          align="center">
          <CardBody
            fontWeight="bold"
            fontSize={{ base: "16px", md: "25px" }}
            >
              View all messages here 
              <ArrowDownIcon ml={2} />
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
