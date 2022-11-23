import { Text } from "@chakra-ui/react"

export const ClassCard = ({yogaClass}) => {
   
    return (
    <div>
        <Text>{yogaClass.time}</Text>
    </div>
    )
}