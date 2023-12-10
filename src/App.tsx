import { Grid, GridItem, Hide} from '@chakra-ui/react'
import Header from './components/Header'
import CardRecipient from './components/CardRecipient'

function App() {

  return (
    <Grid templateColumns="repeat(3, 1fr)" bg="gray.50">

    <GridItem 
      as='header'
      pl='2' 
      bg='#FFFFFF'
      color='blackAlpha.900'
      fontSize={{ lg: "28px" }}
      colSpan={{ base: 3, lg: 3, xl: 3}}
      p= "12px"
    >
       <Header />
    </GridItem>

    <GridItem 
      as='aside'
      bg="#2f00c9"
      minHeight= {{ md: "100vh" }}
      p= {{ lg: "12px", xl: "24px"}}
    >
       <CardRecipient />
    </GridItem>

  
    <GridItem 
      as='main'
      bg="#E0E0E0"
      colSpan={{ base: 2, lg: 2, xl: 2}}
      color='blackAlpha.900'
      minHeight="100vh" 
    >
      Main
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
