import { Box, Heading} from '@chakra-ui/react'
import { Monthy1x, Monthy2x, Quarterly1x, Quarterly2x, Semester1x, Semester2x } from '../../../../../../constants/texts/valuesInformation'

export const PlanValues = () => {
    return (
        <Box
            minWidth="80%"
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
            gap="1em"
            fontSize={"1xl"}
            w={["100%", "90%", "80%"]}
        >
            <Heading fontSize={"5xl"} color={"brand.500"} marginTop={"1em"}>Valores planos</Heading>
            <Box
                display={"flex"}
                flexDirection={"column"}
                alignItems={"center"}
                w={"100%"}
            >
                <Box display={"flex"} backgroundColor={"teal.100"} justifyContent={"space-evenly"} w={"100%"}>
                    <Box textAlign="center" marginY={"0.5em"} fontSize={"1xl"} w={"23%"}>Planos</Box>
                    <Box textAlign="center" marginY={"0.5em"} fontSize={"1xl"} w={"23%"}>Mensal</Box>
                    <Box textAlign="center" marginY={"0.5em"} fontSize={"1xl"} w={"23%"}>Trimestral</Box>
                    <Box textAlign="center" marginY={"0.5em"} fontSize={"1xl"}  w={"23%"}>Semestral</Box>
                </Box>
                <Box display={"flex"} justifyContent={"space-evenly"} w={"100%"}>
                    <Box textAlign="center" marginY={"0.5em"} w={"23%"}>1x na semana</Box>
                    <Box textAlign="center" marginY={"0.5em"} w={"23%"}>{Monthy1x}</Box>
                    <Box textAlign="center" marginY={"0.5em"} w={"23%"}>{Quarterly1x}</Box>
                    <Box textAlign="center" marginY={"0.5em"} w={"23%"}>{Semester1x}</Box>
                </Box>
                <Box display={"flex"}justifyContent={"space-evenly"} w={"100%"} >
                    <Box textAlign="center" marginY={"0.5em"} w={"23%"}>2x na semana</Box>
                    <Box textAlign="center" marginY={"0.5em"} w={"23%"}>{Monthy2x}</Box>
                    <Box textAlign="center" marginY={"0.5em"} w={"23%"}>{Quarterly2x}</Box>
                    <Box textAlign="center" marginY={"0.5em"} w={"23%"}>{Semester2x}</Box>
                </Box>
            </Box>
        </Box>
    )
}