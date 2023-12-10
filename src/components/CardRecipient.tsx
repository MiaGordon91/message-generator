import { Button, VStack } from "@chakra-ui/react";

const CardRecipient = () => {
  return (
    <VStack spacing="24px">
      <Button variant="outline" marginTop={2}>
        Recipient 1
      </Button>
      <Button variant="outline">
        Recipient 2
      </Button>
      <Button variant="outline">
        Recipient 3
      </Button>
      <Button variant="outline">
        Recipient 4
      </Button>
      <Button variant="outline">
        Recipient 5
      </Button>
      <Button variant="outline">
        Save
      </Button>
    </VStack>
  );
}; 

export default CardRecipient;
