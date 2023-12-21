import { Button, VStack } from "@chakra-ui/react";
import { useState } from "react";

interface Props {
  cardRecipients: string[];
  onSelectItem: (recipient: string) => void;
}

function CardRecipientList({ cardRecipients, onSelectItem }: Props) {
  const [selectedRecipients, setSelectedRecipient] = useState("");

  return (
    <VStack spacing="24px" paddingTop="10px">

      {cardRecipients.map((recipient) => (
        <Button
          colorScheme="blackAlpha"
          key={recipient}
          onClick={() => {
            setSelectedRecipient(recipient);
            onSelectItem(recipient);
          }}>
          {recipient}
        </Button>
      ))}
    </VStack>
  );
}

export default CardRecipientList;
