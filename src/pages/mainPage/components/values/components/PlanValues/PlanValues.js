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
    return   <TableContainer>
        <Heading>Valores planos</Heading>
    <Table variant='striped' colorScheme='teal'>
        <Thead>
            <Tr>
                <Th> Planos</Th>
                <Th>Mensal</Th>
                <Th>Trimestral</Th>
                <Th>Semestral</Th>
            </Tr>
        </Thead>
        <Tbody>
            <Tr>
                <Td>1x na semana</Td>
                <Td>{Monthy1x}</Td>
                <Td>{Quarterly1x}</Td>
                <Td>{Semester1x}</Td>
            </Tr>
            <Tr>
                <Td>2x na semana</Td>
                <Td>{Monthy2x}</Td>
                <Td>{Quarterly2x}</Td>
                <Td>{Semester2x}</Td>        
            </Tr>
        </Tbody>
    </Table>
</TableContainer>
}