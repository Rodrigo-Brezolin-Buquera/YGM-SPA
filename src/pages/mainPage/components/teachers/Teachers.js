import { teachersInformations } from "../../../../constants/texts/teachersInformation"
import { TeacherCard } from "./components/teacherCard/TeacherCard"
import { Text, Box } from '@chakra-ui/react'



export const Teachers = () => {


    return (
        <Box
            w={"100%"}
            display={"flex"}
            flexDirection={"column"}
            backgroundColor={"teal.400"}
            gap={"2em"}
            padding={"2em"}
            alignItems={"center"}
        >
            <Text fontSize={"4xl"} color="white"> Nossos professores </Text>
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