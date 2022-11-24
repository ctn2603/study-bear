import { Box, Text, Flex, Center } from "@chakra-ui/react";
/* 
    TODO:
        make this more resizable

*/
function EventContainer({ height, width }) {
  const data = {
    title: "CS 70 Study Group",
    time: "now - 8:00PM",
    capacity: "5/10",
    description: "studying for midterm tmrw",
    location: "Mainstacks Level C",
  };
  return (
    <Box ml="15" h={height} w={width}>
      <Flex w="100%">
        <Flex flexDirection="column" m="0" w="100%">
          <Box h="75vh" w="95%" bg="#948585" borderRadius="20px">
            <Text
              textAlign="left"
              marginLeft={25}
              fontSize="17px"
              fontFamily="Arial"
            >
              Events
            </Text>

            <Center>
              <Box
                margin={10}
                h="17vh"
                w="85%"
                bg="#ccb4b4"
                borderRadius="15px"
              >
                <Text textAlign="left" marginLeft={15} fontFamily="Arial">
                  {data.title}
                </Text>
                <Text textAlign="left" marginLeft={15} fontFamily="Arial">
                  {data.time}
                </Text>
                <Text textAlign="left" marginLeft={15} fontFamily="Arial">
                  {data.location}
                </Text>
              </Box>
            </Center>
            <Center>
              <Box
                margin={10}
                h="17vh"
                w="85%"
                bg="#ccb4b4"
                borderRadius="15px"
              >
                <Text textAlign="left" marginLeft={15} fontFamily="Arial">
                  {data.title}
                </Text>
                <Text textAlign="left" marginLeft={15} fontFamily="Arial">
                  {data.time}
                </Text>
                <Text textAlign="left" marginLeft={15} fontFamily="Arial">
                  {data.location}
                </Text>
              </Box>
            </Center>

            <Center>
              <Box
                margin={10}
                h="17vh"
                w="85%"
                bg="#ccb4b4"
                borderRadius="15px"
              >
                <Text textAlign="left" marginLeft={15} fontFamily="Arial">
                  {data.title}
                </Text>
                <Text textAlign="left" marginLeft={15} fontFamily="Arial">
                  {data.time}
                </Text>
                <Text textAlign="left" marginLeft={15} fontFamily="Arial">
                  {data.location}
                </Text>
              </Box>
            </Center>
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
}
export default EventContainer;
