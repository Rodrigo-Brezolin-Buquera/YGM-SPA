import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
    Heading,
} from '@chakra-ui/react'
import { Monthy1x, Monthy2x, Quarterly1x, Quarterly2x, Semester1x, Semester2x } from '../../../../../../constants/texts/valuesInformation'

export const PlanValues = () => {
    return <TableContainer
     minWidth="80%" 
    display={"flex"} 
    flexDirection={"column"}
    alignItems={"center"} 
    gap="1em"
    fontSize={"1xl"}
    
    >
        <Heading fontSize={"3xl"} color={"brand.500"}>Valores planos</Heading>
        <Table variant='simple' >
            <Thead
            >
                <Tr backgroundColor={"teal.100"}>
                    <Th textAlign="center" fontSize={"1xl"}>Planos</Th>
                    <Th textAlign="center" fontSize={"1xl"} >Mensal</Th>
                    <Th textAlign="center" fontSize={"1xl"} >Trimestral</Th>
                    <Th textAlign="center" fontSize={"1xl"}  >Semestral</Th>
                </Tr>
            </Thead>
            <Tbody>
                <Tr>
                    <Td textAlign="center" fontSize={"1xl"} >1x na semana</Td>
                    <Td textAlign="center" >{Monthy1x}</Td>
                    <Td textAlign="center" >{Quarterly1x}</Td>
                    <Td textAlign="center" >{Semester1x}</Td>
                </Tr>
                <Tr>
                    <Td textAlign="center" fontSize={"1xl"} >2x na semana</Td>
                    <Td textAlign="center" >{Monthy2x}</Td>
                    <Td textAlign="center" >{Quarterly2x}</Td>
                    <Td textAlign="center" >{Semester2x}</Td>
                </Tr>
            </Tbody>
        </Table>
    </TableContainer>
}