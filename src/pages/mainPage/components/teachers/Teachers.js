import { teachersInformations } from "../../../../constants/texts/teachersInformation"
import { TeacherCard } from "./components/teacherCard/TeacherCard"
import { TeachersContainer } from "./styled"

export const Teachers = () => {

    const teacherCardsList = teachersInformations.map(teacher=> 
    <TeacherCard 
    key={teacher.name}
    name={teacher.name}
    description={teacher.description}
    image={teacher.image}
     />)

    return <TeachersContainer>
        {teacherCardsList}

    </TeachersContainer>
}