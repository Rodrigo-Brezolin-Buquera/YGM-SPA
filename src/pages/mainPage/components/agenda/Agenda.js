import { fridayClasses, mondayClasses, saturdayClasses, thursdayClasses, tuesdayClasses, wednesdayClasses } from "../../../../constants/texts/agendaInformation"
import { DayCard } from "./components/DayCard/DayCard"
import { Box, Heading, Text } from "@chakra-ui/react"
import Background from "../../../../assets/photos/Background.png"

export const Agenda = () => {
    return (
        <Box
            display={"flex"}
            flexDirection="column"
            justifyContent={"center"}
            alignItems={"center"}
            gap="1em"
            paddingTop={"1em"}
            bgImage={Background} // nao esta responsiva
            h="30em"
        >
            <Heading fontSize={"3xl"}> Quadro de Aulas </Heading>
            <Box
                display={"flex"}
                justifyContent={"space-evenly"}
                alignItems={"center"}
                gap="1em"
                h={"70%"}
                w={"100%"}
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
                <Heading padding={"1em"} fontSize={"3xl"} > Agende uma aula experimental gratuita! </Heading>
            </Box>            
        </Box>

    )
}