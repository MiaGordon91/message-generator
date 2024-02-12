import {HStack, Heading} from "@chakra-ui/react";
import DeleteMessagesButton from "./DeleteMessagesButton";

interface Props {
  onSelect: (action: boolean) => void;
}

const NavBar = ({onSelect}: Props) => {


  return (
    <>
      <HStack
        justifyContent="space-between"
        p={['8px', '18px']}
        borderRadius={10}
        >
        <Heading
          size={["md", "xl", "2xl"]}
          style={{ fontFamily: "Quicksand" }}
          p={[3, 5]}
          color="#FFFFFF"
          >
          from the heart...
        </Heading>
        <DeleteMessagesButton onSelect={onSelect}/>
      </HStack>
    </>
  );
};

export default NavBar;
