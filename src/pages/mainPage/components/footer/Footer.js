import { FooterContainer, InfoContainer, SocialMediaContainer } from "./styled"
import { Text, Image, Link } from "@chakra-ui/react"
import { address, email, facebook, instagram, whatsapp } from "../../../../constants/texts/contactInformation"
import White from "../../../../assets/logo/white.png"
import FacebookWhite from "../../../../assets/socialMedia/FacebookWhite.png"
import InstagramWhite from "../../../../assets/socialMedia/InstagramWhite.png"

export const Footer = () => {
    return <FooterContainer>
        <InfoContainer>
            <Text color="white" fontSize="lg">Email: {email}</Text>
            <Text color="white" fontSize="lg">Whatsapp:{whatsapp}</Text>
        </InfoContainer>
        <SocialMediaContainer>
            <Link href={facebook}><Image src={FacebookWhite} boxSize="100px" alt="Facebook"/></Link>
            <Link href={instagram}><Image src={InstagramWhite} boxSize="100px" alt="Instagram"/></Link>
        </SocialMediaContainer>
        <Image src={White} h='100px' w="200px" alt="Yoga Mangala Logo" />
    </FooterContainer>
}