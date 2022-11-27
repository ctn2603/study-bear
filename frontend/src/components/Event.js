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
    <Center>
      <Box margin={10} h="17vh" w="85%" bg='#D9D9D9' borderRadius="15px">
        <Text textAlign="left" marginLeft={15} fontFamily="Arial">
          {item.title}
        </Text>
        <Text textAlign="left" marginLeft={15} fontFamily="Arial">
          {item.time}
        </Text>
        <Text textAlign="left" marginLeft={15} mb='0' fontFamily="Arial">
          {item.location}
        </Text>
        <Box textAlign='left'>
          <Link to='/eventData'><Button borderRadius='10' 
                                        bg='#6C4B5E'
                                        color='white' 
                                        onClick={() => onClick(item)} textAlign='left' m='10' mt='3'
                                        >More Info</Button></Link>
        </Box>
      </Box>
    </Center>
  );
};
export default Event;
