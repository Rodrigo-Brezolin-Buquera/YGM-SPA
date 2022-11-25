import { Text, Box, Image } from "@chakra-ui/react"
import Studio1 from "../../../../assets/photos/Studio1.jpeg"
import Studio2 from "../../../../assets/photos/Studio2.jpeg"
import Studio3 from "../../../../assets/photos/Studio3.jpeg"
import Studio4 from "../../../../assets/photos/Studio4.jpeg"
import { location } from "../../../../constants/texts/contactInformation"
import MapIcon from "../../../../assets/icons/MapIcon.png"

export const PhysicalSpace = () => {
    return <Box display={"flex"}  alignItems={"center"} justifyContent="space-between" w={"100%"}>
       <Image src={MapIcon}/>
        <Text> {location.address} </Text>
       
        <Box display={"flex"} flexWrap="wrap" gap={"1em"} justifyContent={"center"} padding="1em" w={"60%"} >
            <Image borderRadius="20px" boxShadow='base' w="35%" src={Studio1} />
            <Image borderRadius="20px" boxShadow='base' w="35%" src={Studio2} />
            <Image borderRadius="20px" boxShadow='base' w="35%"  src={Studio3} />
            <Image borderRadius="20px" boxShadow='base' w="35%" src={Studio4} />
        </Box>
   
    
    </Box>
}