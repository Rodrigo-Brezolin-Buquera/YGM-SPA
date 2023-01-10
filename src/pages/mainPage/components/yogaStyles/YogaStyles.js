import { stylesInfomation } from "../../../../constants/texts/stylesInformation"
import { StyleCard } from "./components/styleCards/StyleCard"
import { Box, Heading } from "@chakra-ui/react"

export const YogaStyles = () => {

    const StyleCardList = stylesInfomation.map((style) =>
        <StyleCard
            key={style.title}
            title={style.title}
            text={style.text}
            image={style.image}
        />)

    return (
        <Box
            w={"100%"}
            display={"flex"}
            flexDirection={"column"}
            backgroundColor={"brand.100"}
            justifyContent={"center"}
            alignItems={"center"}
            paddingTop={"2em"}
            paddingBottom={"3em"}
        >
            <Heading color={"brand.400"} fontSize={"5xl"}  > Atividades</Heading>
            <Box
                w={"100%"}
                display={"flex"}
                flexWrap={"wrap"}
                justifyContent={"space-evenly"}
            >
                {StyleCardList}
            </Box>
        </Box>

    )
}