import { Text, Heading, Box } from '@chakra-ui/react'
import { heading1, subtitle, text1 } from '../../../../constants/texts/generalInformation'
import { InformationCard } from './components/InfomationCard'
import { GeneralContainer } from './styled'
import { AiFillHeart } from "react-icons/ai";

export const General = () => {
    return <>
        <GeneralContainer>
            <Heading>Yoga Mangala</Heading>
            <Heading fontSize={"sm"}>
               {subtitle}
            </Heading>
            <Box display={"flex"}>
                <InformationCard
                title={heading1}
                text={text1}
                Icon={<AiFillHeart size={"50px"}/>}
                color={"tomato"}
                />
            </Box>
        
        </GeneralContainer>
    </>
}