
import { Gympass } from './components/Gympass/Gympass'
import { Personal } from './components/Personal/Personal'
import { PlanValues } from './components/PlanValues/PlanValues'
import { ValuesContainer } from './styled'

export const Values = () => {
    return (
        <ValuesContainer>     
          <Gympass/>
          <PlanValues/>
          <Personal/>
        </ValuesContainer>)
}