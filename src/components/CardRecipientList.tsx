import { Button, ButtonGroup, VStack } from "@chakra-ui/react";

const cardRecipients = ["Mum", "Dad", "Sister", "Brother"];

const CardRecipientList = () => {
  return (
    <VStack spacing="24px" paddingTop="10px">
      {cardRecipients.map((recipient) => (
        <Button colorScheme="blackAlpha" key={recipient} onClick={() => console.log(recipient)}>
          {recipient}
        </Button>
      ))}
    </VStack>
  );
};

export default CardRecipientList;
