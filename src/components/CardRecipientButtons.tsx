import { Button, VStack } from "@chakra-ui/react";
import { useState } from "react";

interface Props {
  cardRecipients: string[];
  colorScheme: string;
  onSelectItem: (recipient: string) => void;
}

const CardRecipientButtons = ({
  cardRecipients,
  onSelectItem,
  colorScheme,
}: Props) => {
  const [activeButton, setActiveButton] = useState<String | null>(null);

  const handleButtonClick = (recipient: string) => {
    setActiveButton(recipient);
  };

  return (
    <VStack spacing="24px" paddingTop="10px">
      {cardRecipients.map((recipient) => (
        <Button
          key={recipient}
          onClick={() => {
            onSelectItem(recipient);
            handleButtonClick(recipient);
          }}
          colorScheme={activeButton === recipient ? "teal" : colorScheme}>
          {recipient}
        </Button>
      ))}
    </VStack>
  );
};

export default CardRecipientButtons;
