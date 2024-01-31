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
  <Box p={9} h="100vh" w={[400, 500, 600, 1200]} bg="#E0E0E0" overflow='scroll'>
      {[...updatedChats].reverse().map((message, index) => (
        <VStack spacing="3" display="flex" justifyContent="center">
          <Box>
            <Card display="flex" key={index} bg="#757575" m={2}>
              <CardHeader fontWeight="bold" fontSize={{ base: "12px", md: "20px" }}>
                  {message.title}
              </CardHeader>
              <Divider />
              <CardBody>
                <Text fontSize={{ base: "12px", md: "20px" }}>
                  {message.content}
                </Text>
              </CardBody>    
            </Card>
          </Box>
        </VStack>  
        ))}; 
  </Box>
  </>
  );
};

export default ChatHistory;
