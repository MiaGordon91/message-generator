import { Button, Heading, Stack} from "@chakra-ui/react";

const NavBar = () => {
  return (
    <>
      <Stack direction={['row']} justifyContent="space-between">
        <Heading size={{ sm:"m", md: "xl", lg: "2xl"}} style={{fontFamily: "Quicksand"}} p={4}>
           from the heart
        </Heading>
        <Button m={5} size="md" variant="outline">
            New chat
        </Button>
      </Stack >
    </>
  );
};

export default NavBar;
