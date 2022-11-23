import { fridayClasses, mondayClasses, saturdayClasses, thursdayClasses, tuesdayClasses, wednesdayClasses } from "../../../../constants/texts/agendaInformation"
import { DayCard } from "./components/DayCard/DayCard"
import { AgendaContainer } from "./styled"

export const Agenda = () => {
    return <AgendaContainer>
        <DayCard day={"Segunda"} classes={mondayClasses}/>
        <DayCard day={"Terça"} classes={tuesdayClasses}/>
        <DayCard day={"Quarta"}classes={wednesdayClasses} />
        <DayCard day={"Quinta"} classes={thursdayClasses}/>
        <DayCard day={"Sexta"} classes={fridayClasses}/>
        <DayCard day={"Sábado"} classes={saturdayClasses}/>
    </AgendaContainer>
}