import { Text, Box, Image } from "@chakra-ui/react"
import Studio1 from "../../../../assets/photos/Studio1.jpeg"
import Studio2 from "../../../../assets/photos/Studio2.jpeg"
import Studio3 from "../../../../assets/photos/Studio3.jpeg"
import Studio4 from "../../../../assets/photos/Studio4.jpeg"
import { location } from "../../../../constants/texts/contactInformation"
import MapIcon from "../../../../assets/icons/MapIcon.png"

export const PhysicalSpace = () => {
    return (
        <Box
            display={"flex"}
            flexDirection="column"
            alignItems={"center"}
            justifyContent="space-between"
            w={"100%"} 
            minH="30%"          
            marginTop={"3em"}
            marginBottom={"3em"}
            gap="3em"
        >
            <Text fontSize={"4xl"} textAlign={"center"} color={"brand.500"} > Conheça nosso espaço</Text>    
            <Box
                display={"flex"}
                flexWrap="wrap"
                gap={"1em"}
                justifyContent={"center"}
                w={"100%"}
            >
                <Image borderRadius="20px" boxShadow='base' w="23%" src={Studio1} />
                <Image borderRadius="20px" boxShadow='base' w="23%" src={Studio2} />
                <Image borderRadius="20px" boxShadow='base' w="23%" src={Studio3} />
                <Image borderRadius="20px" boxShadow='base' w="23%" src={Studio4} />
            </Box>
            <Box display={"flex"} alignItems={"center"} justifyContent={"center"} >
                <Image src={MapIcon} w="5em" marginRight={"1em"} />
                <Text fontSize={"2xl"} textAlign={"center"} color={"brand.500"}> {location.address} </Text>
            </Box>
        </Box>
    )
}