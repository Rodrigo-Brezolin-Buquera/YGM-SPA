import { Box, Heading, Text } from "@chakra-ui/react"
import { gympassLimit, gympassPlan } from "../../../../../../constants/texts/valuesInformation"

export const Gympass = () => {
    return (
        <Box display={"flex"} flexDirection="column" justifyContent={"center"} alignItems="center" gap={"1em"} >
            
            <Heading fontSize={"initial"} color={"brand.500"}>Aceitamos Gympass</Heading>
            <Text color={"brand.500"}>  Plano {gympassPlan}  ou superior </Text>
          
        </Box>
       
    )
}