import styled from "styled-components"
import { primaryColor, secondaryColor } from "../../../../constants/colors"

export const FooterContainer = styled.header`
width:100%;
min-height:30%;
background-color: ${secondaryColor};
display: flex;
align-items:center;
justify-content: space-around;
padding: 0 10em;
`

export const InfoContainer = styled.div`
display: flex;
flex-direction: column;
gap:2em;
justify-content:center;
align-items:center;
height: 100%;
`

export const SocialMediaContainer = styled.div`
display: flex;
gap:2em;
justify-content:center;
align-items:center;
height: 100%;
`