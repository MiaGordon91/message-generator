import { Grid, GridItem, Hide} from '@chakra-ui/react'
import NavBar from './components/NavBar'
import CardRecipientList from './components/CardRecipientList'
import MessageBox from './components/MessageBox'
import { useState } from 'react';

function App() {

  const cardRecipients = ["Mum", "Dad", "Sister", "Brother"];

  const [selectedRecipients, setSelectedRecipient] = useState('');

  return (
    <Grid templateColumns="repeat(3, 1fr)" bg="gray.50">

    <GridItem 
      as='header'
      pl='2' 
      color='blackAlpha.900'
      fontSize={{ lg: "28px" }}
      colSpan={{ base: 1, lg: 3, xl: 3}}
      p= "12px"
    >
       <NavBar />
    </GridItem>

    <GridItem 
      // as='aside'
      // color='blackAlpha.900'
      minHeight= {{ md: "100vh" }}
      p= {{ lg: "12px", xl: "24px"}}
    >
       <CardRecipientList cardRecipients={cardRecipients} onSelectItem={(recipient) => setSelectedRecipient(recipient)}/>
    </GridItem>

  
    <GridItem 
      as='main'
      bg="#E0E0E0"
      colSpan={{ base: 2, lg: 2, xl: 2}}
      color='blackAlpha.900'
      minHeight="100vh" 
    >
      <MessageBox selectedCardRecipient={selectedRecipients}/>
    </GridItem>

    <Hide below="sm">
    <GridItem 
      bg="#000000"
      as='footer'
      minWidth= "100vh"
      colSpan={{md: 3, lg: 3, xl: 3}}
      color='blackAlpha.900'
    >
      Footer
    </GridItem>
    </Hide>

  </Grid>
  )
}

export default App
