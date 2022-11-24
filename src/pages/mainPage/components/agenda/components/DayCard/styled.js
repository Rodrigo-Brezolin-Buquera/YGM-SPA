import styled from "styled-components"
import { lightNeutralColor, secondaryColor } from "../../../../../../constants/colors"

export const CardContainer = styled.div`
display:flex;
flex-direction:column;
align-items: center;
border-radius:25px;
gap: 0.1em;
width: 150px;
background-color: ${secondaryColor};
padding: 0.3em 0;
color: ${lightNeutralColor};
`

export const Column = styled.div`
display:flex;
flex-direction:column;
justify-content: flex-start;
align-items:flex-start;
gap:1em;
height:100%;

`
