import { Button, ButtonGroup, Center } from "@chakra-ui/react";
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
      <ButtonGroup spacing={{ base:"10px", md:"30px"}}>
        {cardRecipients.map((item, index) => (
          <Button
            key={item}
            onClick={() => {
              onSelectItem(item);
              handleButtonClick(index);
            }}
            bg='#f6bb55'
            fontWeight="bold"
            fontSize={{ base:"10px", md:"20px"}} 
            _hover={{
              background: "#d776f5",
            }}
            >
            {item}
          </Button>
        ))}
      </ButtonGroup>
    </Center>
  );
};

export default CardRecipientButtons;
