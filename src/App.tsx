import { Grid, GridItem, VStack } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import CardRecipientButtons from "./components/CardRecipientButtons";
import MessageInput from "./components/MessageInput";
import { SetStateAction, useEffect, useState } from "react";
import ChatHistory from "./components/ChatHistory";
import ButtonSelectorPrompt from "./components/ButtonSelectorPrompt";

function App() {
  // define type definition of response object from the MessageInput component
  interface ResponseData {
    role: string;
    content: string;
  }

  const cardRecipients = ["Mum", "Dad", "Sister", "Brother", "Grandma", "Grandad", "Uncle", "Aunt", "Cousin", "Friend"];

  const [userRequestMessage, setuserRequestMessage] = useState("");

  const handleButtonClick = (item: SetStateAction<any>) => {
    const messageStart = "Write me a birthday message for my";
    const fullTextInput = messageStart.concat(" ", item);
    setuserRequestMessage(fullTextInput);
  };


  // message response from API
  const [messageResponse, setMessageResponse] = useState<ResponseData | null>(
    null
  );

  // callback function that will receive data from the child component
  const handleMessageFromAPI = (data: ResponseData) => {
    setMessageResponse(data);
  };

  //handling data response from the external api to display as chat history
  const [previousChats, setPreviousChats] = useState<ResponseData[]>([]);

  // whenever the message changes it needs to run
  useEffect(() => {
    if (userRequestMessage && messageResponse) {
      setPreviousChats((prevChats) => [
        ...prevChats,
        {
          title: userRequestMessage,
          role: messageResponse.role,
          content: messageResponse.content,
        },
      ]);
    }
  }, [messageResponse]);

  const handleClearPreviousChats = (action: boolean) => {
    if(action === true){
      setPreviousChats([]);
    }
  }

  return (
    <Grid
      templateAreas={{
        base: `"header" "main" "footer"`,
        lg: `"header header" "main" "footer"`,
      }}

      templateRows="repeat(12, 1fr)"
      templateColumns= "1fr"
      bg='#f0f3f5'
      >
      <GridItem
        as="header"
        className='gradient_background'
        rowSpan={1}
        >
        <NavBar onSelect={handleClearPreviousChats}/>
      </GridItem>

      <GridItem
        as="main"
        rowSpan={10}
        >
        <VStack>
          <ButtonSelectorPrompt/>
          <CardRecipientButtons
            cardRecipients={cardRecipients}
            onSelectItem={handleButtonClick}
          />
          <MessageInput
            textInput={userRequestMessage}
            userRequestSent={setuserRequestMessage}
            onDataReceived={handleMessageFromAPI}
          />
          <ChatHistory updatedChats={previousChats}/>
        </VStack>
      </GridItem>

      <GridItem
        as="footer"
        rowSpan={1}
        className='gradient_background'
        mt={3}
        >
      </GridItem>
    </Grid>
  );
}

export default App;
