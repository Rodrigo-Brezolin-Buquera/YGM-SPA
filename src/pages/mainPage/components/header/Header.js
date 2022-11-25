import { Box, Image } from '@chakra-ui/react'
import Carousel from "./components/Carousel/Carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import white from "../../../../assets/logo/white.png"

export const Header = () => {
    return (
        <Box w="100%" pos={"relative"} display="block">
            <Box h={"10%"} w={"100%"} pos={"absolute"} zIndex="1" opacity={"0.50"} backgroundColor="black" >
                <Image h={"100%"} src={white} />
            </Box>
            <Carousel />
        </Box>
    )
}