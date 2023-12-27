import { Button, VStack } from "@chakra-ui/react";
import { useState } from "react";

interface Props {
  cardRecipients: string[];
  colorScheme: string;
  onSelectItem: (index: string) => void;
}

const CardRecipientButtons = ({
  cardRecipients,
  onSelectItem,
  colorScheme,
}: Props) => {
  const [activeButton, setActiveButton] = useState<Number | null>(null);

  const handleButtonClick = (index: number) => {
    setActiveButton(index);
  };

  return (
    <VStack spacing="24px" paddingTop="10px">
      {cardRecipients.map((item, index) => (
        <Button
          key={index}
          onClick={() => {
            onSelectItem(item);
            handleButtonClick(index);
          }}
          colorScheme={activeButton === index ? "teal" : colorScheme}>
          {item}
        </Button>
      ))}
    </VStack>
  );
};

export default CardRecipientButtons;
