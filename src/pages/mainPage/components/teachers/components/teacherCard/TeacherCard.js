import { Card, CardHeader, CardBody, CardFooter, Image, Stack, Heading, Text } from '@chakra-ui/react'

export const TeacherCard = ({image, description, name}) => {
  return(

<Card
  direction={{ base: 'column', sm: 'row' }}
  overflow='hidden'
  variant='outline'
>
  <Image
    objectFit='cover'
    maxW={{ base: '100%', sm: '200px' }}
    src={image}
    alt='Caffe Latte'
  />

  <Stack>
    <CardBody>
      <Heading size='md'>{name}</Heading>
      <Text py='2'>
        {description}
      </Text>
    </CardBody>
  </Stack>
</Card>
  )
}
