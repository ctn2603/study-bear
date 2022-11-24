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

/* 
    TODO:
        make this more resizable

*/
function EventContainer({ height, width }) {
  const data = [
    {
      title: "CS 70 Study Group",
      time: "now - 8:00PM",
      capacity: "5/10",
      description: "studying for midterm tmrw",
      location: "Mainstacks Level C",
    },
    {
      title: "CS 61C Study Group",
      time: "3:00PM - 4:00PM",
      capacity: "2/10",
      description: "reviewing parallelism",
      location: "Moffit Floor 1",
    },
    {
      title: "CS 61A Study Group",
      time: "5:00PM - 6:00PM",
      capacity: "5/5",
      description: "brainstorming for Ants",
      location: "Moffit Floor 5",
    },
  ];

  const [item, setItem] = useState(data);

  const filterItems = [...new Set(data.map((Val) => Val.title))];

  const filtering = (curcat) => {
    const newItem = data.filter((newVal) => {
      return newVal.title === curcat;
    });
    setItem(newItem);
  };

  return (
    <Box ml="15" h={height} w={width}>
      <Flex w="100%">
        <Flex flexDirection="column" m="0" w="100%">
          <Box h="75vh" w="95%" bg="#948585" borderRadius="20px">
            <Box>
              <Text textAlign="left" marginLeft="25" fontSize="17px">
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

            <Flex flexDirection="column" m="0" w="100%">
              {item.map((item) => {
                return <Event item={item}></Event>;
              })}
            </Flex>
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
}
export default EventContainer;
