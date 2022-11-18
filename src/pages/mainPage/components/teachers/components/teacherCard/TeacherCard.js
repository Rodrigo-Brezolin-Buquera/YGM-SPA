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
    src='https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60'
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
