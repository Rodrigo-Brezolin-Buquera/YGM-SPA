import { fridayClasses, mondayClasses, saturdayClasses, thursdayClasses, tuesdayClasses, wednesdayClasses } from "../../../../constants/texts/agendaInformation"
import { DayCard } from "./components/DayCard/DayCard"
import { AgendaContainer } from "./styled"
import { Box } from "@chakra-ui/react"
import Carousel1 from "../../../../assets/photos/Carousel1.png"

export const Agenda = () => {
    return (
        <Box
            display={"flex"}
            flexDirection="column"
            justifyContent={"center"}
            alignItems={"center"}
            gap="1em"
            paddingTop={"1em"}
            bgImage={Carousel1} // trocar de foto e deixar opaca no canva
            h="50em"
        >
            <Box
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                gap="1em"
            >
                <DayCard day={"Segunda"} classes={mondayClasses} />
                <DayCard day={"Terça"} classes={tuesdayClasses} />
                <DayCard day={"Quarta"} classes={wednesdayClasses} />
                <DayCard day={"Quinta"} classes={thursdayClasses} />
                <DayCard day={"Sexta"} classes={fridayClasses} />
                <DayCard day={"Sábado"} classes={saturdayClasses} />
            </Box>

            // faixa amarela: "agende aula experimental"
        </Box>

    )
}