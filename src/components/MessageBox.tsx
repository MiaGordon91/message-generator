import { Box, Card, CardBody, Center, Text } from "@chakra-ui/react";

interface Props {
  selectedCardRecipient: string;
}

const MessageBox = ({ selectedCardRecipient }: Props) => {
  return (
  
      <Card alignItems='center'>
        <CardBody>
          <Box >
            <Text>Write me a birthday message for my {selectedCardRecipient}.</Text>
          </Box>
        </CardBody>
      </Card>
  
  );
};

export default MessageBox;
