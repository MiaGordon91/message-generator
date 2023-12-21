import { Button, VStack } from "@chakra-ui/react";

interface Props {
  cardRecipients: string[];
  onSelectItem: (recipient: string) => void;
}

function CardRecipientList({ cardRecipients, onSelectItem }: Props) {

  return (
    <VStack spacing="24px" paddingTop="10px">

      {cardRecipients.map((recipient) => (
        <Button
          colorScheme="blackAlpha"
          key={recipient}
          onClick={() => {
            onSelectItem(recipient);
          }}>
          {recipient}
        </Button>
      ))}
    </VStack>
  );
}

export default CardRecipientList;
