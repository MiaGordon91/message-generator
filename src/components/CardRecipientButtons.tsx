import { Button, Center, Flex, HStack } from "@chakra-ui/react";
import { useState } from "react";

interface Props {
  cardRecipients: string[];
  onSelectItem: (item: string) => void;
}

const CardRecipientButtons = ({
  cardRecipients,
  onSelectItem,
}: Props) => {
  
  const [activeButton, setActiveButton] = useState<Number | null>(null);

  const handleButtonClick = (index: number) => {
    setActiveButton(index);
  };

  return (
    <Center>
      <HStack spacing={{ base:"10px", md:"30px"}}>
        {cardRecipients.map((item, index) => (
          <Button
            key={item}
            onClick={() => {
              onSelectItem(item);
              handleButtonClick(index);
            }}
            colorScheme="blackAlpha"
            fontSize={{ base:"10px", md:"20px"}} 
            >
            {item}
          </Button>
        ))}
      </HStack>
    </Center>
  );
};

export default CardRecipientButtons;
