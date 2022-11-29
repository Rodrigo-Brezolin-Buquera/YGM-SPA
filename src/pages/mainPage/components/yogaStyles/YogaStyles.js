import { stylesInfomation } from "../../../../constants/texts/stylesInformation"
import { StyleCard } from "./components/styleCards/StyleCard"
import { Box } from "@chakra-ui/react"

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
    flexWrap={"wrap"}
    backgroundColor={"brand.100"}
    justifyContent={"space-evenly"}
    paddingTop={"2em"}
    paddingBottom={"3em"}
    >
        {StyleCardList}
    </Box>
    )
}