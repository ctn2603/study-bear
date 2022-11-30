import {
  Box,
  Text,
  Flex,
  Center,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  IconButton,
  HStack,
  Image
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import React, { useState } from "react";
import Event from "./Event";
import { useContext } from 'react'
import { StateContext } from "../App";
import '../css/EventContainer.css'
import filterIcon from '../images/filterIcon.png'
/* 
    TODO:
        make this more resizable

*/
function EventContainer({ height, width }) {
  const data = useContext(StateContext).state.events

  const [item, setItem] = useState(data);

  const filterItems = [...new Set(data.map((Val) => Val.title))];

  const filtering = (curcat) => {
    const newItem = data.filter((newVal) => {
      return newVal.title === curcat;
    });
    setItem(newItem);
  };
  
  return (
    <Box ml="30" bg="#0327D6" h={height} w={width} borderRadius='5px' style={{'box-shadow': 'rgba(0, 0, 0, 0.35) 0px 5px 15px'}}>
      <Flex w="100%">
        <Flex flexDirection="column" m="0" w="100%">
          <Box h="75vh" w="95%" borderRadius="20px">
            <Box>
              <Text style={{'font-weight': 'bold'}} fontFamily='Futura' color='white' textAlign="left" marginLeft="25" fontSize="36px" p='10' pt='13' pb='0' mb='2'>
                Events
                <Menu>
                  <MenuButton
                    style={{'box-shadow': 'none', border:'none'}}
                    float="right"
                    marginRight="25"
                    as={IconButton}
                    aria-label="Options"
                    icon={<Image bg='#0327D6' h='60' w='60' src={filterIcon} alt='filter'/>}
                    size="lg"
                    variant="outline"
                  />
                  <MenuList>
                    <MenuItem>Class</MenuItem>
                    <MenuItem>Time </MenuItem>
                  </MenuList>
                </Menu>
              </Text>
            </Box>

            <Box align='center' w='100%' h='59vh' style={{overflow:'auto'}} className='vertScroll'>
              {item.map((item) => {
                return <Event item={item}></Event>
              })}
            </Box>
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
}
export default EventContainer;
