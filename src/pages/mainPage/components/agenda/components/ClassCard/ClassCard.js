import { Text, Box } from "@chakra-ui/react"

export const ClassCard = ({yogaClass}) => {
   
    return (
        <Box
        display={"flex"}
           flexDirection={"column"}
           justifyContent={"center"}
           alignItems={"center"}
           gap={"0.1em"}
           borderRadius={"25px"}
           width={"150px"}
           backgroundColor={"teal.400"}
           padding={"0.3em"}
        >
            <Text fontSize="3xl">{yogaClass.time}</Text>
        </Box>
    )
}