import { Header } from "./components/header/Header"
import {General} from "./components/general/General"
import { YogaStyles } from "./components/yogaStyles/YogaStyles"
import {PhysicalSpace} from "./components/physicalSpace/PhysicalSpace"
import {Agenda} from "./components/agenda/Agenda"
import { Values } from "./components/values/Values"
import { Teachers} from "./components/teachers/Teachers"
import {Footer} from "./components/footer/Footer"
import { Box } from "@chakra-ui/react"

const MainPage = () => {
    return (
        <Box
        w={"100%"}
        h={"100%"}
        display={"flex"}
        flexDirection={"column"}
        backgroundColor={"brand.400"}
        >
            <Header/>
            <General/>
            <YogaStyles/>
            <Agenda/>
            <Values/>
            <Teachers/>
            <PhysicalSpace/>
            <Footer/>
        </Box>)
}

export default MainPage