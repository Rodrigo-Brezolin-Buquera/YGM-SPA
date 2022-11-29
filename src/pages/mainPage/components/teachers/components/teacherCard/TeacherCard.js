import { Card,  CardBody, Image, Stack, Heading, Text } from '@chakra-ui/react'

export const TeacherCard = ({image, description, name}) => {
  return(

    <Card
    direction={{ base: 'column', sm: 'row' }}
    overflow='hidden'
    variant='outline'
    p={"1em"}
    w={"100%"}
    align="center"
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
            <Heading color={"brand.400"} size='md' textAlign={["center", "initial"]}>{name}</Heading>
            <Text py='2' color={"brand.400"} textAlign={["center", "initial"]}>
                {description}
            </Text>
        </CardBody>
    </Stack>
</Card>
  )
}
