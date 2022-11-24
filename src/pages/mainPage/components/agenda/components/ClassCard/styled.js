import styled from "styled-components"
import { darkNeutralColor, lightNeutralColor, primaryColor, secondaryColor } from "../../../../../../constants/colors"

export const CardContainer = styled.div`
display:flex;
flex-direction:column;
align-items: center;
border-radius:25px;
gap: 0.1em;
min-width: 150px;
background-color: ${primaryColor};
padding: 0.3em 0;
color: ${darkNeutralColor}
`
