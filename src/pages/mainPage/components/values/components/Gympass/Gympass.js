import { Text } from "@chakra-ui/react"
import { gympassLimit, gympassPlan } from "../../../../../../constants/texts/valuesInformation"

export const Gympass = () => {
    return (
        <Text> Gympass: plano {gympassPlan}  ou superior - até {gympassLimit} checkins na semana </Text>
    )
}