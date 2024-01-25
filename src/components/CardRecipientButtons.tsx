import { Button, Center, Flex, HStack } from "@chakra-ui/react";
import { useState } from "react";

interface Props {
  cardRecipients: string[];
  colorScheme: string;
  onSelectItem: (item: string) => void;
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
    <Center>
      <HStack spacing="30px">
        {cardRecipients.map((item, index) => (
          <Button
            key={index}
            onClick={() => {
              onSelectItem(item);
              handleButtonClick(index);
            }}
            colorScheme={activeButton === index ? "teal" : colorScheme}
            fontSize={{ base:"15px", md:"20px"}} 
            >
            {item}
          </Button>
        ))}
      </HStack>
    </Center>
  );
};

export default CardRecipientButtons;
