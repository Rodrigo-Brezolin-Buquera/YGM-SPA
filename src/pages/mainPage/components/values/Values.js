import { Gympass } from './components/Gympass/Gympass'
import { Personal } from './components/Personal/Personal'
import { PlanValues } from './components/PlanValues/PlanValues'

import { Box } from '@chakra-ui/react'

export const Values = () => {
    return (
        <Box
          display={"flex"}
          flexDirection={"column"}
          gap={"3em"}
          alignItems={"center"}
          justifyContent={"center"}
          padding={"2em"}
          w={"100%"}
        > 
          <PlanValues/> 
          <Box
          display={"flex"}
          gap={"6em"}
          >
          <Gympass/>
          <Personal/>
            </Box>   
          
        </Box>)
}