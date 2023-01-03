import { teachersInformations } from "../../../../constants/texts/teachersInformation"
import { TeacherCard } from "./components/teacherCard/TeacherCard"
import { Box, Heading } from '@chakra-ui/react'


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
            <Heading fontSize={"5xl"} color="brand.400" textAlign={"center"}> Nossos professores </Heading>
            {teachersInformations.map(teacher => (
                <TeacherCard
                    key={teacher.name}
                    image={teacher.image}
                    name={teacher.name}
                    description={teacher.description}
                />
            ))}
        </Box>
    )
}