import { Text, Image, Link, Box } from "@chakra-ui/react"
import { email, facebook, instagram, whatsapp } from "../../../../constants/texts/contactInformation"
import White from "../../../../assets/logo/white.png"
import FacebookWhite from "../../../../assets/socialMedia/FacebookWhite.png"
import InstagramWhite from "../../../../assets/socialMedia/InstagramWhite.png"

export const Footer = () => {
    return (
        <Box
            w={"100%"}
            minH="15em"
            backgroundColor={"brand.300"}
            display="flex"
            alignItems={"center"}
            justifyContent="space-evenly"
      
        >

            <Box
                h={"100%"}
                display="flex"
                flexDirection={"column"}
                gap="1em"
                alignItems={"center"}
                justifyContent="space-evenly"
            >
                <Text color="white" fontSize="lg">Email: {email}</Text>
                <Text color="white" fontSize="lg">Whatsapp:{whatsapp}</Text>
            </Box>
            <Box
                h={"100%"}
                display="flex"
                gap="1em"
                alignItems={"center"}
                justifyContent="center"
            >
                <Link href={facebook}><Image src={FacebookWhite} boxSize="100px" alt="Facebook" /></Link>
                <Link href={instagram}><Image src={InstagramWhite} boxSize="100px" alt="Instagram" /></Link>
            </Box>
            <Image src={White} h='100px' w="200px" alt="Yoga Mangala Logo" />
        </Box>
    )
}