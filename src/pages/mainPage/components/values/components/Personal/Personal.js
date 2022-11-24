import { Heading, Text,Box } from "@chakra-ui/react"
import { personalPackValue, personalValue } from "../../../../../../constants/texts/valuesInformation"

export const Personal = () => {
    return (

        <Box display={"flex"} flexDirection="column" justifyContent={"center"} alignItems="center" gap={"1em"} >
            <Heading fontSize={"2xl"}> Personal </Heading>
            <Text> Aulas particulares ou grupos fechados no estudio</Text>
             <Text> Valor por aula: {personalValue} </Text>
             <Text> Pacote com 4 aulas: {personalPackValue} cada aula </Text>
          
        </Box>
       
    )
}