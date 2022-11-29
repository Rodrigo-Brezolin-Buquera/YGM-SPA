import { teachersInformations } from "../../../../constants/texts/teachersInformation"
import { TeacherCard } from "./components/teacherCard/TeacherCard"
import { Text, Box, Heading } from '@chakra-ui/react'



export const Teachers = () => {


    return (
        <Box
            w={"100%"}
            display={"flex"}
            flexDirection={"column"}
            backgroundColor={"brand.100"}
            gap={"2em"}
            padding={"2em"}
            alignItems={"center"}
        >
            <Heading fontSize={"4xl"} color="brand.400"> Nossos professores </Heading>
            {teachersInformations.map(teacher => (
                <TeacherCard
                    image={teacher.image}
                    name={teacher.name}
                    description={teacher.description}
                />
            ))}

        </Box>
    )
}