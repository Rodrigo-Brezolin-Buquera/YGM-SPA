import { teachersInformations } from "../../../../constants/texts/teachersInformation"
import { TeacherCard } from "./components/teacherCard/TeacherCard"
import { TeachersContainer } from "./styled"
import { Card, CardHeader, CardBody, CardFooter, Image, Stack, Heading, Text } from '@chakra-ui/react'
import LouizeProfile from "../../../../assets/photos/LouizeProfile.png"
import RodrigoProfile from "../../../../assets/photos/RodrigoProfile.png"
export const Teachers = () => {


    return <TeachersContainer>

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

                src= {LouizeProfile}
                alt='Louize Baya - Profile picture'
            />
            <Stack>
                <CardBody>
                    <Heading  color={"white"} size='md'>{teachersInformations[0].name}</Heading>
                    <Text py='2' color={"white"}>
                        {teachersInformations[0].description}
                    </Text>
                </CardBody>
            </Stack>
        </Card>

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

                src= {RodrigoProfile}
                alt='Rodrigo Brezolin - Profile picture'
            />
            <Stack>
                <CardBody>
                    <Heading size='md' color={"white"}>{teachersInformations[1].name}</Heading>
                    <Text py='2' color={"white"}>
                        {teachersInformations[1].description}
                    </Text>
                </CardBody>
            </Stack>
        </Card>


    </TeachersContainer>
}