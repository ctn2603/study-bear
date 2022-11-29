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
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import React, { useState } from "react";
import Event from "./Event";
import { useContext } from 'react'
import { StateContext } from "../App";
import '../css/EventContainer.css'
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
    <Box ml="30" bg="#817F75" h={height} w={width} borderRadius='20px' style={{'box-shadow': 'rgba(0, 0, 0, 0.35) 0px 5px 15px'}}>
      <Flex w="100%">
        <Flex flexDirection="column" m="0" w="100%">
          <Box h="75vh" w="95%" borderRadius="20px">
            <Box>
              <Text textAlign="left" marginLeft="25" fontSize="25px" p='10' pt='13' pb='0' mb='2'>
                Events
                <Menu>
                  <MenuButton
                    float="right"
                    marginRight="25"
                    as={IconButton}
                    aria-label="Options"
                    icon={<HamburgerIcon />}
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

            <Box align='center' w='100%' h='85%' style={{overflow:'auto'}} className='vertScroll'>
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
