import { Grid, GridItem, Hide, VStack } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import CardRecipientButtons from "./components/CardRecipientButtons";
import MessageInput from "./components/MessageInput";
import { SetStateAction, useEffect, useState } from "react";
import ChatHistory from "./components/ChatHistory";

function App() {
  // define type definition of response object from the MessageInput component
  interface ResponseData {
    role: string;
    content: string;
  }

  const cardRecipients = ["Mum", "Dad", "Sister", "Brother"];

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
          role: "assistant",
          content: messageResponse.content,
        },
      ]);
    }
  }, [userRequestMessage,messageResponse]);

  return (
    <Grid
      templateAreas={{
        base: `"header" "main" "footer"`,
        md: `"header header" "main" "footer"`,
      }}

      templateRows={{
        base: "1fr",
      }}

      templateColumns={{
        base: "1fr",
        // lg: "250px 1fr",
      }}
      bg="#FFFFFF"
      >
      <GridItem
        area={"header"}
        bg="#F6AD55"
        colSpan={{ md: 3 }}
        p="12px"
        >
        <NavBar />
      </GridItem>

      <GridItem
        area={"main"}
        p={{ md: "10px", lg: "18px", xl: "24px" }}
        >
        <VStack>
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

      <Hide below="md">
        <GridItem
          as="footer"
          bg="#757575"
          colSpan={{ base: 3 }}
          p={5}
          >
          Footer
        </GridItem>
      </Hide>
    </Grid>
  );
}

export default App;
