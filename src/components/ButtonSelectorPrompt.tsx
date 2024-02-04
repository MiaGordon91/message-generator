import { Heading, Text } from '@chakra-ui/react'

export const ButtonSelectorPrompt = () => {
  return (
    <>
    <Heading
        size={["xs", "md", "lg"]}
        style={{ fontFamily: "Quicksand" }}
        pt={4}
        color='#000000'
        >
        In need of a birthday message? 
    </Heading>
     <Text
      fontSize={[ "xs", "md", "l", "2xl"]}
      style={{ fontFamily: "Quicksand" }}
      color='#000000'
      pb={3}
      textAlign="center"
     >
     Select your recipient below and let us do the work...
   </Text>
   </>
  )
}

export default ButtonSelectorPrompt;