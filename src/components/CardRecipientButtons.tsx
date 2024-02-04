import { Button, Wrap, WrapItem } from "@chakra-ui/react";

interface Props {
  cardRecipients: string[];
  onSelectItem: (item: string) => void;
}

const CardRecipientButtons = ({
  cardRecipients,
  onSelectItem,
}: Props) => {


  return (
    <Wrap justify='center'>
        {cardRecipients.map((item, index) => (
          <WrapItem>
            <Button
              key={item}
              onClick={() => {
                onSelectItem(item);
              }}
              bg='#f6bb55'
              fontWeight="bold"
              fontSize={{ base:"10px", md:"12px", lg: "16px"}} 
              p={{ base:"3px", md:"8px" }}
              _hover={{
                background: "#d776f5",
              }}
              >
              {item}
            </Button>
          </WrapItem>
        ))}
      </Wrap>
  );
};

export default CardRecipientButtons;
