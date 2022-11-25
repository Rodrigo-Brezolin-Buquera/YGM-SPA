import { Text, Heading, Box, Circle,  } from '@chakra-ui/react'

export const InformationCard = ({ title, text, Icon, color }) => {
    return (
        <Box display={"flex"} flexDirection="column" w="30%" justifyContent={"flex-start"} alignItems={"center"} gap={"0.5em"} >
            <Circle size='100px' bg={color} color="white">
               {Icon}            
            </Circle>
            <Heading fontSize={"3xl"} textAlign="center">{title}</Heading>
            <Text textAlign="center" >{text}</Text>
        </Box>
    )
}