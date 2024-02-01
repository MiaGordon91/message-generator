import { Button, Heading, Stack, useToast } from "@chakra-ui/react";

interface Props {
  onSelect: (action: boolean) => void ;
}

const NavBar = ({ onSelect }: Props) => {

  const toast = useToast()

  return (
    <>
      <Stack p={6} direction={["row"]} justifyContent="space-between" borderRadius={10}>
        <Heading
          size={{ sm: "m", md: "xl", lg: "2xl" }}
          style={{ fontFamily: "Quicksand" }}
          p={4}
          >
          from the heart...
        </Heading>
        <Button
          key="clear"
          bg='#f6bb55'
          p={6}
          m={5}
          size="md"
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
          }}>
          Clear all messages
        </Button>
      </Stack>
    </>
  );
};

export default NavBar;
