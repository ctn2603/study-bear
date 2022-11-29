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
      <Box margin={10} h="17vh" w="40vw" bg='#D9D9D9' borderRadius="15px" ml='20' style={{'box-shadow': 'rgba(0, 0, 0, 0.35) 0px 5px 15px'}}>
        <Text textAlign="left" marginLeft={15} mb='0' pt='7' fontFamily="Arial">
          {item.title}
        </Text>
        <Text textAlign="left" marginLeft={15} mb='0'fontFamily="Arial">
          {item.time}
        </Text>
        <Text textAlign="left" marginLeft={15} mb='0' fontFamily="Arial">
          {item.location}
        </Text>
        <Box textAlign='left'>
          <Link to='/eventData' style={{textDecoration:'none'}}><Button
            borderRadius='7' 
            bg='#6C4B5E'
            color='white'
            border='0'
            onClick={() => onClick(item)} textAlign='left' m='10' mt='3'
            >More Info</Button></Link>
        </Box>
      </Box>
    
  );
};
export default Event;
