import { fridayClasses, mondayClasses, saturdayClasses, thursdayClasses, tuesdayClasses, wednesdayClasses } from "../../../../constants/texts/agendaInformation"
import { DayCard } from "./components/DayCard/DayCard"
import { Box, Heading, Image } from "@chakra-ui/react"
import Whatsapp from "../../../../assets/socialMedia/Whatsapp.png"
import ReactWhatsapp from 'react-whatsapp';
import { reactWhatapp, whatsappMessage } from "../../../../constants/texts/contactInformation";

export const Agenda = () => {
    return (
        <Box
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"center"}
            alignItems={"center"}
            gap="1em"
            paddingTop={"1em"}
            minHeight="30em"
            h={["70em", "70em", "30em"]}
        >
            <Heading fontSize={"5xl"} color={"brand.500"} marginTop={"1em"} > Quadro de Aulas </Heading>
            <Box
                display={"flex"}
                flexDirection={["column", "column", "row"]}
                justifyContent={"space-evenly"}
                alignItems={"center"}
                gap="1em"
                w={"90%"}
                padding={"2em"}
                flexGrow={"2"}
            >
                {mondayClasses?.length ? <DayCard day={"Segunda"} classes={mondayClasses} /> : null}

                {tuesdayClasses?.length ? <DayCard day={"Terça"} classes={tuesdayClasses} /> : null}

                {wednesdayClasses?.length ? <DayCard day={"Quarta"} classes={wednesdayClasses} /> : null}

                {thursdayClasses?.length ? <DayCard day={"Quinta"} classes={thursdayClasses} /> : null}

                {fridayClasses?.length ? <DayCard day={"Sexta"} classes={fridayClasses} /> : null}

                {saturdayClasses?.length ? <DayCard day={"Sábado"} classes={saturdayClasses} /> : null}
            </Box>

            <Box
                display={"flex"}
                flexDirection={["column", "row"]}
                justifyContent={"center"}
                alignItems={"center"}
                flexGrow={"1"}
                w={"100%"}
                backgroundColor={"brand.300"}
                paddingY={"1em"}
            >
                <ReactWhatsapp number={reactWhatapp} message={whatsappMessage}>
                    <Heading
                        textAlign={"center"}
                        fontSize={"3xl"}
                        color={"brand.500"}
                    > Agende uma aula experimental gratuita:
                    </Heading>
                </ReactWhatsapp>
                <ReactWhatsapp number={reactWhatapp} message={whatsappMessage}>
                    <Image src={Whatsapp} boxSize={"5em"} padding={"1em"} />
                </ReactWhatsapp>
                <ReactWhatsapp number={reactWhatapp} message={whatsappMessage}>
                    <Heading
                        fontSize={"3xl"}
                        color={"brand.500"}
                    >  (15) 98130-2549
                    </Heading>
                </ReactWhatsapp>
            </Box>
        </Box>

    )
}