import { Box, Heading, Text } from "@chakra-ui/react"
import { gympassLimit, gympassPlan } from "../../../../../../constants/texts/valuesInformation"

export const Gympass = () => {
    return (
        <Box display={"flex"} flexDirection="column" justifyContent={"center"} alignItems="center" gap={"1em"} >
            <Heading fontSize={"initial"}>Aceitamos Gympass</Heading>
            <Text>  Plano {gympassPlan}  ou superior </Text>
          
        </Box>
       
    )
}