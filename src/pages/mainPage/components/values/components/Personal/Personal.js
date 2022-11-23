import { Text } from "@chakra-ui/react"
import { personalPackValue, personalValue } from "../../../../../../constants/texts/valuesInformation"

export const Personal = () => {
    return (
        <section>
             <Text> Aulas particulares ou grupos fechados no estudio</Text>
             <Text> Valor por aula: {personalValue} </Text>
             <Text> Pacote com 4 aulas: {personalPackValue} cada aula </Text>

        </section>
       
    )
}