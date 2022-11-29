import { fridayClasses, mondayClasses, saturdayClasses, thursdayClasses, tuesdayClasses, wednesdayClasses } from "../../../../constants/texts/agendaInformation"
import { DayCard } from "./components/DayCard/DayCard"
import { Box, Heading, Text } from "@chakra-ui/react"

export const Agenda = () => {
    return (
        <Box
            display={"flex"}
            flexDirection="column"
            justifyContent={"center"}
            alignItems={"center"}
            gap="1em"
            paddingTop={"1em"}
            h="30em"
        >
            <Heading fontSize={"3xl"} color={"brand.500"}> Quadro de Aulas </Heading>
            <Box
                display={"flex"}
                justifyContent={"space-evenly"}
                alignItems={"center"}
                gap="1em"
                w={"90%"}
                backgroundColor={"white"}
                borderRadius={"25px"}
                padding={"2em"}
              
            >
                <DayCard day={"Segunda"} classes={mondayClasses} />
                <DayCard day={"Terça"} classes={tuesdayClasses} />
                <DayCard day={"Quarta"} classes={wednesdayClasses} />
                <DayCard day={"Quinta"} classes={thursdayClasses} />
                <DayCard day={"Sexta"} classes={fridayClasses} />
                <DayCard day={"Sábado"} classes={saturdayClasses} />
            </Box>

            <Box
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            flexGrow={"1"}
            w={"100%"}    
            backgroundColor={"brand.300"}
            >
                <Heading padding={"1em"} fontSize={"3xl"} color={"brand.500"} > Agende uma aula experimental gratuita! </Heading>
            </Box>            
        </Box>

    )
}