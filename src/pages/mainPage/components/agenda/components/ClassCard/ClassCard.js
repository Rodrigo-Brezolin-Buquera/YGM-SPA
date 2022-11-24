import { Text } from "@chakra-ui/react"
import { CardContainer } from "./styled"

export const ClassCard = ({yogaClass}) => {
   
    return (
    <div>
        <CardContainer><Text fontSize="3xl">{yogaClass.time}</Text></CardContainer>
    </div>
    )
}