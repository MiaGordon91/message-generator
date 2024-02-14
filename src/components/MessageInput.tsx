import {
  Box,
  Flex,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { IconButton } from "@chakra-ui/react";
import { ArrowDownIcon } from "@chakra-ui/icons";
import { ChangeEvent, useEffect, useState } from "react";

interface Props {
  textInput: string;
  userRequestSent: (value: string) => void;
  onDataReceived: (data: { role: string; content: string }) => void;
}

const MessageInput = ({
  textInput,
  userRequestSent,
  onDataReceived,
}: Props) => {
  const [input, setInput] = useState<string>(textInput);

  // update local state when initalValue changes
  useEffect(() => {
    setInput(textInput);
  }, [textInput]);

  // function that handles updating the local state to set the input on the message property
  // in the fetch call to Open API and set the input on the onTextChange to pass to parent component
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setInput(newValue);
    userRequestSent(newValue);
  };

  // load spinner on icon button when clicked
  const [showLoader, setShowLoader] = useState(false);

  const getMessage = async () => {
    setShowLoader(true);

    const messageResponseCountLimit = ".Please cap message to 80 words max";
    const options = {
      method: "POST",
      body: JSON.stringify({
        message: input.concat(messageResponseCountLimit),
      }),
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
      },
    };

    const { VITE_SERVER_URL } = import.meta.env;

    try {
      const response = await fetch(
        `${VITE_SERVER_URL}`,
        options
      );
      const data = await response.json();
      onDataReceived(data.choices[0].message);
      setInput("");
      setShowLoader(false);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Flex p={3} mt={4} borderRadius={15} bg="#757575">
        <Box p={[0.5, 2]} w={[250, 400, 600, 800, 1000]}>
          <InputGroup size="sm">
            <InputRightElement p={[17, 25]}>
              <IconButton
                icon={<ArrowDownIcon />}
                size={["xs", "sm"]}
                colorScheme="#757575"
                variant="outline"
                aria-label={"Submit message"}
                onClick={getMessage}
                isLoading={showLoader}></IconButton>
            </InputRightElement>
            <Input
              value={input}
              onChange={handleChange}
              placeholder="Write me a birthday message for my..."
              size={["sm", "lg"]}
              textOverflow="wrap"
              color="#FFFFFF"
            />
          </InputGroup>
        </Box>
      </Flex>
    </>
  );
};

export default MessageInput;
