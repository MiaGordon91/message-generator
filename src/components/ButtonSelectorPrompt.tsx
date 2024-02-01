import { Heading, Text } from '@chakra-ui/react'

export const ButtonSelectorPrompt = () => {
  return (
    <>
    <Heading
        size={{ sm: "m", md: "l", lg: "xl" }}
        style={{ fontFamily: "Quicksand" }}
        pt={4}
        color='#000000'
        >
        In need of a birthday message? 
    </Heading>
     <Text
     fontSize={{ sm: "l", md: "xl", lg: "2xl"}}
     style={{ fontFamily: "Quicksand" }}
     color='#000000'
     pb={5}
     >
     Select your recipient below and let us do the work...
   </Text>
   </>
  )
}

export default ButtonSelectorPrompt;