import { Text } from "@chakra-ui/react"
import { ClassCard } from "../ClassCard/ClassCard"

export const DayCard = ({ day, classes }) => {

    return (
        <div>
            <Text>{day}</Text>
            {classes?.map((i) => <ClassCard yogaClass={i} />)}
        </div>
    )
}