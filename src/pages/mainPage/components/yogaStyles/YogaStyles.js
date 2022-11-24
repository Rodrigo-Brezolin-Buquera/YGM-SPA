import { stylesInfomation } from "../../../../constants/texts/stylesInformation"
import { StyleCard } from "./components/styleCards/StyleCard"
import { YogaStylesContainer } from "./styled"

export const YogaStyles = () => {

    const StyleCardList = stylesInfomation.map((style) =>
        <StyleCard
            key={style.title}
            title={style.title}
            text={style.text}
            image={style.image}
        />)

    return <YogaStylesContainer>
        {StyleCardList}
    </YogaStylesContainer>
}