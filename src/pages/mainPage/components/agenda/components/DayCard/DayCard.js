import { Text, Circle } from "@chakra-ui/react"
import { ClassCard } from "../ClassCard/ClassCard"
import { CardContainer, Column } from "./styled"

export const DayCard = ({ day, classes }) => {

    return (
        <Column>
           <CardContainer><Text fontSize="3xl">{day}</Text></CardContainer>
            {classes?.map((i) => <ClassCard yogaClass={i} />)}
        </Column>
    )
}