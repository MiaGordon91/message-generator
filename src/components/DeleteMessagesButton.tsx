import { Button, useToast } from "@chakra-ui/react";

interface Props {
    onSelect: (action: boolean) => void;
  }

const DeleteMessagesButton = ({onSelect}: Props) => {

  const toast = useToast()

  return (
    <Button
          key="clear"
          bg='#f6bb55'
          fontSize={{ base:"8px", md:"16px", lg:"18px"}} 
          padding={[2, 4, 6]}
          variant="outline"
          onClick={() => {
            onSelect(true);
            toast({
              title: 'Messages deleted',
              description: 'All messages have been removed',
              status: 'success',
              duration: 9000,
              isClosable: true,
            })
          }}
          >
          Clear all messages
    </Button>
  )
}

export default DeleteMessagesButton;