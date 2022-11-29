import { Text, Image, Link, Box, Heading } from "@chakra-ui/react"
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
            flexDirection={[ "column","column","row" ]}
            alignItems={"center"}
            justifyContent="space-evenly"
            paddingTop={"1em"}
        >

            <Box
                h={"100%"}
                display="flex"
                flexDirection={"column"}
                gap="1em"
                alignItems={"center"}
                justifyContent="space-evenly"
            >
                <Heading color="white" fontSize="xl"> Contato:</Heading>
                <Heading color="white" fontSize="xl"> {email}</Heading>
                <Heading color="white" fontSize="xl">{whatsapp}</Heading>
            </Box>
            <Box
                h={"100%"}
                display="flex"
                gap="1em"
                alignItems={"center"}
                justifyContent="center"
            >
                <Link href={facebook}><Image src={FacebookWhite} boxSize="120px" alt="Facebook" /></Link>
                <Link href={instagram}><Image src={InstagramWhite} boxSize="120px" alt="Instagram" /></Link>
            </Box>
            <Image src={White} h='150px' w="300px" alt="Yoga Mangala Logo" />
        </Box>
    )
}