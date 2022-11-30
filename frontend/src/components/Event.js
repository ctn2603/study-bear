import { Box, Text, Flex, Center, HStack, Button } from "@chakra-ui/react";
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { StateContext } from "../App";
const Event = ({ item }) => {
  const setState = useContext(StateContext).setState
  const state = useContext(StateContext).state

  const onClick = (item) => {
    state.eventDataId = item.id
    setState(JSON.parse(JSON.stringify(state)))
    console.log(state.eventDataId)
  }

  return (
      <Box margin={10} h="16vh" w="30vw" bg='#FFFFFF' borderRadius="15px" ml='20' style={{'box-shadow': 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px'}}>
        <Text fontSize='18' textAlign="left" marginLeft={15} mb='0' pt='7' fontFamily="Futura">
          {item.title}
        </Text>
        <Text fontSize='16' textAlign="left" marginLeft={15} mb='0'fontFamily="Futura">
          {item.time}
        </Text>
        <Text fontSize='16' textAlign="left" marginLeft={15} mb='0' fontFamily="Futura">
          {item.location}  * {item.capacity - item.currCap} spots open
        </Text>
        <Box textAlign='left' fontFamily='Futura' mt='5'>
          <Link to='/eventData' style={{textDecoration:'none'}}><Box
            style={{'box-shadow': 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px'}}
            borderRadius='3' 
            bg='#0327D6'
            color='white'
            border='0'
            mb='0'
            textAlign='center'
            onClick={() => onClick(item)} h='10%' w='20%' m='10' mt='3'
            >More Info</Box></Link>
        </Box>
      </Box>
    
  );
};
export default Event;
