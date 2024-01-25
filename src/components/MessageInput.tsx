import { Box, Center, Flex, Input, InputGroup, InputRightElement} from "@chakra-ui/react";
import { IconButton } from "@chakra-ui/react";
import { ArrowDownIcon } from "@chakra-ui/icons";
import { ChangeEvent, useEffect, useState } from "react";

interface Props {
  textInput: string;
  onTextChange: (value: string) => void;
  onDataReceived: (data: {role: string, content: string}) => void;
}

const MessageInput = ({ textInput, onTextChange, onDataReceived}: Props) => {

  const [input, setInput] = useState<string>(textInput);

  // update local state when initalValue changes 
  useEffect(() => {
    setInput(textInput)
  }, [textInput,]);
  
  
   // function that handles updating the local state and calling 
    // the onTextChange prop that can be passed to Open API 
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      const newValue = e.target.value;
      setInput(newValue);
      onTextChange(newValue);      
    };

    const getMessage = async () => {
      const options = {
        method: "POST",
        body: JSON.stringify({
          message: input,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      };

      try {
        const response = await fetch(
          "http://localhost:8000/completions",
          options
        );
        const data = await response.json();
        onDataReceived(data.choices[0].message);
      } catch (error) {
        console.error(error);
      }
    };

  // console.log(message);

  return (
    <>
    <Center>
     <Flex p={4} mt={4} bg="#757575" borderRadius={15}>
        <Box p={4} >
          <InputGroup display="flex" position="relative">
            <InputRightElement p={25}>
              <IconButton
                icon={<ArrowDownIcon />}
                size="sm"
                colorScheme="teal"
                variant="outline"
                aria-label={"Submit message"}
                onClick={getMessage}>
              </IconButton>
            </InputRightElement>
            <Input
              value={input}
              onChange={handleChange}
              placeholder="Write me a birthday message for my"
              size="lg"
              w="100vh"
            />   
          </InputGroup>
        </Box>           
    </Flex>
    </Center>
    </>
  );
};

export default MessageInput;