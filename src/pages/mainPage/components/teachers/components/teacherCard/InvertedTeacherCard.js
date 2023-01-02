import { Card,  CardBody, Image, Stack, Heading, Text } from '@chakra-ui/react'

export const InvertedTeacherCard = ({image, description, name}) => {
  return(

    <Card
    direction={{ base: 'column', sm: 'row' }}
    overflow='hidden'
    variant='outline'
    p={"1em"}
    w={"100%"}
    align="center"
>
    
    <Stack>
        <CardBody>
            <Heading color={"brand.400"} size='lg' textAlign={["center", "end"]}>{name}</Heading>
            <Text py='2' color={"brand.400"} textAlign={["center", "end"]}>
                {description}
            </Text>
        </CardBody>
    </Stack>
    <Image
        objectFit='cover'
        borderRadius='full'
        boxSize='150px'
        src={image}
        alt={`${name} - Foto perfil`}
    />
</Card>
  )
}