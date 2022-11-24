import { Box, Text, Flex, Center, HStack } from "@chakra-ui/react";

const Event = ({ item }) => {
  return (
    <Center>
      <Box margin={10} h="17vh" w="85%" bg="#ccb4b4" borderRadius="15px">
        <Text textAlign="left" marginLeft={15} fontFamily="Arial">
          {item.title}
        </Text>
        <Text textAlign="left" marginLeft={15} fontFamily="Arial">
          {item.time}
        </Text>
        <Text textAlign="left" marginLeft={15} fontFamily="Arial">
          {item.location}
        </Text>
      </Box>
    </Center>
  );
};
export default Event;
