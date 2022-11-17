import { Header } from "./components/header/Header"
import {General} from "./components/general/General"
import { YogaStyles } from "./components/yogaStyles/YogaStyles"
import {PhysicalSpace} from "./components/physicalSpace/PhysicalSpace"
import {Agenda} from "./components/agenda/Agenda"
import { Values } from "./components/values/Values"
import { Teachers} from "./components/teachers/Teachers"
import {Footer} from "./components/footer/Footer"

const MainPage = () => {
    return (
        <div>
            <Header/>
            <General/>
            <YogaStyles/>
            <PhysicalSpace/>
            <Agenda/>
            <Values/>
            <Teachers/>
            <Footer/>
       
        </div>)
}

export default MainPage