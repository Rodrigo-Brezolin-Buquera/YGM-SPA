import { FooterContainer } from "./styled"
import { Text } from "@chakra-ui/react"
import { address, email, facebook, instagram, whatsapp } from "../../../../constants/texts/contactInformation"

export const Footer = () => {
    return <FooterContainer>
        <Text>{address}</Text>
        <Text>{email}</Text>
        <Text>{whatsapp}</Text>
        <Text>{facebook}</Text>
        <Text>{instagram}</Text>


    </FooterContainer>
}