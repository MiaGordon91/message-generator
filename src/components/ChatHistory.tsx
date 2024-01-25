import {
  Box,
  Card,
  CardBody,
  Center,
  Container,
  Hide,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";

interface Props {
  updatedChats: Array<any>;
}

const ChatHistory = ({ updatedChats }: Props) => {
  return (
    <>
      <Center>
        <SimpleGrid columns={{ sm: 1, md: 2 }} minHeight="100vh" mt={4} w='100vh'>

        <Hide below='md'>
          <Container bg="#285E61" borderRadius={4}>
            Display user messages to OpenAI
          </Container>
        </Hide>
  
          <Container bg="#E0E0E0" borderRadius={4} color="black">
              Display response from OpenAI
              <Box display="flex" alignItems="center" p={9}>
                <Stack spacing="4">
                  {updatedChats?.map((updatedChat, index) => (
                    <Card display="flex" direction="row" bg="#424242">
                      <CardBody>
                        <Text key={index} fontSize={{ base: "15px", md: "20px" }}>
                          {updatedChat.content}
                        </Text>
                      </CardBody>
                    </Card>
                  ))}
                  ;
                </Stack>
            </Box>
          </Container>
        </SimpleGrid>
      </Center>
    </>
  );
};

export default ChatHistory;
