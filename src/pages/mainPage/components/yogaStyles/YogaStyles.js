import { stylesInfomation } from "../../../../constants/stylesInformation"
import { StyleCard } from "./components/styleCards/StyleCard"
import { YogaStylesContainer } from "./styled"



export const YogaStyles = () => {

    const StyleCardList = stylesInfomation.map((style)=>  <StyleCard title={style.title} text={style.text} image={style.image} />  )

    return <YogaStylesContainer>
        
        {StyleCardList}
       
        
        
        </YogaStylesContainer>
}