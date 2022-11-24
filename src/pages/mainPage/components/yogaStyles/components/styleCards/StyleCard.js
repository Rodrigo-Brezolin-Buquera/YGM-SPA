import { Card, CardHeader, CardBody, CardFooter, Image, Stack, Heading, Text } from '@chakra-ui/react'

export const StyleCard = ({image, text, title}) => {
  return(

<Card maxW='sm' backgroundColor={"whiteAlpha.400"} mt={"1em"}>
  <CardBody>
    <Image
      src={image}
      alt='Yoga posture'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>{title}</Heading>
      <Text>
        {text}
      </Text>
    
    </Stack>
  </CardBody>

</Card>
  )
}
