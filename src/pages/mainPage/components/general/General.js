import { Text, Heading, Box } from '@chakra-ui/react'
import { heading1, heading2, heading3, subtitle, text1, text2, text3 } from '../../../../constants/texts/generalInformation'
import { InformationCard } from './components/InfomationCard'
import { AiFillHeart } from "react-icons/ai";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { GiWeightLiftingUp } from "react-icons/gi";


export const General = () => {
    return <>
        <Box
            w={"100%"}
            h={"100%"}
            display="flex"
            flexDirection={"column"}
            alignItems="center"
            paddingTop={"2em"} gap="1em"
        >
            <Heading margin={"0.5em"} color={"brand.500"} fontSize={"5xl"} >Yoga Mangala</Heading>
            <Text textAlign="center" color={"brand.500"} fontSize={"2xl"} padding="1em" margin={"1em"}>
                {subtitle}
            </Text>
            <Box
                display={"flex"}
                justifyContent="space-evenly"
                margin={"1em"}
            >
                <InformationCard
                    title={heading1}
                    text={text1}
                    Icon={<AiFillHeart size={"60px"} />}
                    color={"tomato"}
                />
                <InformationCard
                    title={heading2}
                    text={text2}
                    Icon={<GiWeightLiftingUp size={"60px"} />}
                    color={"gold"}
                />
                <InformationCard
                    title={heading3}
                    text={text3}
                    Icon={<BsFillMoonStarsFill size={"60px"} />}
                    color={"teal"}
                />
            </Box>

        </Box>
    </>
}