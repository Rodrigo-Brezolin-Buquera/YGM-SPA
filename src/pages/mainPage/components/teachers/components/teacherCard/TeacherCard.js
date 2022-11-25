import { Card,  CardBody, Image, Stack, Heading, Text } from '@chakra-ui/react'

export const TeacherCard = ({image, description, name}) => {
  return(

    <Card
    direction={{ base: 'column', sm: 'row' }}
    overflow='hidden'
    variant='outline'
    p={"1em"}

>
    <Image
        objectFit='cover'
        borderRadius='full'
        boxSize='150px'

        src={image}
        alt={`${name} - Foto perfil`}
    />
    <Stack>
        <CardBody>
            <Heading color={"white"} size='md'>{name}</Heading>
            <Text py='2' color={"white"}>
                {description}
            </Text>
        </CardBody>
    </Stack>
</Card>
  )
}
