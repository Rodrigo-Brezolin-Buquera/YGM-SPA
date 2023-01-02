import { teachersInformations } from "../../../../constants/texts/teachersInformation"
import { TeacherCard } from "./components/teacherCard/TeacherCard"
import { Box, Heading } from '@chakra-ui/react'
import { InvertedTeacherCard } from "./components/teacherCard/InvertedTeacherCard"

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

            <TeacherCard
                image={teachersInformations[0].image}
                name={teachersInformations[0].name}
                description={teachersInformations[0].description}
            />

            <InvertedTeacherCard
                image={teachersInformations[1].image}
                name={teachersInformations[1].name}
                description={teachersInformations[1].description}
            />
        </Box>
    )
}