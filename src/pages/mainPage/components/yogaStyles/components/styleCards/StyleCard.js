import { Card, CardBody, Image, Stack, Heading, Text } from '@chakra-ui/react'

export const StyleCard = ({image, text, title}) => {
  return(

<Card 
  maxW='sm'
  backgroundColor={"brand.400"}
  mt={"2em"}
  boxShadow='md'
  >
    
  <CardBody>
    <Image
      src={image}
      alt='Yoga posture'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md' textAlign={"center"} color={"brand.500"} >{title}</Heading>
      <Text textAlign={"center"} color={"brand.500"} >
        {text}
      </Text>
    
    </Stack>
  </CardBody>

</Card>
  )
}
