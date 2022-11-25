import { Text, Heading, Box, Circle,  } from '@chakra-ui/react'

export const InformationCard = ({ title, text, Icon, color }) => {
    return (
        <Box display={"flex"} flexDirection="column" >
            <Circle size='100px' bg={color} color="white">
               {Icon}            
            </Circle>
            <Heading>{title}</Heading>
            <Text>{text}</Text>
        </Box>
    )
}