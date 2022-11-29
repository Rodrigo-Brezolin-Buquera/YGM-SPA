import { Text, Box } from "@chakra-ui/react"
import { ClassCard } from "../ClassCard/ClassCard"


export const DayCard = ({ day, classes }) => {

    return (
        <Box
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"flex-start"}
        alignItems={"flex-start"}
        gap={"2em"}
        h={"100%"}
        >
           <Box
           display={"flex"}
           flexDirection={"column"}
           justifyContent={"center"}
           alignItems={"center"}
           gap={"0.1em"}
           borderRadius={"25px"}
           width={"150px"}
           backgroundColor={"brand.300"}
           padding={"0.3em"}
           >
               <Text color={"white"} fontSize="3xl">{day}</Text>
           </Box>
            {classes?.map((i) => <ClassCard key={i.time} yogaClass={i} />)}
        </Box>
    )
}